import * as React from "react";
import { useCallback } from "react";
import { Vim } from "react-vim-wasm";

const VimEditor = () => {
  const onVimExit = () => {};
  const onFileExport = useCallback(
    (f, buf) => console.log("file exported:", f, buf),
    []
  );
  const onError = useCallback((e) => alert(`Error! ${e.message}`), []);

  return (
    <Vim
      worker="static/vim.js"
      onVimExit={onVimExit}
      style={{ height: "100vh", width: "100vw" }}
      onFileExport={onFileExport}
      onWriteClipboard={navigator.clipboard && navigator.clipboard.writeText}
      onError={onError}
    />
  );
};

export default VimEditor;
