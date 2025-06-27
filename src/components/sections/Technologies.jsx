import React from "react";
import htmlImg from "../../assets/images/technologies/Html.svg";
import css3Img from "../../assets/images/technologies/css3.svg";
import jsImg from "../../assets/images/technologies/Js.svg";
import nodeImg from "../../assets/images/technologies/node.svg";
import reactImg from "../../assets/images/technologies/react.svg";

function Technologies() {
  return (
    <section className="technologies section" id="technologias">
      <div className="container">
        <h2 className="section-title">Tecnologias</h2>
        <p className="section-description">
          Conhecimento nas principais tecnologias do mercado de desenvolvimento
          web
        </p>

        <div className="tech-grid">
          <div className="tech-card" data-tech="HTML">
            <img src={htmlImg} alt="HTML" />
            <span className="tech-name">HTML</span>
          </div>
          <div className="tech-card" data-tech="CSS">
            <img src={css3Img} alt="CSS" />
            <span className="tech-name">CSS</span>
          </div>
          <div className="tech-card" data-tech="JavaScript">
            <img src={jsImg} alt="JavaScript" />
            <span className="tech-name">JavaScript</span>
          </div>
          <div className="tech-card" data-tech="Node.js">
            <img src={nodeImg} alt="Node.js" />
            <span className="tech-name">Node.js</span>
          </div>
          <div className="tech-card" data-tech="React">
            <img src={reactImg} alt="React" />
            <span className="tech-name">React</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
