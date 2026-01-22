import React, { useEffect, useState, useRef } from "react";
import { Users, Building2, TrendingUp, Award, Briefcase, Shield } from "lucide-react";

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
  const founder = {
    name: "Fernanda Frigeri Horn Bigarella",
    role: "Arquiteta e Urbanista - CAU A204732-2",
    description: "Arquiteta e urbanista com mais de 40 anos de atuação, desenvolve projetos residenciais, comerciais, corporativos e espaços urbanos e paisagísticos, unindo experiência, sensibilidade e visão ampla para criar ambientes que acolhem, inspiram e funcionam com equilíbrio.",
    credentials: [
      {
        icon: Building2,
        title: "Ex-Arquiteta Geral",
        subtitle: "Universidade de Caxias do Sul (UCS)",
        description: "Maior universidade da Serra Gaúcha"
      },
      {
        icon: Briefcase,
        title: "Ex-Diretora",
        subtitle: "Secretaria do Meio Ambiente e Sustentabilidade (SEMMA)",
        description: "Caxias do Sul"
      },
      {
        icon: Briefcase,
        title: "Ex-Arquiteta Geral",
        subtitle: "Secretaria do Município da Educação (SMED)",
        description: "Caxias do Sul"
      }
    ]
  };

  const partners = [
    {
      name: "Arq. Maria Eugênia Horn Bigarella",
      role: "Arquiteta, Urbanista e Engenheira de Seg. do Trabalho - CAU 00A2913070",
      icon: "/maria1.jpg",
      description: "Une a visão da arquitetura à precisão da engenharia de segurança, criando projetos que traduzem cuidado, proteção e harmonia. Seu trabalho busca equilibrar beleza e responsabilidade, transformando necessidades em espaços seguros, humanos e autênticos."
    },
    {
      name: "Eng. Catharina Horn Bigarella",
      role: "Engenheira Civil - CREA-RS269098",
      icon: "/catha2.jpg",
      description: "Engenheira civil com atuação focada em PPCI e projetos complementares, trabalha com precisão técnica e olhar analítico para garantir sistemas de segurança completos, eficientes e integrados à arquitetura de cada edificação."
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

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-center text-gray-900 mb-3">
            Nossa Equipe
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Uma família de profissionais dedicadas à excelência em arquitetura, urbanismo e engenharia
          </p>

          {/* Founder Card - Featured */}
          <div className="mb-8 sm:mb-12 animate-on-scroll">
            <div className="bg-gradient-to-br from-pulse-50 via-white to-pulse-50 rounded-3xl p-8 sm:p-10 shadow-2xl border border-pulse-100 hover:shadow-3xl transition-all hover:-translate-y-1">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pulse-500 to-pulse-700 mb-5 flex items-center justify-center shadow-lg">
                    {/* <img 
                    src="/fernanda.jpg"
                    alt="Maria"
                    className="rounded-full"
                  /> */}
                  {/* <Award className="w-12 h-12 text-white" /> */}
                </div>
                <div className="inline-flex items-center gap-2 mb-3">
                  {/* <span className="px-3 py-1 bg-pulse-600 text-white text-xs font-semibold rounded-full">
                    Fundadora
                  </span> */}
                </div>
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                  {founder.name}
                </h4>
                <p className="text-pulse-600 font-semibold text-lg mb-3">
                  {founder.role}
                </p>
                <p className="text-gray-700 max-w-2xl mb-6">
                  {founder.description}
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {founder.credentials.map((credential, index) => {
                  const Icon = credential.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 border border-pulse-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-pulse-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-pulse-600" />
                        </div>
                        <div className="flex-1 text-left">
                          <h5 className="font-semibold text-gray-900 mb-1">
                            {credential.title}
                          </h5>
                          <p className="text-pulse-600 text-sm font-medium mb-1">
                            {credential.subtitle}
                          </p>
                          <p className="text-gray-600 text-xs">
                            {credential.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Daughters/Partners - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg animate-on-scroll hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pulse-400 to-pulse-600 mx-auto mb-4 flex items-center justify-center shadow-md">
                    <img
                      src={partner.icon}
                      alt={partner.name}
                      className="rounded-full"
                    />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-gray-900 mb-2 text-center">
                    {partner.name}
                  </h4>
                  <p className="text-pulse-600 font-semibold mb-3 text-center">
                    {partner.role}
                  </p>
                  <p className="text-gray-600 text-sm text-center">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
