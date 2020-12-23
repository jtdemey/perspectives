import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import TowersForm from './forms/TowersForm';
import styled from 'styled-components';

const FormSection = styled(animated.section)`

`;

const getForm = formType => {
  switch(formType) {
    case 'towers': return <TowersForm />;
  }
};

const FormContainer = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    y: 400
  }));
  set(() => ({ opacity: 1, y: 0 }));
  return (
    <FormSection style={{
      opacity: spring.opacity,
      transform: spring.y.interpolate(y => `translateY(${y}px)`)
    }}>{getForm(props.formType)}</FormSection>
  );
};

FormContainer.propTypes = {
  formType: PropTypes.string
};

export default FormContainer;