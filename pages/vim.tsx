import { useEffect, useLayoutEffect, useRef } from "react";
import { useCallback } from "react";

import BackButton from "../components/shared/BackButton";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/Vim"));
const Vim = () => {
  return (
    <>
      <BackButton prevLink="tutorial" />
      <DynamicComponent />
    </>
  );
};
export default Vim;
