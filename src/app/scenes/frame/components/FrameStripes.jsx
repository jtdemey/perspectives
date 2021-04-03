import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isHex } from '../../../utils';

const Section = styled(animated.section)`
  display: block;
  position: relative;
  top: 0px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: top right;
`;

const getBg = props => {
  const angle = props.stripeAngle > 0 ? props.stripeAngle : 145;
  const color = isHex(props.stripeColor) ? props.stripeColor : '#809fff';
  const width = props.stripeWidth > 0 ? props.stripeWidth : 1;
  return `repeating-linear-gradient(${angle}deg, transparent, transparent ${width}px, ${color} ${width}px, ${color} ${width * 2}px)`;
};

const springConf = props => () => ({
  background: getBg(props),
  opacity: props.stripeWidth > 0 ? 1 : 0,
  top: -(props.height)
});

const FrameStripes = props => {
  const [spring, set] = useSpring(springConf(props));
  set(springConf(props));
  return (
    <Section style={spring} />
  );
};

FrameStripes.propTypes = {
  height: PropTypes.number,
  stripeAngle: PropTypes.number,
  stripeWidth: PropTypes.number,
  stripeColor: PropTypes.string
};

export default FrameStripes;