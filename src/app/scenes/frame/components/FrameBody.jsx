import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FrameBackground from './FrameBackground';

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
  background-position: top right;
  background-size: 200% 200%;
`;

const FrameBody = props => {
  const [spring, set] = useSpring(() => ({
    width: props.width || 800,
    height: props.height || 450,
    borderWidth: props.borderWidth || 0,
    borderColor: props.borderColor || '#001f33'
  }));
  set(() => ({
    width: props.width || 800,
    height: props.height || 450,
    borderWidth: props.borderWidth || 0,
    borderColor: props.borderColor || '#001f33'
  }));
  return (
    <Article>
      <Frame style={spring}>
        <FrameBackground  width={props.width}
                          height={props.height}
                          colors={props.colors}
                          stripeangle={props.stripeangle}
                          stripewidth={props.stripewidth}
                          stripecolor={props.stripecolor} />
      </Frame>
    </Article>
  );
};

FrameBody.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colors: PropTypes.array,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  stripeangle: PropTypes.number,
  stripewidth: PropTypes.number,
  stripecolor: PropTypes.string
};

export default FrameBody;