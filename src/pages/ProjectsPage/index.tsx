import Sticky from "../../components/Sticky";
import { Container, CardsWrapper, Card } from "./styles";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useEffect } from "react";

// Variants para animação de cada card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

// Variants para animação do texto (de cima para baixo)
const textVariants: Variants = {
  hidden: { opacity: 0, y: 300, zIndex: -1 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardsData = [
  { id: 1, title: "Projeto 1" },
  { id: 2, title: "Projeto 2" },
  { id: 3, title: "Projeto 3" },
  { id: 4, title: "Projeto 4" },
];

export default function ProjectsPage() {
  return (
    <Container>
      <CardsWrapper>
        {cardsData.map((card) => (
          <CardScroll key={card.id} card={card} />
        ))}
      </CardsWrapper>
    </Container>
  );
}

// Componente separado para controlar scroll automático
function CardScroll({ card }: { card: { id: number; title: string } }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { amount: 0.5, margin: "0px" }); // 50% do card visível

  useEffect(() => {
    if (isInView && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card>
        <motion.div
          className="text-wrapper"
          variants={textVariants}
          animate={isInView ? "visible" : "hidden"}
        >
          <p className="text solid">{card.title}</p>
          <p className="text outline">{card.title}</p>
        </motion.div>

        <Sticky
          className="ball-wrapper effect-hide"
          strength={0.8}
          radius={350}
        >
          <div className="ball effect-hide">
            <p className="effect-hide">Ver Projeto</p>
          </div>
        </Sticky>
        <div className="number">0{card.id}</div>
      </Card>
    </motion.div>
  );
}
