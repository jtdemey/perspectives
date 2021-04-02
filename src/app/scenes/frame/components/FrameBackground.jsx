import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled(animated.section)`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 200% 200%;
`;

const getBg = props => {
  let result = props.colors && props.colors.length > 0 ? `linear-gradient(to right bottom, ${props.colors.join(', ')})`
    : `linear-gradient(to right bottom, #0099ff, #002e4d)`;
    console.log(props)
  if(props.stripeangle || props.stripewidth || props.stripecolor) {
    console.log('eh');
  }
  return result;
};

let fadeValue = true;

const FrameBackground = props => {
  const [spring, set] = useSpring(() => ({
    backgroundImage: getBg(props),
    bgPos: 0,
    config: {
      duration: 5000
    }
  }));
  set(() => ({
    backgroundImage: getBg(props),
    bgPos: fadeValue ? -(props.width || 800) : 0
  }));
  React.useEffect(() => void setInterval(() => {
    fadeValue = !fadeValue;
    set(() => ({ bgPos: fadeValue ? -(props.width || 800) : 0, config: { duration: 5000 } }));
  }, 5000), []);
  return (
    <Background style={{...spring, backgroundPosition: spring.bgPos.interpolate(x => `${x}px ${-(props.height || 450)}px`)}} />
  );
};

FrameBackground.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colors: PropTypes.array,
  stripeangle: PropTypes.number,
  stripewidth: PropTypes.number,
  stripecolor: PropTypes.string
};

export default FrameBackground;