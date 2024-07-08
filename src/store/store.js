import { THEMES, LANGUAGES } from "./constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const { LIGHT, DARK } = THEMES;
const { EN } = LANGUAGES;

const isPrefersDarkTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const usePortfolioStore = create(
  immer((set) => ({
    activeTheme: isPrefersDarkTheme() ? DARK : LIGHT,
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
