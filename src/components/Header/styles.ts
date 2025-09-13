import styled, { css } from "styled-components";
import type { ThemeColors } from "../../types/ThemeColors";

export const Container = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 40px 20px 0 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  position: relative;
  width: 80px;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;

  img {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
  }
`;

export const NavLeft = styled.nav<{
  $mobileBreakPoint: number;
  theme: ThemeColors;
}>`
  @media screen and (max-width: ${(props) => props.$mobileBreakPoint}px) {
    display: none;
  }
  position: relative;
  min-width: 200px;
  height: 45px;
  padding: 0 30px;
  margin-left: 40px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.header?.bg};
  box-shadow: 1px 1px 10px ${({ theme }) => theme.header?.shadow};
  display: flex;
  align-items: center;
`;

export const NavRight = styled.nav<{
  theme: ThemeColors;
  $mobileBreakPoint: number;
}>`
  @media screen and (max-width: ${(props) => props.$mobileBreakPoint}px) {
    margin-right: -15px;
    scale: 0.8;
  }
  margin-left: auto;
  margin-right: 40px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.header?.bg};
  box-shadow: 1px 1px 5px ${({ theme }) => theme.header?.shadow};
  display: flex;
  align-items: center;
`;

export const ListaLeft = styled.ul<{ theme: ThemeColors }>`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0 20px;
  li {
    font-family: "Mona Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    color: ${({ theme }) => theme.header?.text};
    cursor: pointer;
  }
`;

export const ListaRight = styled.ul<{ theme: ThemeColors }>`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  li {
    font-family: "Mona Sans", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    padding: 12px 20px;
    color: ${(props) => props.theme.header?.text};
    &:last-child {
      ${({ theme }) =>
        (theme.type === "light" &&
          css`
            border: 1px solid white;
          `) ||
        css`
          border: 1px solid black;
        `};
      padding: 12px 25px;
      border-radius: 14px;
      background-color: ${({ theme }) => theme.onHover?.header?.bg};
      color: ${({ theme }) => theme.onHover?.header?.text};
    }
  }
`;

export const HamburguerWrapper = styled.div<{ $mobileBreakPoint: number }>`
  @media screen and (min-width: ${(props) => props.$mobileBreakPoint}px) {
    display: none;
  }
  width: 40px;
  height: 40px;
  margin-right: 24px;
`;
