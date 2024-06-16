import { create, StoreApi } from "zustand";

interface darkmodeState {
  darkmode: boolean;
}

interface darkmodeActions {
  setDarkmode: (darkmode: boolean) => void;
}

type darkmodeStore = darkmodeState & darkmodeActions;

export const useDarkmoreStore = create<darkmodeStore>(
  (set: StoreApi<darkmodeStore>["setState"]) => ({
    darkmode: false,

    setDarkmode: (darkmode: boolean) =>
      set((state) => ({ ...state, darkmode })),
  })
);
