import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Banner = styled(animated.section)`
  width: 80%;
  height: 128px;
  background: linear-gradient(145deg, #F1F9EE, #B6B8AA);
  overflow: hidden;
  border-right: 8px solid #EA0001;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const MainBanner = props => {
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

MainBanner.propTypes = {
  maintext: PropTypes.string,
  maincolor: PropTypes.string
};

export default MainBanner;