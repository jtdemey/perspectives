import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleText from './TitleText';
import { isHex } from '../../../utils';

const Section = styled(animated.section)`
  display: flex;
  min-width: 16rem;
  height: 12rem;
  margin: auto;
  text-align: center;
  background: #333;
`;

const TitleContainer = props => {
  const [spring, set] = useSpring(() => ({
    background: '#222'
  }));
  set(() => ({ background: isHex(props.background) ? props.background : '#222' }));
  return (
    <Section style={spring}>
      <TitleText color={props.color} text={props.text} transition={props.transition} />
    </Section>
  );
};

TitleContainer.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  transition: PropTypes.bool
};

export default TitleContainer;