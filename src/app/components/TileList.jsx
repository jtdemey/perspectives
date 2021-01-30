import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSprings } from 'react-spring';
import styled from 'styled-components';
import { firstUpper, getSpringConfig } from '../utils';

const List = styled(animated.ul)`
  width: 100%;
  text-align: center;
  align-items: center;
`;

const ListItem = styled(animated.li)`
  width: 12rem;
  height: 3rem;
  margin: 1rem auto;
  background: #416165;
  color: #D9DBF1;
  cursor: pointer;
`;

const LiText = styled(animated.span)`
  display: inline-block;
  padding: 0.875rem;
  font-size: 1.25rem;
  text-decoration: none;
`;

const TileList = props => {
  const [springs, set] = useSprings(props.items.length, () => getSpringConfig(1, 400, 80, {
    opacity: 0,
    y: 400
  }));
  set(i => ({ delay: (i * 200) + 800, opacity: 1, y: 8 }));
  const clickEvent = href => {
    props.setFadeout(true);
    set(() => ({ opacity: 0, y: 0 }));
    setTimeout(() => {
      props.setFadeout(false);
      props.openForm(href);
    }, 1000);
  };
  return (
    <List>
      {springs.map(({ opacity, y }, i) => (
        <ListItem key={i} style={{
          opacity: opacity,
          transform: y.interpolate(y => `translate(0, ${y}px)`)
        }} onClick={() => clickEvent(props.items[i])}>
          <LiText>
            {firstUpper(props.items[i])}
          </LiText>
        </ListItem>
      ))}
    </List>
  );
};

TileList.propTypes = {
  openForm: PropTypes.func,
  setFadeout: PropTypes.func,
  items: PropTypes.array
};

export default TileList;