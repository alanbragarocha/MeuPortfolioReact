import "./sections.css";
import React from "react";
import emBreveImg from "../../assets/images/projects/Em breve.svg";

function Projects() {
  return (
    <section id="projetos" className="projects section">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-description">
          Conheça alguns dos projetos que desenvolvi recentemente
        </p>

        <div className="projects__grid">
          <article className="project-card">
            <div className="project-card__image">
              <img
                src={emBreveImg}
                alt="Prévia do projeto Igreja Presbiteriana"
              />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title">Igreja Presbiteriana</h3>
              <p className="project-card__description">
                Site responsivo em português para uma igreja presbiteriana,
                desenvolvido com HTML, CSS e JavaScript, com informações
                institucionais, agenda de cultos e localização.
              </p>
              <div className="project-card__technologies">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsivo</span>
              </div>
              <ul className="project-card__features">
                <li>Seção de figuras históricas da reforma</li>
                <li>Agenda semanal de eventos</li>
                <li>Informações de contato e localização</li>
                <li>Menu mobile responsivo com JavaScript</li>
                <li>Seção de ministérios e doações com PIX</li>
              </ul>
              <div className="project-card__actions">
                <a
                  href="https://alanbraga.com/projetos/IgrejaPresbiteriana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <span>Prévia</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/alanbragarocha/IgrejaPresbiteriana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <span>Repositório</span>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-card__image">
              <img
                src={emBreveImg}
                alt="Prévia do projeto Serviços Consultoria"
              />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title">Servicos Consultoria</h3>
              <p className="project-card__description">
                Página para profissionais liberais desenvolvida com HTML, CSS e
                JavaScript, apresentando serviços, especialidades e depoimentos
                de clientes.
              </p>
              <div className="project-card__technologies">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Responsivo</span>
              </div>
              <ul className="project-card__features">
                <li>Seção de apresentação com contadores dinâmicos</li>
                <li>Cards de serviços com ícones personalizados</li>
                <li>Áreas de especialidades organizadas em colunas</li>
                <li>Depoimentos de clientes em formato carrossel</li>
                <li>Navegação suave com scroll automático</li>
              </ul>
              <div className="project-card__actions">
                <a
                  href="https://alanbraga.com/projetos/PaginaServicosConsultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <span>Prévia</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/alanbragarocha/PaginaServicosConsultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <span>Repositório</span>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-card__image">
              <img src={emBreveImg} alt="Prévia do projeto Landing Page" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title">Landing page E-commerce</h3>
              <p className="project-card__description">
                Landing page para loja de tecnologia desenvolvida com HTML e
                CSS, apresentando categorias de produtos e proposta de valor da
                marca
              </p>
              <div className="project-card__technologies">
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Design Responsivo</span>
              </div>
              <ul className="project-card__features">
                <li>Banner principal com chamada para ação</li>
                <li>Categorias de produtos interativas</li>
                <li>Seção de proposta de valor</li>
                <li>Design minimalista e moderno</li>
                <li>Tipografia Raleway para identidade visual</li>
              </ul>
              <div className="project-card__actions">
                <a
                  href="https://alanbraga.com/projetos/TechShopLandingPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <span>Prévia</span>
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/alanbragarocha/TechShopLandingPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <span>Repositório</span>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="projects__more">
          <a
            href="https://github.com/alanbragarocha"
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ver Todos os Projetos</span>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
