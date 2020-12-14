import * as React from 'react';
import PropTypes from 'prop-types';
import FormContainer from './FormContainer';
import ListSection from './ListSection';
import TileList from './TileList';

const genLi = (href, text) => ({ href, text });
const listItems = [
  genLi('/towers', 'Towers'),
  genLi('/towers', 'Lions'),
  genLi('/towers', 'Tigers'),
  genLi('/towers', 'Bears'),
  genLi('/towers', 'Oh My')
];

const openForm = (href, visFunc) => visFunc(href);

const PerspectivesBody = props => {
  const [formType, setFormType] = React.useState(null);
  if(props.formShowing) {
    return (
      <FormContainer formType={formType} />
    );
  }
  return (
    <ListSection>
      <TileList clickFunc={openForm} items={listItems} />
      <TileList items={listItems} />
      <TileList items={listItems} />
    </ListSection>
  );
};

PerspectivesBody.propTypes = {
  formVisible: PropTypes.bool,
  setFormVisible: PropTypes.func
};

export default PerspectivesBody;