import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logoImg from "../assets/images/Logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Fechar menu quando trocar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Fechar menu ao clicar em overlay ou ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevenir scroll quando menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleSectionLink = (sectionId) => {
    setMenuOpen(false);

    // Se estamos na página inicial, apenas fazer scroll
    if (location.pathname === "/") {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estamos em outra página, navegar para home com hash
      window.location.href = `/${sectionId}`;
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="main-nav">
          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logoImg} className="logoImg" alt="Logo" />
            </Link>
          </div>

          {/* Menu desktop - oculto no mobile */}
          <ul className="nav-menu-desktop">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={location.pathname === "/sobre" ? "active" : ""}
              >
                Sobre
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="nav-link-button"
                onClick={() => handleSectionLink("#projetos")}
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-link-button"
                onClick={() => handleSectionLink("#technologias")}
              >
                Tecnologias
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-link-button"
                onClick={() => handleSectionLink("#contato")}
              >
                Contato
              </button>
            </li>
          </ul>

          {/* Controles laterais */}
          <div className="nav-controls">
            <ThemeToggle />

            <button
              className={`menu-btn ${menuOpen ? "active" : ""}`}
              onClick={handleMenuToggle}
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu de navegação"}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {menuOpen && (
            <div
              className="nav-overlay"
              onClick={handleLinkClick}
              aria-hidden="true"
            />
          )}
          <ul
            id="main-menu"
            className={`nav-menu-mobile ${menuOpen ? "open" : ""}`}
            role="menu"
          >
            <ThemeToggle className="theme-toggle-mobile" />

            <li role="none" style={{ "--item-index": 0 }}>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                role="menuitem"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li role="none" style={{ "--item-index": 1 }}>
              <Link
                to="/sobre"
                className={location.pathname === "/sobre" ? "active" : ""}
                role="menuitem"
                onClick={handleLinkClick}
              >
                Sobre
              </Link>
            </li>
            <li role="none" style={{ "--item-index": 2 }}>
              <button
                type="button"
                className="nav-link-button"
                role="menuitem"
                onClick={() => handleSectionLink("#projetos")}
              >
                Projetos
              </button>
            </li>
            <li role="none" style={{ "--item-index": 3 }}>
              <button
                type="button"
                className="nav-link-button"
                role="menuitem"
                onClick={() => handleSectionLink("#technologias")}
              >
                Tecnologias
              </button>
            </li>
            <li role="none" style={{ "--item-index": 4 }}>
              <button
                type="button"
                className="nav-link-button"
                role="menuitem"
                onClick={() => handleSectionLink("#contato")}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
