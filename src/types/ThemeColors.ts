// types/ThemeColors.ts
export interface ThemeColors {
  type: "light" | "dark";
  cursor: string;
  header: {
    bg: string;
    text: string;
    shadow: string;
  };
  body: {
    bg: string;
    text: string;
  };
  hamburguer: {
    color: string;
    active: string;
  };
  onHover: {
    header: {
      text: string;
      bg: string;
    };
  };
}
