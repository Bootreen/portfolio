import { THEMES, LANGUAGES } from "./constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const { LIGHT, DARK } = THEMES;
const { EN } = LANGUAGES;

const isPrefersDarkTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const { innerWidth: initialWindowWidth, innerHeight: initialWindowHeight } =
  window;

export const usePortfolioStore = create(
  immer((set) => ({
    userPreferredTheme: isPrefersDarkTheme() ? DARK : LIGHT,
    activeTheme: isPrefersDarkTheme() ? DARK : LIGHT,
    activeLanguage: EN,
    windowDimentions: {
      width: initialWindowWidth,
      height: initialWindowHeight,
    },

    actions: {
      switchTheme: () =>
        set((state) => {
          state.activeTheme = state.activeTheme === LIGHT ? DARK : LIGHT;
        }),
      switchLanguage: (language) =>
        set((state) => {
          state.activeLanguage = language;
        }),
      updateWindowDimentions: () => {
        const { innerWidth: width, innerHeight: height } = window;
        set((state) => {
          state.windowDimentions = { width, height };
        });
      },
    },
  }))
);

export const usePortfolioActions = () =>
  usePortfolioStore((state) => state.actions);
