import "./about.css";
import React, { useState, useEffect } from "react";
import useCountTime from "../hooks/useCountTime";
import useExperienceTime from "../hooks/useExperienceTime";
import avatarImg from "../assets/images/avatar.svg";

function About() {
  const age = useCountTime("1989-08-10");
  const itExperience = useExperienceTime("2008-04-25");
  const analystExperience = useExperienceTime("2020-01-10");
  const devExperience = useExperienceTime("2023-04-25");
  const [activeAccordion, setActiveAccordion] = useState("panel1");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // UseEffect para carregar e executar o ContaTempo.js
  useEffect(() => {
    const loadContaTempo = () => {
      function updateMonths() {
        const today = new Date();
        const elements = document.querySelectorAll(".tempo-habilidades");
        elements.forEach((element) => {
          const startDate = new Date(element.getAttribute("data-start-date"));
          const diffInMonths = Math.floor(
            (today - startDate) / (1000 * 60 * 60 * 24 * 30.44)
          ); // Aproximadamente meses
          if (diffInMonths >= 12) {
            const years = Math.floor(diffInMonths / 12);
            element.textContent = `${years} Ano${years !== 1 ? "s" : ""}`;
          } else {
            element.textContent = `${diffInMonths} Mês${
              diffInMonths !== 1 ? "es" : ""
            }`;
          }
        });
      }

      // Chamar a função inicialmente
      updateMonths();

      // Atualizar a contagem dos meses a cada 1 segundo
      const interval = setInterval(updateMonths, 1000);

      // Cleanup function para limpar o interval
      return () => clearInterval(interval);
    };

    const cleanup = loadContaTempo();

    // Cleanup quando o componente for desmontado
    return cleanup;
  }, []);

  return (
    <>
      {/* Seção Principal - Sobre Mim */}
      <section className="about section">
        <div className="container">
          <div className="about__layout">
            <div className="about__image">
              <img src={avatarImg} alt="Foto de Alan Braga" loading="lazy" />
            </div>
            <div className="about__content">
              <h2>Meu Nome é Alan.</h2>

              <div className="about__info">
                <div className="about__info-grid">
                  <div className="info-item">
                    <h4>Idade:</h4>
                    <span
                      className="tempo-habilidades"
                      data-start-date="1989-08-10"
                    >
                      {age} anos
                    </span>
                  </div>
                  <div className="info-item">
                    <h4>Trabalho:</h4>
                    <span>Desenvolvimento Web</span>
                  </div>
                  <div className="info-item">
                    <h4>Freelance:</h4>
                    <span>Disponível</span>
                  </div>
                </div>

                {/* Contadores de Experiência integrados */}
                <div className="about__info-grid">
                  <div className="info-item">
                    <h4>Experiência com Informática</h4>
                    <span
                      className="tempo-habilidades"
                      data-start-date="2008-04-25"
                    >
                      {itExperience}+ Anos
                    </span>
                  </div>

                  <div className="info-item">
                    <h4>Analista de Sistemas</h4>
                    <span
                      className="tempo-habilidades"
                      data-start-date="2020-01-10"
                    >
                      {analystExperience}+ Anos
                    </span>
                  </div>

                  <div className="info-item">
                    <h4>Front-End / Back-End</h4>
                    <span
                      className="tempo-habilidades"
                      data-start-date="2023-04-25"
                    >
                      {devExperience}+ Anos
                    </span>
                  </div>
                </div>

                <div className="about__actions">
                  <button className="btn btn--primary">
                    <span>Saiba mais</span>
                    <i className="fas fa-user"></i>
                  </button>
                  <a
                    href="https://drive.google.com/u/0/uc?id=1kDRuEB2d9DBOoOLiH8dv2HFNwp8Bh6W8&export=download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    <span>Download CV</span>
                    <i className="fas fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de História Pessoal */}
      <section className="personal-story section">
        <div className="container">
          <div className="personal-story__content">
            <h2>Minha Jornada na Tecnologia</h2>
            <div className="personal-story__text">
              <p>
                Desde a infância, sempre fui apaixonado por informática, mas meu
                primeiro contato profissional com a área aconteceu em 2008. A
                partir daí, mergulhei de vez no universo da tecnologia. Em 2020,
                concluí a faculdade de Análise de Sistemas, mas ainda não havia
                tido a chance de atuar na área.
              </p>
              <p>
                Foi durante uma imersão em conteúdos sobre tecnologia que
                descobri o desenvolvimento web — e isso acendeu uma nova paixão.
                Desde então, venho me dedicando aos estudos de linguagens de
                programação voltadas para a web, com o objetivo de ingressar no
                mercado como desenvolvedor, criar meus próprios projetos e
                contribuir ativamente com a comunidade de tecnologia.
              </p>
              <p>
                Atualmente, sou Desenvolvedor Front-End. Transformo linhas de
                código em experiências visuais e interativas, criando interfaces
                funcionais, modernas e elegantes. Estou em constante evolução,
                buscando sempre aprender novas tecnologias e linguagens que me
                permitam entregar soluções cada vez mais completas e inovadoras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Qualificações - Separada */}
      <section className="qualifications-section">
        <div className="container">
          <div className="qualifications-section__title">
            <h2>Minhas jornada</h2>
            <p className="qualifications-section__subtitle">
              Competências técnicas e conhecimentos adquiridos ao longo da minha
              jornada profissional
            </p>
          </div>

          <div className="qualifications-grid">
            <div className="qualification-card">
              <div className="qualification-card__icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="qualification-card__content">
                <span className="qualification-card__year">2009 - 2012</span>
                <h3>Técnico Autônomo</h3>
                <div className="qualification-card__institution">
                  Freelancer
                </div>
                <p className="qualification-card__description">
                  Trabalho autônomo focado em montagem, manutenção de hardware e
                  instalação de software para clientes diversos.
                </p>
                <div className="qualification-card__skills">
                  <span className="qualification-card__skill">Hardware</span>
                  <span className="qualification-card__skill">Montagem PC</span>
                  <span className="qualification-card__skill">
                    Software Install
                  </span>
                  <span className="qualification-card__skill">Diagnóstico</span>
                  <span className="qualification-card__skill">Manutenção</span>
                </div>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-card__icon">
                <i className="fas fa-server"></i>
              </div>
              <div className="qualification-card__content">
                <span className="qualification-card__year">2013 - 2020</span>
                <h3>Técnico de Informática</h3>
                <div className="qualification-card__institution">
                  Setor Público
                </div>
                <p className="qualification-card__description">
                  Experiência sólida em manutenção de sistemas, suporte técnico
                  e administração de redes em ambiente corporativo.
                </p>
                <div className="qualification-card__skills">
                  <span className="qualification-card__skill">
                    Windows & Linux
                  </span>
                  <span className="qualification-card__skill">
                    Active Directory
                  </span>
                  <span className="qualification-card__skill">DHCP & DNS</span>
                  <span className="qualification-card__skill">
                    Suporte Técnico
                  </span>
                  <span className="qualification-card__skill">Redes</span>
                </div>
              </div>
            </div>

            <div className="qualification-card">
              <div className="qualification-card__icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="qualification-card__content">
                <span className="qualification-card__year">Atualmente</span>
                <h3>Front-End Development</h3>
                <div className="qualification-card__institution">
                  Desenvolvimento Web Moderno
                </div>
                <p className="qualification-card__description">
                  Especialização em criação de interfaces modernas, responsivas
                  e acessíveis, utilizando as mais recentes tecnologias do
                  mercado.
                </p>
                <div className="qualification-card__skills">
                  <span className="qualification-card__skill">
                    HTML5 & CSS3
                  </span>
                  <span className="qualification-card__skill">
                    JavaScript ES6+
                  </span>
                  <span className="qualification-card__skill">React.js</span>
                  <span className="qualification-card__skill">
                    Responsive Design
                  </span>
                  <span className="qualification-card__skill">
                    Acessibilidade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Formação e Cursos */}
      <section className="about section">
        <div className="container">
          <div className="about__details">
            <div className="about__education-experience">
              <div className="education">
                <h3>
                  <i className="fas fa-graduation-cap"></i> Formação Acadêmica
                </h3>
                <div className="timeline">
                  <div className="timeline__item">
                    <span className="timeline__date">2020 - 2022</span>
                    <h4>Análise e Desenvolvimento de Sistemas</h4>
                    <p>
                      <strong>Universidade Estácio de Sá</strong> - Graduação
                      completa com foco em desenvolvimento de software, análise
                      de requisitos e gestão de projetos tecnológicos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="courses">
                <h3>
                  <i className="fas fa-laptop-code"></i> Cursos & Certificações
                </h3>
                <div className="accordion">
                  <div
                    className={`accordion__item ${
                      activeAccordion === "panel1" ? "active" : ""
                    }`}
                  >
                    <button
                      className="accordion__header"
                      aria-expanded={activeAccordion === "panel1"}
                      aria-controls="panel1"
                      onClick={() => toggleAccordion("panel1")}
                    >
                      <span>Front-End Development</span>
                      <i
                        className={`fas fa-chevron-${
                          activeAccordion === "panel1" ? "up" : "down"
                        }`}
                      ></i>
                    </button>
                    <div id="panel1" className="accordion__body">
                      <p>
                        <strong>Cursos Complementares:</strong> HTML5, CSS3,
                        JavaScript ES6+, React.js, Git/GitHub, metodologias
                        ágeis e boas práticas de desenvolvimento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
