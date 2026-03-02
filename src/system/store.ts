import { create } from 'zustand';

interface SystemState {
    consoleOpen: boolean;
    tacticalMode: boolean;
    toggleConsole: () => void;
    setConsoleOpen: (state: boolean) => void;
    toggleTacticalMode: () => void;
}

export const useSystemStore = create<SystemState>((set) => ({
    consoleOpen: false,
    tacticalMode: false,
    toggleConsole: () => set((state) => ({ consoleOpen: !state.consoleOpen })),
    setConsoleOpen: (state) => set({ consoleOpen: state }),
    toggleTacticalMode: () => set((state) => ({ tacticalMode: !state.tacticalMode })),
}));
