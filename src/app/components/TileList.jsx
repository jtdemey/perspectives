import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSprings } from 'react-spring';
import styled from 'styled-components';

const List = styled(animated.ul)`
  width: 100%;
  margin-top: 6rem;
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
  const [springs, set] = useSprings(props.items.length, () => ({
    opacity: 0,
    y: 400,
    config: {
      mass: 1,
      tension: 400,
      friction: 80
    }
  }));
  set(i => ({ delay: (i * 200) + 1800, opacity: 1, y: 0 }));
  return (
    <List>
      {springs.map(({ opacity, y }, i) => (
        <ListItem key={i} style={{
          opacity: opacity,
          transform: y.interpolate(y => `translate(0, ${y}px)`)
        }}>
          <a href={props.items[i].href}>
            <LiText>
              {props.items[i].text}
            </LiText>
          </a>
        </ListItem>
      ))}
    </List>
  );
};

TileList.propTypes = {
  items: PropTypes.array
};

export default TileList;