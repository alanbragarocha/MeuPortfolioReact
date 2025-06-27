import React, { useEffect } from "react";
import Technologies from "../components/sections/Technologies";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

function Home() {
  // Gerencia o scroll para navegação por âncoras
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <main id="home" className="hero">
        <div className="container hero__content">
          <h1>
            <span className="highlight">Soluções Criativas</span> &
            Desenvolvimento Front-end
          </h1>
          <p>
            Alan Braga, Conceição de Macabu-RJ, Desenvolvedor Front-end
            especializado em criar experiências web modernas e acessíveis.
          </p>
          <div className="hero__actions">
            <ul className="social-links" aria-label="Redes sociais">
              <li>
                <a
                  href="https://github.com/alanbragarocha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alan-braga-rocha-pcd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alanbragarocha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <a href="#projetos" className="btn btn--primary">
              <span>Ver Projetos</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </main>
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
