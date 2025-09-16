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

  .anime-wrapper {
    position: relative;
    width: 100%;
    height: 100vh; /* força ocupar a tela toda */
    overflow: hidden;
  }

  canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover; /* garante que não estique */
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
  position: absolute;
  top: 15%;
  left: 20px;

  h1 {
    @media screen and (max-width: 850px) {
      max-width: 90vw;
      white-space: pre-wrap;
      left: 0px;
    }
    position: absolute;
    max-width: 1500px;
    white-space: nowrap;
    text-transform: uppercase;
    line-height: clamp(50px, 6vw, 100px);
    gap: 8px;
    font-family: "Mona Sans", serif;
    font-size: clamp(60px, 6vw, 150px);
    top: 100px;
    left: 100px;
    font-weight: 900;
    color: white;
    .animated-text {
      @media screen and (max-width: 850px) {
        font-size: clamp(40px, 6vw, 150px);
      }
      white-space: pre-wrap;
      color: #6573fe;
    }
  }
`;
