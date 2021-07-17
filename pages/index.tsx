import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Typist from "react-typist";
import Suggestions from "../components/Suggestions/Suggestions";
import CommandLineInput from "../components/CommandLineInput";

const CommandLineHistoryStyles = styled.span`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.body};
  font-weight: 700;
  margin: 1.2em;
  & > span {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.body};
    font-size: smaller;
    padding: 0 0.5em;
    font-weight: 400;
  }
`;

const StyledTypist = styled(Typist)`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.body};
  font-weight: 700;
  margin: 1.2em 1.2em;
  & > p {
    margin: 0px;
    font-weight: normal;
  }
  & > span {
    display: none;
  }
`;

const Home = ({ mainRef }: any) => {
  const router = useRouter();
  const [commandLineHistory, setcommandLineHistory] = useState<any>([]);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [helpShown, setHelpShown] = useState(false);
  const shiftTerminalInput = (newInput) =>
    setcommandLineHistory([...commandLineHistory, newInput]);
  const clearCommandLineHistory = () => setcommandLineHistory([]);
  const handleShowTutorial = useCallback(() => {
    setShowTutorial(!showTutorial);
  }, []);
  useEffect(() => {
    if (!showTutorial) {
      (mainRef?.current as any).focus();
    }
  }, [mainRef, showTutorial]);

  const handleTypingDone = useCallback(() => setHelpShown(true), []);
  const commandLineHistoryElements = commandLineHistory.map(
    ({
      // eslint-disable-next-line no-unused-vars
      prefix,
      command,
      render,
    }) => (
      <CommandLineHistoryStyles key={prefix + command}>
        {prefix}
        <span>{command}</span>
        {render}
      </CommandLineHistoryStyles>
    )
  );

  if (showTutorial) router.push("tutorial");

  return (
    <>
      <Suggestions handleShowTutorial={handleShowTutorial} />
      {commandLineHistoryElements}
      {showHelp && (
        <StyledTypist hideWhenDone onTypingDone={handleTypingDone}>
          Hi, I&apos;m IshankS.
          <p> I like to design and build software</p>
        </StyledTypist>
      )}
      {(helpShown || !showHelp) && (
        <CommandLineInput
          inputRef={mainRef}
          setShowHelp={setShowHelp}
          setHelpShown={setHelpShown}
          shiftTerminalInput={shiftTerminalInput}
          clearCommandLineHistory={clearCommandLineHistory}
        />
      )}
    </>
  );
};

export default Home;
