import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Banner = styled(animated.section)`
  width: calc(80% + 8px);
  height: 64px;
  background: #0D3674;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ScrollBanner = props => {
  const [spring, set] = useSpring(() => ({
    left: -1500,
    config: {
      mass: 1,
      tension: 300,
      friction: 60 
    }
  }));
  set(() => ({ left: 0 }));
  return (
    <Banner style={{
      transform: spring.left.interpolate(x => `translateX(${x}px)`)
    }}>
    </Banner>
  );
};

ScrollBanner.propTypes = {
  bottomcolor: PropTypes.string,
  scrolltext: PropTypes.string
};

export default ScrollBanner;