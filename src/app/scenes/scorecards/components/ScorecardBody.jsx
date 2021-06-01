import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Header = styled(animated.h2)`
  margin: auto 2rem;
  font-size: 7rem;
  font-family: 'Lobster', cursive;
`;

const ScorecardBody = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 1,
    y: 0
  }));
  set(() => ({
    delay: props.delay || 1000,
    opacity: props.visible ? 1 : 0,
    y: props.visible ? 0 : 60 
  }));
  return (
    <Body>
      <Header style={{
        transform: spring.y.interpolate(y => `translateY(${y}px)`),
        opacity: spring.opacity
      }}>{props.text}</Header>
    </Body>
  );
};

ScorecardBody.propTypes = {
  delay: PropTypes.number,
  text: PropTypes.string,
  visible: PropTypes.bool
};

export default ScorecardBody;