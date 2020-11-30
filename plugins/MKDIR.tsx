import { FSStore } from '../types';

const MKDIR = (fsStore: FSStore, args:string[] = []): string => {
  const { mkdir, currentDir } = fsStore;
  const [pathToDir] = args;

  mkdir(pathToDir);
  return `creating directory ${pathToDir} in ${currentDir}`;
  // debugger;
};

export default MKDIR;
