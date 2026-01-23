
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}
const testimonials: TestimonialProps[] = [{
  content: "A Horn Bigarella conduziu a regularização do nosso imóvel sem complicações. Foi tudo muito transparente e ágil.",
  author: "Carolina Mendes",
  role: "Empresária, Caxias do Sul",
  gradient: "from-pulse-900 via-pulse-800 to-pulse-700",
  backgroundImage: "/background-section1.png"
}, {
  content: "O projeto de reforma residencial superou nossas expectativas. O resultado ficou moderno, aconchegante e dentro do prazo.",
  author: "Ricardo Almeida",
  role: "Cliente residencial",
  gradient: "from-pulse-800 via-pulse-700 to-pulse-600",
  backgroundImage: "/background-section2.png"
}, {
  content: "Contratamos a equipe para o PPCI da nossa empresa. A segurança e o profissionalismo foram impecáveis em todas as etapas.",
  author: "Fernanda Lopes",
  role: "Gerente de Operações, Indústria Metalúrgica",
  gradient: "from-pulse-700 via-pulse-600 to-pulse-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Desde o primeiro contato até a entrega do projeto comercial, sentimos confiança e proximidade. Com certeza indicamos a Horn Bigarella.",
  author: "Marcelo Ribeiro",
  role: "Proprietário de restaurante",
  gradient: "from-pulse-600 via-pulse-500 to-pulse-400",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  gradient,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-4 sm:p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 z-[1]`}></div>
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-white z-20"></div>
      
      <div className="relative z-10">
        <p className="text-base sm:text-xl mb-6 sm:mb-8 font-medium leading-relaxed pr-12 sm:pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-lg sm:text-xl">{author}</h4>
          <p className="text-white/80 text-sm sm:text-base">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative overflow-x-hidden" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            {/* <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span> */}
            <span>Testemunhos</span>
          </div>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 sm:mb-12 text-left">O que nossos clientes falam</h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
