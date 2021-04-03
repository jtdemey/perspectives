import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Heebo', sans-serif;
  overflow: hidden;
  z-index: 4;
  padding: 1rem 0;
`;

const CheckboxInput = styled.input`
  width: 20rem;
  height: 2rem;
`;

const TextInput = styled.input`
  width: 20rem;
  height: 2rem;
`;

const Label = styled.label`
  color: #f2f2f2;
`;

const handleChange = (e, confKey, setConfig, setValue) => {
  const result = {};
  result[confKey] = e.target.value;
  setConfig(prev => ({ ...prev, ...result}));
  setValue(e.target.value);
};

const OverlayFormInput = props => {
  const [value, setValue] = React.useState('');
  const changeFunc = e => handleChange(e, props.name, props.setConfig, setValue);
  return (
    <Container>
      <Label htmlFor={props.name}>{props.type === 'checkbox' ? props.placeholder : ''}</Label>
      {props.type === 'checkbox' ?
        <CheckboxInput type={props.type} name={props.name} placeholder={props.placeholder} onChange={changeFunc} value={value} />
        : <TextInput type={props.type} name={props.name} placeholder={props.placeholder} onChange={changeFunc} value={value} />}
    </Container>
  );
};

OverlayFormInput.propTypes = {
  config: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  setConfig: PropTypes.func,
  type: PropTypes.string
};

export default OverlayFormInput;