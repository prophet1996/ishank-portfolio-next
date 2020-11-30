import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/shared/BackButton';
import { Tabs } from '../components/Widgets';

const StyledTabs = styled(Tabs)``;
const Wrapper = styled.div`
  display: flex;
  padding: 5em;
  justify-content: center;
  align-content: center;
`;
export default () => (
  <Wrapper>
    <BackButton prevLink="tutorial" />
    <StyledTabs />
  </Wrapper>
);
