import DotGrid from "../../components/ReactBits/Backgrounds/DotGrid/DotGrid";
import SplashCursor from "../../components/ReactBits/Animations/SplashCursor";
// import TextType from "../components/ReactBits/Texts/TextType";
import RotatingText from "../../components/ReactBits/Texts/RotatingText";
import { Container, TextWrapper } from "./styles";
import { useAppContext } from "../../contexts/AppContext";

export default function HomePage() {
  const { currentWidth } = useAppContext();
  return (
    <Container>
      {currentWidth >= 750 && (
        <>
          <SplashCursor />
          <DotGrid
            className="hide-in-mobile background"
            dotSize={5}
            gap={15}
            baseColor="#fd18ea"
            activeColor="#aa0ef3"
            proximity={50}
            shockRadius={250}
            shockStrength={3}
            resistance={45}
            returnDuration={0.3}
          />
        </>
      )}
      {/*    <TextType
        className="text"
        text={[
          "Eu ajudo empresas a criarem sites",
          "Eu ajudo empresas a criarem experiências",
          "Como posso te ajudar hoje?",
        ]}
        typingSpeed={65}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="_"
      /> */}
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
