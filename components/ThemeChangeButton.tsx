import { useTransition, animated } from 'react-spring';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

const ButtonIconWrapper:any = styled(animated.button)`
  border: none;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.background};
  font-size: large;
  float: right;
  border-radius: 4px;
  margin: 1.2rem;
  font-size: 1.2rem;
  font-weight: 700;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 99999;
  border: 2px solid ${(props) => props.theme.highLight};
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export default ({ className } :any) => {
  const themeState = useTheme();
  const transitions = useTransition(themeState.dark, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transitions.map(({ item, key, props }:any) => (
        <ButtonIconWrapper
          className={className}
          themestate={themeState}
          onClick={themeState.toggle}
          style={props}
          key={key}
        >
          {!item ? '🔅' : '☾'}
        </ButtonIconWrapper>
      ))}
    </>
  );
};
