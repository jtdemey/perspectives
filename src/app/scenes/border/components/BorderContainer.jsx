import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BorderCenter from './BorderCenter';
import { isHex } from '../../../utils';

const Section = styled(animated.section)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #333;
`;

const BorderContainer = props => {
  const [spring, set] = useSpring(() => ({
    background: '#333333'
  }));
  set(() => ({ background: isHex(props.bordercolor) ? props.bordercolor : '#333333' }));
  return (
    <Section style={spring}>
      <BorderCenter outlinecolor={props.outlinecolor} outlinewidth={props.outlinewidth} width={parseInt(props.width)} height={parseInt(props.height)} />
    </Section>
  );
};

BorderContainer.propTypes = {
  bordercolor: PropTypes.string,
  outlinecolor: PropTypes.string,
  outlinewidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

export default BorderContainer;