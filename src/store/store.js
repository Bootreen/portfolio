import { THEMES, LANGUAGES } from "./constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const { LIGHT, DARK } = THEMES;
const { EN } = LANGUAGES;

export const usePortfolioStore = create(
  immer((set) => ({
    activeTheme: LIGHT,
    activeLanguage: EN,

    actions: {
      switchTheme: () =>
        set((state) => {
          state.activeTheme = state.activeTheme === LIGHT ? DARK : LIGHT;
        }),
      switchLanguage: (language) =>
        set((state) => {
          state.activeLanguage = language;
        }),
    },
  }))
);

export const usePortfolioActions = () =>
  usePortfolioStore((state) => state.actions);
