/* eslint-disable no-param-reassign */
import create from 'zustand';
// import produce from 'immer';
import { nanoid } from 'nanoid';
import {
  FSState, FileState, PERMISSION, FSStore,
} from '../types';

const initialFSState: FSState = {
  fs: {
    root: {
      name: '/',
      children: [],
      id: '/',
    },
  },
  currentDir: '/',
  permission: PERMISSION.ROOT,
};

// export const immer = (config) => (set, get) => config((fn) => set(produce(fn)), get);

// eslint-disable-next-line no-unused-vars
const store:(set:any)=>FSStore = (set) => ({
  ...initialFSState,
  mkdir: (pathToDir) => set((state: FSState) => {
    if (pathToDir.length === 0) return false;
    const { fs: { root }, currentDir } = state;
    const pathArr = (currentDir === '/' ? pathToDir : `${currentDir}/${pathToDir}`).split('/').reverse();

    let tempDir = root;
    let popedDir;
    const popedDirFind = ({ name }: FileState) => name === popedDir;
    while (pathArr.length > 0) {
      popedDir = pathArr.pop();
      const matchedDir = tempDir.children.find(popedDirFind);
      // match not found and the path is still left failure
      if (!matchedDir && pathArr.length !== 0) return false;
      // match found update the temp root dir
      if (matchedDir) tempDir = matchedDir;
    }
    tempDir.children.push({ name: popedDir, children: [], id: nanoid() });
    return true;
  }),
  cd: (pathToDir :string) => set((state: FSState) => {
    const { fs: { root }, currentDir } = state;
    if (pathToDir === '..') {
      const pathArr = state.currentDir.split('/');
      const currDir = pathArr.slice(0, pathArr.length - 1).join('/');
      state.currentDir = currDir || '/';
      return true;
    }
    const pathArr = (currentDir === '/' ? pathToDir : `${currentDir}/${pathToDir}`).split('/').reverse();
    let tempDir = root;

    while (pathArr.length > 0) {
      const popedDir = pathArr.pop();
      const matchedDir = tempDir.children.find(({ name }: FileState) => name === popedDir);
      if (!matchedDir) return false;
      if (matchedDir) tempDir = matchedDir;
    }
    if (currentDir === '/') state.currentDir = `${pathToDir}`;
    else state.currentDir += `/${pathToDir}`;
    return true;
  }),
});

export const getCurrDir = (state): FileState => {
  const { fs: { root = {} } = {}, currentDir } = state;
  if (currentDir === '/') return root;
  const pathArr = currentDir.split('/').reverse();
  let tempDir = root;

  while (pathArr.length > 0) {
    const popedDir = pathArr.pop();
    const matchedDir = tempDir.children.find(({ name }: FileState) => name === popedDir);
    if (!matchedDir) return { name: '', children: [], id: '' };
    if (matchedDir) tempDir = matchedDir;
  }

  return tempDir;
};
export default create(store);
