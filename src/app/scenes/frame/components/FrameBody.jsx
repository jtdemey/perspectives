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
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 200% 200%;
`;

const border = (w, props) => `${w}px solid ${props.borderColor || '#001f33'}`
const shadow = props => `${props.boxShadowWidth || 0}px ${props.boxShadowWidth || 0}px #222`;

const FrameBody = props => {
  const [spring, set] = useSpring(() => ({
    width: props.width || 800,
    height: props.height || 450,
    borderTop: border(props.borderTop, props),
    borderRight: border(props.borderRight, props),
    borderBottom: border(props.borderBottom, props),
    borderLeft: border(props.borderLeft, props),
    boxShadow: shadow(props)
  }));
  set(() => ({
    width: props.width || 800,
    height: props.height || 450,
    borderTop: border(props.borderTop, props),
    borderRight: border(props.borderRight, props),
    borderBottom: border(props.borderBottom, props),
    borderLeft: border(props.borderLeft, props),
    boxShadow: shadow(props)
  }));
  return (
    <Article>
      <Frame style={spring}>
        <FrameBackground  width={props.width}
                          height={props.height}
                          colors={props.colors}
                          stripeAngle={props.stripeAngle}
                          stripeWidth={props.stripeWidth}
                          stripeColor={props.stripeColor} />
      </Frame>
    </Article>
  );
};

FrameBody.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colors: PropTypes.array,
  borderColor: PropTypes.string,
  borderTop: PropTypes.number,
  borderRight: PropTypes.number,
  borderBottom: PropTypes.number,
  borderLeft: PropTypes.number,
  boxShadowWidth: PropTypes.number,
  stripeAngle: PropTypes.number,
  stripeWidth: PropTypes.number,
  stripeColor: PropTypes.string
};

export default FrameBody;