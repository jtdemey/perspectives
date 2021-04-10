import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBanner from './TopBanner';
import MainBanner from './MainBanner';
import ScrollBanner from './ScrollBanner';

const Article = styled.article`
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
`;

const BannerContainer = props => {
  return (
    <Article>
      <TopBanner topcolor={props.topcolor} toptext={props.toptext} />
      <MainBanner maintext={props.maintext} maincolor={props.maincolor} />
      <ScrollBanner bottomcolor={props.bottomcolor} scrolltext={props.scrolltext} />
    </Article>
  );
};

BannerContainer.propTypes = {
  topcolor: PropTypes.string,
  toptext: PropTypes.string,
  maintext: PropTypes.string,
  maincolor: PropTypes.string,
  bottomcolor: PropTypes.string,
  scrolltext: PropTypes.string
};

export default BannerContainer;