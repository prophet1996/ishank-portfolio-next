import create from 'zustand';

type TermialState = {
    terminal: string[],
    // eslint-disable-next-line no-unused-vars
    addToTerminalOutput: (htmlOutput:string) => void,
    clearTerminal: () => void,
}

const useTerminal = create<TermialState>((set) => ({
  terminal: [],
  addToTerminalOutput: (htmlOutput: string) => set((state) => ({
    terminal: [...state.terminal, htmlOutput],
  })),
  clearTerminal: () => set(() => ({ terminal: [] })),
}));

export default useTerminal;
