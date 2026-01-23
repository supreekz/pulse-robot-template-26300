import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";

const SpecsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Scroll progress da seção
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  // Mapeia o progresso para revelar o gradiente da esquerda para direita usando clip-path
  // clip-path: inset(0 100% 0 0) = totalmente escondido
  // clip-path: inset(0 0% 0 0) = totalmente visível
  const clipProgress = useTransform(smoothProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <section
      ref={sectionRef}
      className="w-full py-6 sm:py-10 bg-white"
      id="specifications"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">
                3
              </span>
              <span>Resumo</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Main content with scroll-revealed gradient text */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <div className="relative">
            {/* Texto base (cinza escuro) */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12 text-gray-800"
            >
              A Horn e Bigarella atua em todas as áreas da arquitetura e urbanismo.
              Desde projetos residenciais personalizados até complexos comerciais,
              PPCI e planejamento urbano, criamos soluções que transformam espaços
              em ambientes únicos, funcionais e sustentáveis para todos os tipos de
              clientes.
            </h2>

            {/* Overlay com gradiente verde que vai sendo revelado */}
            <motion.h2
              ref={textRef}
              className="absolute top-0 left-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, #022F2E 0%, #415150 50%, #022827 100%)`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                clipPath: clipPath,
              }}
            >
              A Horn e Bigarella atua em todas as áreas da arquitetura e urbanismo.
              Desde projetos residenciais personalizados até complexos comerciais,
              PPCI e planejamento urbano, criamos soluções que transformam espaços
              em ambientes únicos, funcionais e sustentáveis para todos os tipos de
              clientes.
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
