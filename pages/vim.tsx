import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCallback } from "react";

import BackButton from "../components/shared/BackButton";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { debounce } from "../utils";

const DynamicComponent = dynamic(() => import("../components/Vim"));

const StyledDiv = styled.div`
  background: #282c34;
`;
const Vim = () => {
  const [showControls, setShowControls] = useState(false);
  const handleMouseMove = useCallback(
    debounce(
      () => {
        setShowControls(true);
        setTimeout(() => setShowControls(false), 3000);
      },
      1000,
      { leading: true }
    ),

    [showControls]
  );
  return (
    <StyledDiv>
      {showControls && (
        <>
          <BackButton prevLink="tutorial" />
        </>
      )}
      <DynamicComponent onMouseMove={handleMouseMove} />
    </StyledDiv>
  );
};
export default Vim;
