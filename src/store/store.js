import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const usePortfolioStore = create(
  immer((set) => ({
    theme: "corporate", // default light theme

    actions: {
      switchTheme: () =>
        set((state) => {
          state.theme = state.theme === "corporate" ? "dim" : "corporate";
        }),
    },
  }))
);

export const usePortfolioActions = () =>
  usePortfolioStore((state) => state.actions);
