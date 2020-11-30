import React from 'react';
import BackButton from '../components/shared/BackButton';
import { CODE_SANDBOX_SHOWCASE } from '../constants';
import Styled from '../styles/showcase';

const { ShowcaseWrapper } = Styled;

const Showcase = () => (
  <ShowcaseWrapper>
    <BackButton prevLink="tutorial" />
    {CODE_SANDBOX_SHOWCASE[0].link}
  </ShowcaseWrapper>
);
export default Showcase;
