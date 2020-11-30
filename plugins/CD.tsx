const CD = (fsStore, args) => {
  const { cd } = fsStore;
  const [pathToDir] = args;

  cd(pathToDir);
  return `cd ${pathToDir}`;
};

export default CD;
