import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContactText from './ContactText';

const Section = styled.section`
  grid-column: 1 / 3;
`;

const TextArea = props => {
  return (
    <Section>
      <ContactText  addr1={props.addr1}
                    addr2={props.addr2}
                    addr3={props.addr3}
                    phone={props.phone}
                    preaddress={props.preaddress}
                    website={props.website} />
    </Section>
  );
};

TextArea.propTypes = {
  addr1: PropTypes.string,
  addr2: PropTypes.string,
  addr3: PropTypes.string,
  phone: PropTypes.string,
  preaddress: PropTypes.string,
  website: PropTypes.string
};

export default TextArea;
