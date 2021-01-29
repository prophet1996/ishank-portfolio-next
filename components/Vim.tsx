import * as React from "react";
import { useCallback } from "react";
import { Vim } from "react-vim-wasm";
const VimEditor = () => {
  const onVimExit = useCallback(
    (s) => alert(`Vim exited with status ${s}`),
    []
  );
  const onFileExport = useCallback(
    (f, buf) => console.log("file exported:", f, buf),
    []
  );
  const onError = useCallback((e) => alert(`Error! ${e.message}`), []);

  return (
    <Vim
      worker="/static/vim-wasm"
      onVimExit={onVimExit}
      onFileExport={onFileExport}
      readClipboard={navigator.clipboard && navigator.clipboard.readText}
      onWriteClipboard={navigator.clipboard && navigator.clipboard.writeText}
      onError={onError}
    />
  );
};

export default VimEditor;
