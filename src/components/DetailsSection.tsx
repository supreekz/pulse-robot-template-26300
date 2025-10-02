
import React from "react";
import { Instagram, Phone, MessageCircle } from "lucide-react";

const DetailsSection = () => {
  const contacts = [
    {
      icon: Instagram,
      title: "Instagram",
      value: "@hornebigarella",
      link: "https://instagram.com/hornebigarella",
      gradient: "from-emerald-600 to-green-500"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(54) 99999-9999",
      link: "tel:+5554999999999",
      gradient: "from-green-600 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(54) 99999-9999",
      link: "https://wa.me/5554999999999",
      gradient: "from-emerald-700 to-green-600"
    }
  ];

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você e transformar seus projetos em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Header with gradient */}
                <div className={`relative h-40 sm:h-48 p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-br ${contact.gradient}`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display text-white font-bold">
                    {contact.title}
                  </h3>
                </div>
                
                {/* Card Content */}
                <div className="bg-white p-6 sm:p-8" style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #ECECEC"
                }}>
                  <p className="text-center text-lg font-medium text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {contact.value}
                  </p>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Clique para entrar em contato
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
