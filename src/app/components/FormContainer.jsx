import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import CascadingHeader from './CascadingHeader';
import { firstUpper } from '../utils';
import FormContent from './FormContent';
import { getFormInputs } from '../data/FormInputs';

const FormSection = styled(animated.section)`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5rem;
`;

const FormContainer = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    y: 400
  }));
  set(() => ({ opacity: 1, y: 0 }));
  return (
    <React.Fragment>
      <CascadingHeader isFading={props.isFading} text={firstUpper(props.formType)} />
      <FormSection style={{
        opacity: spring.opacity,
        transform: spring.y.interpolate(y => `translateY(${y}px)`)
      }}>
        <FormContent inputs={getFormInputs(props.formType)} />
      </FormSection>
    </React.Fragment>
  );
};

FormContainer.propTypes = {
  formType: PropTypes.string,
  isFading: PropTypes.bool
};

export default FormContainer;