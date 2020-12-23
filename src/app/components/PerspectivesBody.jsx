import * as React from 'react';
import PropTypes from 'prop-types';
import CascadingHeader from './CascadingHeader';
import FormContainer from './FormContainer';
import ListSection from './ListSection';
import TileList from './TileList';
import SlidingSubheader from './SlidingSubheader';
import TextInput from './TextInput';

const genLi = (href, text) => ({ href, text });
const listItems = [
  genLi('towers', 'Towers'),
  genLi('/towers', 'Lions'),
  genLi('/towers', 'Tigers'),
  genLi('/towers', 'Bears'),
  genLi('/towers', 'Oh My')
];

const PerspectivesBody = props => {
  const [formType, setFormType] = React.useState(null);
  const [isFading, setFadeout] = React.useState(false);
  const openForm = href => {
    props.setFormVisible(true);
    setFormType(href);
  };
  if(props.formVisible) {
    return (
      <React.Fragment>
        <CascadingHeader isFading={isFading} text="Form Time" />
        <SlidingSubheader isFading={isFading} text="beefed" />
        <FormContainer formType={formType} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <CascadingHeader isFading={isFading} text="Perspectives" />
      <SlidingSubheader isFading={isFading} text="by JD" />
      <TextInput label="colah" />
      <ListSection isFading={isFading}>
        <TileList openForm={openForm} setFadeout={setFadeout} items={listItems} />
        <TileList items={listItems} />
        <TileList items={listItems} />
      </ListSection>
    </React.Fragment>
  );
};

PerspectivesBody.propTypes = {
  formVisible: PropTypes.bool,
  setFormVisible: PropTypes.func
};

export default PerspectivesBody;