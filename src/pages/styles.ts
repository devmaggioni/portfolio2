import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100dvh;
  &::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: -1;
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0) 35%,
      rgba(0, 0, 0, 0.6) 90%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  .background {
    position: absolute;
    width: 100dvw;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.2;
    z-index: -1;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (max-width: 650px) {
    left: -70px;
  }
  position: absolute;
  top: 25%;
  left: 100px;

  h1 {
    @media screen and (max-width: 650px) {
      top: 15%;
      font-size: 40px;
      line-height: 40px;
    }
    max-width: 700px;
    text-transform: uppercase;
    line-height: 70px;
    gap: 8px;
    font-family: "Mona Sans", serif;
    font-size: 80px;
    position: absolute;
    top: 100px;
    left: 100px;
    font-weight: 900;
    color: white;
    .animated-text {
      all: inherit;
      min-width: 100px;
      min-height: 100px;
      color: #6573fe;
    }
  }
`;
