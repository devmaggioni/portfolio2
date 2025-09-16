//import DotGrid from "../../components/ReactBits/Backgrounds/DotGrid/DotGrid";
import SplashCursor from "../../components/ReactBits/Animations/SplashCursor";
// import TextType from "../components/ReactBits/Texts/TextType";
import RotatingText from "../../components/ReactBits/Texts/RotatingText";
import { Container, TextWrapper } from "./styles";
import { useAppContext } from "../../contexts/AppContext";
//import PixelBlast from "../../components/ReactBits/Backgrounds/PixelBlast";
//import LiquidEther from "../../components/ReactBits/Backgrounds/LiquidEither";
import Hyperspeed from "../../components/ReactBits/Backgrounds/HyperSpeed";

export default function HomePage() {
  const { currentWidth } = useAppContext();
  return (
    <Container>
      {currentWidth >= 650 && <SplashCursor />}
      <div className="anime-wrapper">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "mountainDistortion",
            length: 400,
            roadWidth: 9,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 50,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],

            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.05, 400 * 0.15],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.2, 0.2],
            carFloorSeparation: [0.05, 1],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xff102a, 0xeb383e, 0xff102a],
              rightCars: [0xdadafa, 0xbebae3, 0x8f97e4],
              sticks: 0xdadafa,
            },
          }}
        />
      </div>

      <TextWrapper className="mouse-effect">
        <h1>
          Eu ajudo empresas
          <span>
            {" "}
            <RotatingText
              texts={[
                "criarem sites",
                "criarem experiências",
                "serem reconhecidas",
                "alcançar novos públicos",
              ]}
              mainClassName="animated-text"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-140%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 40, stiffness: 600 }}
              rotationInterval={2100}
            />
          </span>{" "}
        </h1>
      </TextWrapper>
    </Container>
  );
}
