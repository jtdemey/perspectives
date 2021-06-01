import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background: darkred;
`;

const Image = styled.img`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
`;

const ScorecardIcon = props => {
  return (
    <Icon style={{ background: props.background }}>
      <Image src={props.imgSrc} />
    </Icon>
  );
};

ScorecardIcon.propTypes = {
  background: PropTypes.string,
  imgSrc: PropTypes.string
};

export default ScorecardIcon;