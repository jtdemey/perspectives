import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScorecardIcon from './ScorecardIcon';
import ScorecardBody from './ScorecardBody';

const Card = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 32%;
  background: red;
  margin-bottom: 12rem;
  color: #eee;
`;

const Scorecard = props => {
  const [spring, set] = useSpring(() => ({
    width: '100%',
    background: 'red'
  }));
  set(() => ({
    delay: props.delay || 0,
    width: props.visible ? '100%' : '0%',
    background: props.background || 'red'
  }));
  return (
    <Card style={spring}>
      <ScorecardIcon background={props.iconBackground} imgSrc={props.imgSrc} />
      <ScorecardBody text={props.text || "2/10"} delay={props.textDelay} visible={props.visible} />
    </Card>
  );
};

Scorecard.propTypes = {
  background: PropTypes.string,
  iconBackground: PropTypes.string,
  delay: PropTypes.number,
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  textDelay: PropTypes.number,
  visible: PropTypes.bool
};

export default Scorecard;