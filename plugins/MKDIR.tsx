import { FSStore } from "../types";

const MKDIR = (fsStore: FSStore, args: string[] = []): string => {
  const { mkdir, currentDir } = fsStore;
  const [pathToDir] = args;

  mkdir(pathToDir);
  if (!("indexedDB" in window)) {
    console.log(
      "This browser doesn't support IndexedDB storage will fail save your file instead"
    );
    return;
  }
  return `creating directory ${pathToDir} in ${currentDir}`;
  // debugger;
};

export default MKDIR;
