import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSprings } from 'react-spring';
import styled from 'styled-components';
import { between } from '../utils';

const SPAN_TEXT = ['Fullscreen', 'Overlays', 'Animations'];

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 2rem;
  gap: 2rem;
`;

const ArticleHeader = styled(animated.span)`
  display: block;
  width: 5.5rem;
  background: #D0CDD7;
  padding: 0.5rem;
  margin-top: -2rem;
  font-size: 1.1rem;
  text-align: center;
`;

const Article = styled(animated.article)`
  padding: 1rem 2rem;
  border: 4px #ACB0BD solid;
  border-radius: 1rem;
`;

const ListSection = props => {
  const [springs, set] = useSprings(props.children.length, i => ({
    opacity: 0,
    rotation: 120,
    config: {
      mass: 1,
      tension: 300 - i * 50,
      friction: i * 20 + 40
    }
  }));
  set(() => ({ delay: 1000, opacity: 1, rotation: 0 }));
  return (
    <Section>
      {springs.map(({ opacity, rotation }, i) => (
        <Article key={i} style={{
          opacity: opacity,
          transform: rotation.interpolate(r => `rotateY(${r}deg)`)
        }}>
          <ArticleHeader>{SPAN_TEXT[i]}</ArticleHeader>
          {props.children[i]}
        </Article>
      ))}
    </Section>
  );
};

ListSection.propTypes = {
  text: PropTypes.string
};

export default ListSection;