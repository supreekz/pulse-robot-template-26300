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
    <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-pulse-50 via-white to-pulse-100 relative overflow-hidden" id="showcase">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pulse-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pulse-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-block px-6 py-2 bg-pulse-100 text-pulse-700 rounded-full text-sm font-semibold mb-6">
            Conheça Nossa História
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight bg-gradient-to-r from-pulse-600 to-pulse-800 bg-clip-text text-transparent mb-6">
            Sobre a Horn e Bigarella
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Desde 2021, transformando espaços com expertise em <span className="text-pulse-600 font-semibold">arquitetura</span>, <span className="text-pulse-600 font-semibold">urbanismo</span> e <span className="text-pulse-600 font-semibold">segurança</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white to-pulse-50 rounded-3xl p-8 shadow-2xl text-center animate-on-scroll hover:shadow-3xl transition-all hover:-translate-y-2 border border-pulse-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pulse-500 to-pulse-700 text-white mb-6 shadow-lg">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-pulse-600 to-pulse-800 bg-clip-text text-transparent mb-3">
              <CountUp end={2021} duration={1500} />
            </div>
            <p className="text-gray-700 font-semibold text-lg">Ano de Fundação</p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-pulse-500 to-pulse-700 rounded-full mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-pulse-50 rounded-3xl p-8 shadow-2xl text-center animate-on-scroll hover:shadow-3xl transition-all hover:-translate-y-2 border border-pulse-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pulse-500 to-pulse-700 text-white mb-6 shadow-lg">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-pulse-600 to-pulse-800 bg-clip-text text-transparent mb-3">
              <CountUp end={150} duration={2000} />
            </div>
            <p className="text-gray-700 font-semibold text-lg">Clientes Atendidos</p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-pulse-500 to-pulse-700 rounded-full mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-pulse-50 rounded-3xl p-8 shadow-2xl text-center animate-on-scroll hover:shadow-3xl transition-all hover:-translate-y-2 border border-pulse-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pulse-500 to-pulse-700 text-white mb-6 shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-pulse-600 to-pulse-800 bg-clip-text text-transparent mb-3">
              <CountUp end={200} duration={2000} />
            </div>
            <p className="text-gray-700 font-semibold text-lg">Projetos Realizados</p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-pulse-500 to-pulse-700 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Partners */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-pulse-600 to-pulse-800 bg-clip-text text-transparent mb-4">
              Nossos Sócios
            </h3>
            <p className="text-lg text-gray-600">
              A expertise que faz a diferença em cada projeto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white via-white to-pulse-50 rounded-3xl p-8 sm:p-10 shadow-2xl animate-on-scroll hover:shadow-3xl transition-all hover:-translate-y-2 border border-pulse-100 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pulse-200 to-pulse-300 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pulse-500 via-pulse-600 to-pulse-700 mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-gray-900 mb-3 text-center">
                    {partner.name}
                  </h4>
                  <div className="inline-block w-full mb-4">
                    <p className="text-pulse-600 font-bold text-center bg-pulse-50 px-4 py-2 rounded-full inline-block mx-auto">
                      {partner.role}
                    </p>
                  </div>
                  <p className="text-gray-600 text-base text-center leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="mt-6 h-1 w-20 bg-gradient-to-r from-pulse-500 to-pulse-700 rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
