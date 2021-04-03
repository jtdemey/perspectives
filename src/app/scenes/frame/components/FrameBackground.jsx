import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FrameStripes from './FrameStripes';
import { isHex } from '../../../utils';

const Background = styled(animated.section)`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 200% 200%;
`;

const getBgImg = props => {
  if(!props.colors || props.colors.some(x => !isHex(x) || x.length !== 7)) {
    return `linear-gradient(to right bottom, #003380, #1a75ff)`;
  } else if(props.colors.length === 1) {
    return `linear-gradient(to right bottom, ${props.colors[0]}, ${props.colors[0]})`;
  } else {
    return `linear-gradient(to right bottom, ${props.colors.join(', ')})`;
  }
};

let fadeValue = true;

const FrameBackground = props => {
  const [spring, set] = useSpring(() => ({
    backgroundImage: getBgImg(props),
    bgPos: 0,
    config: {
      duration: 5000
    }
  }));
  set(() => ({
    backgroundImage: getBgImg(props),
    bgPos: fadeValue ? -(props.width || 800) : 0
  }));
  React.useEffect(() => void setInterval(() => {
    fadeValue = !fadeValue;
    set(() => ({ bgPos: fadeValue ? -(props.width || 800) : 0, config: { duration: 5000 } }));
  }, 5000), []);
  return (
    <React.Fragment>
      <Background style={{...spring,
        backgroundPosition: spring.bgPos.interpolate(x => `${x}px ${-(props.height || 450)}px`)
      }} />
      <FrameStripes height={props.height} stripeAngle={props.stripeAngle} stripeWidth={props.stripeWidth} stripeColor={props.stripeColor} />
    </React.Fragment>
  );
};

FrameBackground.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colors: PropTypes.array,
  stripeAngle: PropTypes.number,
  stripeWidth: PropTypes.number,
  stripeColor: PropTypes.string
};

export default FrameBackground;