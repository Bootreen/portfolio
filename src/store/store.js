import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const usePortfolioStore = create(
  immer((set) => ({
    theme: "fantasy", // default light theme

    actions: {
      switchTheme: () =>
        set((state) => {
          state.theme = state.theme === "fantasy" ? "dim" : "fantasy";
        }),
    },
  }))
);

export const usePortfolioActions = () =>
  usePortfolioStore((state) => state.actions);
