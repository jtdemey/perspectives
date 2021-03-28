import * as React from 'react';
import { animated, useSprings } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isHex } from '../../../utils';

const defaultColors = ['#00B295', '#191516', '#AB2346'];

const Section = styled.section`
  width: 100%;
  height: 100%;
  background: #00cc00;
  overflow: hidden;
`;

const Pane = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  overflow: hidden;
`;

const Panes = props => {
  const [springs, set] = useSprings(3, i => ({
    x: window.innerWidth,
    background: defaultColors[i] 
  }));
  set(i => ({
    delay: i * 250,
    background: isHex(props.colors[i]) ? props.colors[i] : defaultColors[i],
    x: props.isAnimated ? 0 : window.innerWidth
  }));
  return (
    <Section>
      {springs.map((spring, i) => (
        <Pane key={i} style={{
          background: spring.background,
          transform: spring.x.interpolate(x => `translateX(${x}px) rotate(20deg)`)
        }} />
      ))}
    </Section>
  );
};

Panes.propTypes = {
  colors: PropTypes.array,
  isAnimated: PropTypes.bool
};

export default Panes;