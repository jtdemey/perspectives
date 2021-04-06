import * as React from 'react';
import PropTypes from 'prop-types';
import CascadingHeader from './CascadingHeader';
import FormContainer from './FormContainer';
import ListSection from './ListSection';
import TileList from './TileList';
import SlidingSubheader from './SlidingSubheader';
import { fsListItems, staticListItems, dynamicListItems } from '../data/ListItems';

const PerspectivesBody = props => {
  const [formType, setFormType] = React.useState('');
  const [isFading, setFadeout] = React.useState(false);
  const openForm = href => {
    props.setFormVisible(true);
    setFormType(href);
  };
  if(props.formVisible) {
    return (
      <FormContainer isFading={isFading} formType={formType} />
    );
  }
  return (
    <React.Fragment>
      <CascadingHeader isFading={isFading} text="Perspectives" />
      <SlidingSubheader isFading={isFading} text="by John Torsten" />
      <ListSection isFading={isFading}>
        <TileList openForm={openForm} setFadeout={setFadeout} items={fsListItems} />
        <TileList openForm={openForm} setFadeout={setFadeout} items={staticListItems} />
        <TileList openForm={openForm} setFadeout={setFadeout} items={dynamicListItems} />
      </ListSection>
    </React.Fragment>
  );
};

PerspectivesBody.propTypes = {
  formVisible: PropTypes.bool,
  setFormVisible: PropTypes.func
};

export default PerspectivesBody;