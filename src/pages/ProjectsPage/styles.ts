import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;

  .number {
    @media screen and (max-width: 750px) {
      font-size: 150px;
      right: -160px;
    }
    @media screen and (max-width: 420px) {
      font-size: 100px;
      right: -110px;
    }
    position: absolute;
    z-index: -1;
    right: -250px;
    font-family: "Mona Sans", sans-serif;
    color: transparent;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
    font-size: 250px;
    font-weight: 900;
  }
  .ball-wrapper {
    position: absolute;
    bottom: 0px;
    bottom: -45px;
    right: -75px;
  }
  .ball {
    @media screen and (max-width: 750px) {
      width: 150px;
      height: 150px;
    }
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid #3498db;
    overflow: hidden; /* necessário para o pseudo-elemento */
    p {
      @media screen and (max-width: 750px) {
        font-size: 10px;
      }
      position: absolute;
      top: 50%;
      left: 50%;
      font-family: "Mona Sans", sans-serif;
      font-weight: 600;
      font-size: 18px;
      transform: translate(-50%, -50%);
      color: white;
      white-space: nowrap;
      letter-spacing: 8px;
      transition: all 0.3s ease;
    }

    &:hover {
      cursor: none;
      p {
        letter-spacing: 1px;
      }
    }
  }

  /* pseudo-elemento que será o preenchimento */
  .ball::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #3498db; /* cor do preenchimento */
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease-in;
    z-index: -1; /* atrás da borda */
  }

  .ball:hover::before {
    width: 200%;
    height: 200%;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  padding: 100px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px 0;
  justify-content: center;
`;

export const Card = styled.div`
  @media screen and (max-width: 750px) {
    height: 60dvh;
  }
  position: relative;
  background-image: url(https://picsum.photos/500/300);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
  max-width: 1100px;
  height: clamp(100px, 85dvh, 750px);

  .text-wrapper {
    @media screen and (max-width: 750px) {
      right: 220px;
      top: -40px;
    }
    position: absolute;
    top: -80px;
    right: 450px;
    display: flex;
  }
  .text {
    @media screen and (max-width: 750px) {
      font-size: 60px;
    }
    all: unset;
    position: absolute;
    color: white;
    white-space: nowrap;
    font-weight: 900;
    font-size: 100px;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-family: "Roboto Flex", sans-serif;
    z-index: -1;
    &.outline {
      position: absolute;
      z-index: 1;
      color: transparent;
      -webkit-text-stroke: 2px white;
    }
  }
`;
