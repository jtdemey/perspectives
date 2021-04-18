import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Banner = styled(animated.section)`
  width: 60%;
  height: 56px;
  background: #EA0001;
  overflow: hidden;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const TopBanner = props => {
  const [spring, set] = useSpring(() => ({
    left: -1500,
    config: {
      mass: 1,
      tension: 220,
      friction: 60 
    }
  }));
  set(() => ({ left: 0 }));
  return (
    <Banner style={{
      transform: spring.left.interpolate(x => `translateX(${x}px) skewX(35deg)`)
    }}>
      <h4 style={{transform: 'skewX(-35deg)'}}>SPROINK DDDDD</h4>
    </Banner>
  );
};

TopBanner.propTypes = {
  topcolor: PropTypes.string,
  toptext: PropTypes.string
};

export default TopBanner;