import React, { Fragment } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { WELCOME_TEXT } from "../../constants";
import AnimatedMessage from "./_AnimatedMessage";
import CommandList from "./CommandList";
import BackButton from "../shared/BackButton";

const StyledWelcome = styled(animated.pre)`
  font-size: 7pt;
  font-family: Monospace;
  white-space: pre;
  text-align: center;
  margin: 10vh 2em 0 2em;
`;

const Tutorial = () => {
  const transitions = useTransition([WELCOME_TEXT], (item: any) => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" },
  });

  return (
    <>
      <BackButton prevLink="" />
      {transitions.map(({ item, props, key }) => (
        <StyledWelcome style={props} key={key}>
          {item}
        </StyledWelcome>
      ))}
      <AnimatedMessage />
      <CommandList />
    </>
  );
};
export default Tutorial;
