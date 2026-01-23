import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div
            className="relative bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min_h-[350px] flex flex-col justify-between"
            style={{ backgroundImage: "url('/mesh-gradient.png')" }}
          >
            {/* <div className="flex items-center text-white">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="Pulse Robot Logo"
                className="h-5 sm:h-6 w-auto mr-3 invert"
              />
            </div> */}

            {/* Título em duas linhas no mobile */}
            <div className="relative z-10 mt-10 -top-[12px]">
              <h2 className="font-playfair text-white italic font-thin text-center leading-tight">
                <span className="block text-5xl sm:text-6xl md:text-7xl">HB</span>
                <span className="block text-xl sm:text-2xl md:text-3xl">
                  Arquitetura &amp; Urbanismo
                </span>
              </h2>
            </div>

            {/* White box no rodapé, sem sobrepor o texto */}
            <div className="pointer-events-none absolute left-[-10%] bottom-0 w-[120%] h-10 bg-white rounded-t-lg z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
