// types/styled.d.ts
import "styled-components";
import { ThemeColors } from "./ThemeColors";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeColors {}
}
