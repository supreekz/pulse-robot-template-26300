
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
  gradient: "from-green-900 via-emerald-800 to-teal-700",
  backgroundImage: "/background-section1.png"
}, {
  content: "O projeto de reforma residencial superou nossas expectativas. O resultado ficou moderno, aconchegante e dentro do prazo.",
  author: "Ricardo Almeida",
  role: "Cliente residencial",
  gradient: "from-emerald-800 via-green-700 to-lime-600",
  backgroundImage: "/background-section2.png"
}, {
  content: "Contratamos a equipe para o PPCI da nossa empresa. A segurança e o profissionalismo foram impecáveis em todas as etapas.",
  author: "Fernanda Lopes",
  role: "Gerente de Operações, Indústria Metalúrgica",
  gradient: "from-teal-800 via-cyan-700 to-blue-600",
  backgroundImage: "/background-section3.png"
}, {
  content: "Desde o primeiro contato até a entrega do projeto comercial, sentimos confiança e proximidade. Com certeza indicamos a Horn Bigarella.",
  author: "Marcelo Ribeiro",
  role: "Proprietário de restaurante",
  gradient: "from-green-700 via-emerald-600 to-teal-500",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Testemunhos</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">O que nossos clientes falam</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
