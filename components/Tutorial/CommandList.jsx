import React from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COMMAND_LIST } from '../../constants';

const StyledCommand = styled(animated.div)`
  cursor: pointer;
  border-radius: 3px;
  padding: 1em;
  color: ${(props) => props.theme.body};
  animation: blinker 2s linear infinite;
  text-decoration: none;
  margin: 0.5em;
  &:hover {
    box-shadow: 0px 0px 4px 1.5px ${(props) => props.theme.highLight};
  }
  @keyframes blinker {
    50% {
      box-shadow: 0px 0px 4px 1.5px ${(props) => props.theme.highLight};
    }
  }
`;
const StyledCommandList = styled.div`
  display: flex;
  margin: 0rem 2rem;
  padding: 1rem 3rem;
  justify-content: space-evenly;
  cursor: pointer;
  flex-wrap: wrap;
`;
const CommandList = () => {
  const transitions = useTransition(COMMAND_LIST, (item) => item.name, {
    unique: true,
    trail: 400 / COMMAND_LIST.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  return (
    <StyledCommandList>
      {transitions.map(({ item, key, props }) => (
        <Link to={item.route} style={{ textDecoration: 'none' }}>
          <StyledCommand key={key} style={props} title={item.description}>
            {item.name}
          </StyledCommand>
        </Link>
      ))}
    </StyledCommandList>
  );
};
export default CommandList;
