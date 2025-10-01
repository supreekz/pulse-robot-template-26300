import React, { useEffect, useState, useRef } from "react";
import { Users, Building2, TrendingUp } from "lucide-react";

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}+</div>;
};

const ImageShowcaseSection = () => {
  const partners = [
    {
      name: "Sócio 1",
      role: "Arquiteto e Urbanista",
      description: "Especialista em projetos residenciais e comerciais"
    },
    {
      name: "Sócio 2",
      role: "Arquiteto e Urbanista",
      description: "Focado em urbanismo e planejamento urbano"
    },
    {
      name: "Sócio 3",
      role: "Engenheiro Civil",
      description: "Especialista em segurança e PPCI"
    }
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Sobre a Horn e Bigarella
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Desde 2021, transformando espaços com expertise em arquitetura, urbanismo e segurança
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center animate-on-scroll hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pulse-100 text-pulse-600 mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-2">
              <CountUp end={2021} duration={1500} />
            </div>
            <p className="text-gray-600">Ano de Fundação</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center animate-on-scroll hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pulse-100 text-pulse-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-2">
              <CountUp end={150} duration={2000} />
            </div>
            <p className="text-gray-600">Clientes Atendidos</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center animate-on-scroll hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pulse-100 text-pulse-600 mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-2">
              <CountUp end={200} duration={2000} />
            </div>
            <p className="text-gray-600">Projetos Realizados</p>
          </div>
        </div>

        {/* Partners */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Nossos Sócios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg animate-on-scroll hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pulse-500 to-pulse-700 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-display font-semibold text-gray-900 mb-2 text-center">
                  {partner.name}
                </h4>
                <p className="text-pulse-600 font-medium mb-3 text-center">
                  {partner.role}
                </p>
                <p className="text-gray-600 text-sm text-center">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
