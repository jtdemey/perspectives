import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormPetals from './FormPetals';
import OverlayFormBody from './OverlayFormBody';

const Section = styled(animated.section)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  text-align: left;
  overflow: hidden;
  z-index: 4;
`;

const OverlayForm = props => {
  const [spring, set] = useSpring(() => ({ opacity: 0 }));
  set(props.visible ? ({ opacity: 1 }) : ({ opacity: 0 }));
  return (
    <Section style={spring}>
      <FormPetals visible={props.visible} />
      <OverlayFormBody inputs={props.inputs} config={props.config} setConfig={props.setConfig} />
    </Section>
  );
};

OverlayForm.propTypes = {
  config: PropTypes.object,
  inputs: PropTypes.array,
  setConfig: PropTypes.func,
  visible: PropTypes.bool
};

export default OverlayForm;