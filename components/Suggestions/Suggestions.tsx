import React from 'react';
import styled from 'styled-components';

const FadedSpan = styled.span`
  color: ${(props) => props.theme.bodyFade};
  padding-top: 0.1em;
  @media ${(props) => props.theme.deviceMax.mobileL} {
    width:100%;
  }
`;
const HighlightedSpan = styled.span`
  border: 1px solid ${(props) => props.theme.body};
  border-radius: 2px;
  padding: 0.1rem;
  display: block;
  text-align: center;
  color: ${(props) => props.theme.body};
  margin: 0em 1.2em;
  
  cursor: pointer;
  text-decoration: none;
  @media ${(props) => props.theme.deviceMax.mobileL} {
    margin-top: 1em;
  }
`;
const StyledSuggestion = styled.div`
  display: flex;
  margin-top: 1.2em;
  margin-inline-start: 1.2em;
  gap:1rem;
  @media ${(props) => props.theme.deviceMax.mobileL} {
    flex-wrap: wrap;
    gap:0.5rem;
  }
  & > * {
    display: flex;
    align-items: center;
    height: 1.1em;
    margin:0;
  }
`;

const Suggestions = (props: any) => (
  <StyledSuggestion>
    <FadedSpan> &gt;_ Type \h for help or </FadedSpan>
        <HighlightedSpan onClick={props.handleShowTutorial} >
          Click for my resume
        </HighlightedSpan>
        <HighlightedSpan as="a" href="/interesting" >
          Interesting Problems I had a a dev
        </HighlightedSpan>
  </StyledSuggestion>
);
export default Suggestions;
