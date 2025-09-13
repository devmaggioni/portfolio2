import type { ThemeColors } from "../types/ThemeColors";

export const lightTheme: ThemeColors = {
  type: "light",
  cursor: "white",
  header: {
    bg: "#f5f5f5",
    text: "#333",
    shadow: "rgba(255,255,255,.2)",
  },
  body: {
    bg: "#333",
    text: "#f5f5f5",
  },
  hamburguer: {
    color: "#f5f5f5",
    active: "rgba(255, 0, 76, 1)",
  },
  onHover: {
    header: {
      text: "#f5f5f5",
      bg: "#333",
    },
  },
};

export const darkTheme: ThemeColors = {
  type: "dark",
  cursor: "black",
  header: {
    bg: "#333",
    text: "#f5f5f5",
    shadow: "rgba(0,0,0,.3)",
  },
  body: {
    bg: "#f5f5f5",
    text: "#333",
  },
  hamburguer: {
    color: "#333",
    active: "rgba(255, 0, 76, 1)",
  },
  onHover: {
    header: {
      text: "#333",
      bg: "#f5f5f5",
    },
  },
};
