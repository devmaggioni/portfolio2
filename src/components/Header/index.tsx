import { useTheme } from "styled-components";
import {
  Container,
  Logo,
  NavLeft,
  NavRight,
  ListaLeft,
  ListaRight,
  HamburguerWrapper,
} from "./styles";
import Hamburguer from "./Hamburguer";
import { useAppContext } from "../../contexts/AppContext";
import type { ThemeColors } from "../../types/ThemeColors";

import LogoLight from "../../assets/logo-light.svg";
import LogoDark from "../../assets/logo-dark.svg";
import Sticky from "../Sticky";

export default function Header() {
  const theme: ThemeColors = useTheme();
  const { mobileBreakPoint } = useAppContext();
  const $mobileBreakPoint = mobileBreakPoint;

  const selfProps = {
    $mobileBreakPoint,
  };

  return (
    <>
      <Container>
        <Sticky>
          <Logo>
            <img
              className="effect-big"
              src={(theme.type === "light" && LogoLight) || LogoDark}
            />
          </Logo>
        </Sticky>
        <NavLeft {...selfProps}>
          <ListaLeft>
            <li className="effect-small">Hi</li>
            <li className="effect-small">Hi</li>
            <li className="effect-small">Hi</li>
            <li className="effect-small">Hi</li>
          </ListaLeft>
        </NavLeft>
        <NavRight {...selfProps}>
          <ListaRight>
            <li>EMAIL</li>
            <li className="effect-big">
              {" "}
              <Sticky className="effect-big">CONTACT </Sticky>
            </li>
          </ListaRight>
        </NavRight>
        <HamburguerWrapper className="effect-big" {...selfProps}>
          <Hamburguer />
        </HamburguerWrapper>
      </Container>
    </>
  );
}
