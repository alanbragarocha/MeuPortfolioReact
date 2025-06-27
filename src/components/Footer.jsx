import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content footer__content--centered">
          <div className="footer__social">
            <a
              href="https://github.com/alanbragarocha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer__social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-braga-rocha-pcd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/alanbragarocha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer__social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/message/IQJ53CSQW6ELO1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer__social-icon"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer__bottom footer__bottom--centered">
          <p className="footer__copyright">
            © {currentYear} Alan Braga. Todos os direitos reservados.
          </p>
          <p className="footer__made-with"></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
