import * as React from 'react';
import { animated, interpolate, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isHex } from '../../../utils';

const Section = styled(animated.section)`
  width: 80%;
  height: 80%;
  margin: auto;
  background: #00ff00;
  border-style: solid;
`;

const getStyle = spring => ({
  borderColor: spring.borderColor,
  borderWidth: spring.borderWidth,
  width: interpolate(spring.width, w => `${w}%`),
  height: interpolate(spring.height, h => `${h}%`)
});

const setStyle = props => ({
  borderColor: props.outlinecolor && isHex(props.outlinecolor) ? props.outlinecolor : '#87E7FD',
  borderWidth: props.outlinewidth || 0,
  width: props.width || 80,
  height: props.height || 80
});

const BorderCenter = props => {
  const [spring, set] = useSpring(() => ({ width: 80, height: 80 }));
  set(setStyle(props));
  return (
    <Section style={getStyle(spring)}>

    </Section>
  );
};

BorderCenter.propTypes = {
  outlinecolor: PropTypes.string,
  outlinewidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

export default BorderCenter;