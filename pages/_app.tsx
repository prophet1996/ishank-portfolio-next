import "../styles/index.css";
import { ThemeProvider } from "../hooks/useTheme";
import { useRef, useCallback } from "react";
import Head from "next/head";
import styled from "styled-components";

import "../styles/App.css";
import ThemeChangeButton from "../components/ThemeChangeButton";
import Logo from "../logo";

const AppWrapper = styled.div`
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.body};
`;

function MyApp({ Component, pageProps }) {
  const mainRef = useRef(null);
  if (pageProps.html) {
    require("../styles/manpages.css");
  }
  const focusOnInputHandler = useCallback(() => {
    try {
      (mainRef?.current as any).focus();
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppWrapper onClick={focusOnInputHandler} className="App">
        <main>
          <div>
            <ThemeChangeButton />
          </div>
          <div>
            <Logo />
          </div>
          <Component mainRef={mainRef} {...pageProps} />
        </main>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
