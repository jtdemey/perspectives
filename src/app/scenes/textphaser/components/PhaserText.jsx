import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h2`
  position: absolute;
  margin: auto;
  font-family: 'Shrikhand', cursive;
  font-size: 5rem;
  color: #8D0801;
`;

const PhaserText = props => {
  return (
    <Text style={{
      display: props.visible ? 'block' : 'none',
      color: props.color || '#8D0801',
      transform: `translate(-${props.offset}px, ${props.offset}px)`,
      textShadow: props.textIndex === 0 ? `rgba(0, 0, 0, 0.24) 0px 3px 8px` : undefined,
      zIndex: `${40 - props.textIndex}`}}>{props.text}</Text>
  );
};

PhaserText.propTypes = {
  color: PropTypes.string,
  offset: PropTypes.number,
  text: PropTypes.string,
  textIndex: PropTypes.number,
  visible: PropTypes.bool
};

export default PhaserText;