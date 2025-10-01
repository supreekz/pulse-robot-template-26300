import React from "react";
import { Phone, Instagram, Mail } from "lucide-react";

const DetailsSection = () => {
  return (
    <section id="contato" className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12">
            Estamos prontos para transformar seus projetos em realidade
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pulse-500 to-pulse-700 text-white mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                WhatsApp
              </h3>
              <p className="text-gray-600 text-lg font-medium">
                (XX) XXXXX-XXXX
              </p>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pulse-500 to-pulse-700 text-white mb-6">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                Instagram
              </h3>
              <p className="text-gray-600 text-lg font-medium">
                @hornebigarella
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pulse-500 to-pulse-700 text-white mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                E-mail
              </h3>
              <p className="text-gray-600 text-lg font-medium">
                contato@hornebigarella.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
