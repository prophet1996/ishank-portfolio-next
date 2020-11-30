import React from 'react';
import styled from 'styled-components';

const getMediaQuery = (
  screenSize: { tablet: string; mobileM: string },
  size: number,
  delta: number,
) => `

@media ${screenSize.tablet} {
  font-size: calc(${size}em - 2em + ${delta}em);
}
@media ${screenSize.mobileM} {
  font-size: calc(${size}em - 3em + ${delta}em);
}
`;

const getUnderLineContent = (highLight: string) => `
&:before {
  background-color: ${highLight};
  content: "";
  left: 0;
  right: 0;
  bottom: -4px;
  width: inherit;
  position: absolute;
  height: 0.5em;
  z-index: 0;
}`;

const ResumeHeadingWrapper = styled.div`
  position: relative;
  margin-bottom: 1em;
`;

const Heading: any = styled.h2`
  margin: auto;
  font-size: ${(props: ResumeHeadingProps) => props.size}em;
  font-weight: ${(props: ResumeHeadingProps) => (props.bold ? 'bolder' : 'normal')};
  ${(props) => (props.underline ? getUnderLineContent(props.theme.highLight) : '')}
  ${(props) => (props.size > 3
    ? getMediaQuery(props.theme.deviceMax, props.size, 0)
    : getMediaQuery(props.theme.deviceMax, props.size, 2))}
`;

const Span: any = styled.span`
  color: ${(props) => props.theme.body};
  z-index: 1;
  position: relative;
`;

export default ({
  heading, size, bold, underline,
}: ResumeHeadingProps) => (
  <ResumeHeadingWrapper>
    <Heading size={size} bold={bold} underline={underline}>
      <Span>{heading}</Span>
    </Heading>
  </ResumeHeadingWrapper>
);

type ResumeHeadingProps = {
  heading: string;
  size: number;
  bold: boolean;
  underline: boolean;
};
