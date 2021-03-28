import * as React from 'react';
import { animated, useSpring, interpolate } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
  display: grid;
  place-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Frame = styled(animated.section)`
  width: 24rem;
  height: 6rem;
  border-style: solid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200% 200%;
`;

const getBg = props => props.colors && props.colors.length > 0 ? `linear-gradient(to right bottom, ${props.colors.join(', ')})`
  : `linear-gradient(to right bottom, #0099ff, #002e4d)`;

const FrameBody = props => {
  const [fadeState, setFadeState] = React.useState(true);
  const [spring, set] = useSpring(() => ({
    width: props.width || 800,
    height: props.height || 450,
    backgroundImage: getBg(props.colors),
    bgPos: 0,
    borderWidth: props.borderWidth || 0,
    borderColor: props.borderColor || '#001f33'
  }));
  set(() => ({
    width: props.width || 800,
    height: props.height || 450,
    backgroundImage: getBg(props.colors),
    bgPos: 0,
    borderWidth: props.borderWidth || 0,
    borderColor: props.borderColor || '#001f33'
  }));
  React.useEffect(() => void setInterval(() => {
    const newState = !fadeState;
    console.log(newState)
    setFadeState(state => !state);
    set(() => ({ bgPos: newState ? 100 : -100 }));
  }, 2000), []);
  return (
    <Article>
      <Frame style={{...spring, backgroundPosition: spring.bgPos.interpolate(x => `${x}px 50px`)}} />
    </Article>
  );
};

FrameBody.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colors: PropTypes.array,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number
};

export default FrameBody;