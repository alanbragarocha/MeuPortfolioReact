import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Credenciais do EmailJS
    const serviceId = "emailjs-826"; // Service ID do EmailJS
    const templateId = "__ejs-test-mail-service__"; // Template ID do EmailJS
    const publicKey = "QLUG1nFsLHxpPmQHf"; // Public Key do EmailJS

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Email enviado com sucesso!", result.text);
        setFormStatus({
          submitted: true,
          success: true,
          message: "Mensagem enviada com sucesso! Retornarei em breve.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      },
      (error) => {
        console.error("Erro ao enviar email:", error.text);
        setFormStatus({
          submitted: true,
          success: false,
          message:
            "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="contato" className="contact section">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        <p className="section-description">
          Estou disponível para serviços e novas conexões. Entre em contato!
        </p>

        <div className="contact__layout">
          <div className="contact__info">
            <div className="contact__grid">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:alanbragarocha@gmail.com">
                    alanbragarocha@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Localização</h3>
                  <p>Conceição de Macabu, RJ - Brasil</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-briefcase"></i>
                <div>
                  <h3>Trabalho</h3>
                  <p>Disponível para projetos</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Conecte-se comigo</h3>
              <ul className="social-links social-links--large">
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
                <li>
                  <a
                    href="https://wa.me/message/IQJ53CSQW6ELO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__form-container">
            <h3 className="form-title">Envie uma mensagem</h3>
            {formStatus.submitted && (
              <div
                className={`form-message ${
                  formStatus.success ? "success" : "error"
                }`}
              >
                {formStatus.message}
              </div>
            )}
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
