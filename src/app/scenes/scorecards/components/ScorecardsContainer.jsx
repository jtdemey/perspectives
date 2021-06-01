import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Scorecard from './Scorecard';

const PREFIX = 'src/app/scenes/scorecards/media/';

const Container = styled.article`
  width: 100%;
  height: 100%;
  margin: 5rem;
`;

const ScorecardsContainer = props => {
  return (
    <Container>
      <Scorecard  background={props.cardColors[0]}
                  iconBackground={props.cardColors[1]}
                  imgSrc={`${PREFIX}soapyface.png`}
                  text={props.text[0]}
                  textDelay={props.textDelays[0]}
                  visible={props.visible} />
      <Scorecard  background={props.cardColors[2]}
                  iconBackground={props.cardColors[3]}
                  imgSrc={`${PREFIX}toastlogo_zoomed.png`}
                  text={props.text[1]}
                  textDelay={props.textDelays[1]}
                  visible={props.visible}
                  delay={props.delay} />
    </Container>
  );
};

ScorecardsContainer.propTypes = {
  cardColors: PropTypes.array,
  color: PropTypes.string,
  delay: PropTypes.number,
  text: PropTypes.array,
  textDelays: PropTypes.array,
  visible: PropTypes.bool
};

export default ScorecardsContainer;