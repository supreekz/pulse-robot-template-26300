import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, FileText, Ruler } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Mato Sartori",
      category: "Residencial",
      description: "Projeto residencial contemporâneo com amplos espaços integrados e foco em sustentabilidade.",
      icon: Home,
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    },
    {
      id: 2,
      title: "Edifício Comercial",
      category: "Comercial",
      description: "Complexo comercial moderno com design inovador e eficiência energética.",
      icon: Building2,
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    },
    {
      id: 3,
      title: "PPCI - Projeto Completo",
      category: "Prevenção e Combate a Incêndio",
      description: "Projeto de Prevenção e Proteção Contra Incêndio para edifício comercial de múltiplos pavimentos.",
      icon: FileText,
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    },
    {
      id: 4,
      title: "Projeto Urbanístico",
      category: "Urbanismo",
      description: "Planejamento urbano integrado com foco em mobilidade e qualidade de vida.",
      icon: Ruler,
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-white to-pulse-50" id="portfolio">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              {/* <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">4</span> */}
              <span>Portfolio</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Title and Description */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-pulse-600 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-lg text-gray-600">
            Conheça alguns dos projetos desenvolvidos pela Horn e Bigarella. 
            Da arquitetura residencial ao urbanismo, criamos soluções que transformam espaços.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id}
                className="group hover:shadow-elegant-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden border-pulse-200"
              >
                {/* Image Preview */}
                <div className="relative h-56 overflow-hidden bg-pulse-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pulse-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-pulse-600 mb-2 group-hover:text-pulse-700 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="inline-flex items-center gap-2 text-sm text-pulse-500 bg-pulse-50 px-3 py-1 rounded-full">
                        <Icon className="w-4 h-4" />
                        <span>{project.category}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;