/* eslint-disable jsx-a11y/no-autofocus */
import { useRouter } from "next/router";
import styled from "styled-components";
import useFS from "../hooks/useFS";
import Plugins from "../plugins";

const CommandLineStyles = styled.span`
  display: flex;
  align-items: baseline;
  color: ${(props) => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > input[type="text"] {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.body};
    font-size: unset;
  }
`;

export default (props: any) => {
  const {
    inputRef,
    shiftTerminalInput,
    clearCommandLineHistory,
    setShowHelp,
    setHelpShown,
  } = props;
  const fsStore = useFS();
  const router = useRouter();
  const { currentDir } = fsStore;
  const prefix = `ishank.web.dev:~$/${currentDir === "/" ? "" : currentDir}`;
  const handleKeyDown = (e) => {
    if (inputRef.current.value === "") return;
    if (e.key === "Enter") {
      // tmeporary
      let caughtcommand = false;
      const commandString = inputRef.current.value.toLowerCase();
      shiftTerminalInput({ prefix, command: inputRef.current.value });
      if (commandString === "\\h") {
        setHelpShown(false);
        setShowHelp(true);
        caughtcommand = true;
      }
      if (commandString === "clear") {
        clearCommandLineHistory();
        caughtcommand = true;
      }
      if (commandString.match(/echo */)) {
        shiftTerminalInput({
          prefix: "",
          command: inputRef.current.value.slice(
            5,
            inputRef.current.value.length
          ),
        });
        caughtcommand = true;
      }
      if (commandString.match(/man */)) {
        const [invokedCommand, ...args] = inputRef.current.value.split(" ");
        if (args[0] === "help") {
          shiftTerminalInput({
            prefix: "",
            command: "man help",
          });
        }
        router.push(`man/${args[0]}`);
        caughtcommand = true;
      }
      if (!caughtcommand) {
        const [invokedCommand, ...args] = inputRef.current.value.split(" ");
        if (Plugins[invokedCommand.toUpperCase()]) {
          shiftTerminalInput({
            prefix: "",
            render: Plugins[invokedCommand.toUpperCase()](fsStore, args),
            command: invokedCommand,
          });
        } else {
          shiftTerminalInput({
            prefix: `${invokedCommand}: command not found`,
          });
        }
      }
      inputRef.current.value = "";
    }
  };

  return (
    <CommandLineStyles>
      {prefix}
      <input
        autoFocus
        type="text"
        spellCheck="false"
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </CommandLineStyles>
  );
};
