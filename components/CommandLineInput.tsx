/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import styled from 'styled-components';
import useFS from '../hooks/useFS';
import Plugins from '../plugins';

const CommandLineStyles = styled.span`
  display: block;
  color: ${(props) => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > input[type="text"] {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.body};
  }
`;

export default (props:any) => {
  const {
    inputRef,
    shiftTerminalInput,
    clearCommandLineHistory,
    setShowHelp,
    setHelpShown,
  } = props;
  const fsStore = useFS();
  const { currentDir } = fsStore;
  const prefix = `ishank.web.dev:~$/${currentDir === '/' ? '' : currentDir}`;
  const handleKeyDown = (e) => {
    if (inputRef.current.value === '') return;
    if (e.key === 'Enter') {
      // tmeporary
      let caughtcommand = false;
      shiftTerminalInput({ prefix, command: inputRef.current.value });
      if (inputRef.current.value.toLowerCase() === '\\h') {
        setHelpShown(false);
        setShowHelp(true);
        caughtcommand = true;
      }
      if (inputRef.current.value.toLowerCase() === 'clear') {
        clearCommandLineHistory();
        caughtcommand = true;
      }
      if (inputRef.current.value.toLowerCase().match(/echo */)) {
        shiftTerminalInput({
          prefix: '',
          command: inputRef.current.value.slice(
            5,
            inputRef.current.value.length,
          ),
        });
        caughtcommand = true;
      }
      if (!caughtcommand) {
        const [invokedCommand, ...args] = inputRef.current.value.split(' ');
        if (Plugins[invokedCommand.toUpperCase()]) {
          shiftTerminalInput({
            prefix: '',
            render: Plugins[invokedCommand.toUpperCase()](fsStore, args),
            command: invokedCommand,
          });
        } else {
          shiftTerminalInput({
            prefix: `${invokedCommand}: command not found`,
          });
        }
      }
      inputRef.current.value = '';
    }
  };

  return (
    <CommandLineStyles>
      {prefix}
      <input autoFocus type="text" onKeyDown={handleKeyDown} ref={inputRef} />
    </CommandLineStyles>
  );
};
