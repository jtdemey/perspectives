import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import TextInput from '../TextInput';

const TowersForm = props => {
  const [spring, set] = useSpring(() => ({
    opacity: 0,
    y: -400
  }));
  set(() => ({ opacity: 1, y: 0 }));
  return (
    <animated.form style={spring}>
      <TextInput label="colah" />
    </animated.form>
  );
};

export default TowersForm;