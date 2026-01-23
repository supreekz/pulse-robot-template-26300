import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [canPortal, setCanPortal] = useState(false);

  useEffect(() => {
    setCanPortal(typeof window !== "undefined" && !!document?.body);

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // trava/destrava o scroll do body ao abrir/fechar o menu
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
          // aplica blur quando scrolled ou quando o menu está aberto
          isScrolled || isMenuOpen
            ? "backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="Pulse Robot"
          >
            <img src={`${import.meta.env.BASE_URL}aaaaaa.png`}
            alt="Pulse Robot Logo" className="h-7 sm:h-8" />
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#features" className="nav-link">Sobre</a>
            <a href="#contact" className="nav-link">Contato</a>
          </nav>

          {/* Botão mobile */}
          <button
            className="md:hidden text-gray-700 p-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MENU MOBILE FORA DO HEADER (PORTAL) */}
      {canPortal &&
        createPortal(
          <div
            id="mobile-menu"
            className={cn(
              "fixed inset-0 z-[60] md:hidden bg-gradient-to-br from-pulse-50 via-pulse-100 to-pulse-200 backdrop-blur-lg",
              "flex flex-col pt-20 px-6 transition-all duration-300 ease-in-out", // pt-20 compensa a altura do header
              isMenuOpen
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-full pointer-events-none"
            )}
            role="dialog"
            aria-modal="true"
          >
            <nav className="flex flex-col space-y-6 items-center mt-4">
              <a
                href="#"
                className="text-xl font-medium py-4 px-6 w-full text-center rounded-xl bg-white/60 backdrop-blur-sm text-pulse-900 hover:bg-pulse-500 hover:text-white transition-all duration-200 shadow-sm"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="text-xl font-medium py-4 px-6 w-full text-center rounded-xl bg-white/60 backdrop-blur-sm text-pulse-900 hover:bg-pulse-500 hover:text-white transition-all duration-200 shadow-sm"
                onClick={closeMenu}
              >
                Portfolio
              </a>
              <a
                href="#features"
                className="text-xl font-medium py-4 px-6 w-full text-center rounded-xl bg-white/60 backdrop-blur-sm text-pulse-900 hover:bg-pulse-500 hover:text-white transition-all duration-200 shadow-sm"
                onClick={closeMenu}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="text-xl font-medium py-4 px-6 w-full text-center rounded-xl bg-white/60 backdrop-blur-sm text-pulse-900 hover:bg-pulse-500 hover:text-white transition-all duration-200 shadow-sm"
                onClick={closeMenu}
              >
                Contato
              </a>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
