import React, { Fragment } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { WELCOME_TEXT } from "../constants";
import AnimatedMessage from "../components/Tutorial/_AnimatedMessage";
import CommandList from "../components/Tutorial/CommandList";
import BackButton from "../components/shared/BackButton";

const StyledWelcome = styled(animated.pre)`
  font-size: 7pt;
  font-family: Monospace;
  white-space: pre;
  text-align: center;
  margin: 10vh 2em 0 2em;
`;

const Tutorial = () => {
  return (
    <>
      <BackButton prevLink="" />
      <StyledWelcome>{WELCOME_TEXT[0]}</StyledWelcome>

      <AnimatedMessage />
      <CommandList />
    </>
  );
};
export default Tutorial;
