import * as React from 'react';
import PropTypes from 'prop-types';
import { animated, useSprings } from 'react-spring';
import styled from 'styled-components';

const SPAN_TEXT = ['Fullscreen', 'Static', 'Dynamic'];

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
  background: #091E05;
  padding: 0.5rem;
  margin-top: -2rem;
  font-size: 1.1rem;
  text-align: center;
  color: #D0CDD7;
`;

const Article = styled(animated.article)`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background: #ACB0BD;
  border: 2px #ACB0BD solid;
  border-radius: 0.5rem;
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
  set(i => props.isFading ? ({ opacity: 0, rotation: 50 - i * 8 }) : ({ delay: 600, opacity: 1, rotation: 0 }));
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
  isFading: PropTypes.bool,
  text: PropTypes.string
};

export default ListSection;