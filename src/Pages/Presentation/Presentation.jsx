import React from 'react';
import PresentationPhoto from '../../Components/PresentationPhoto/PresentationPhoto';
import './Presentation.scss';
import github from '../../Assets/Images/github.png';
import linkedin from '../../Assets/Images/linkedin.png';

export default () => (
  <div>
    <div className="presentation-grid">
      <PresentationPhoto />
      <div>
        <p className="name">Lucas Ratske</p>
        <p className="job-title">Full stack developer</p>
        <p>Curitiba, Paraná - Brasil</p>
        <a
          href="https://github.com/lucasratske"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-logo" src={github} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-ratske/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-logo" src={linkedin} alt="Linkedin" />
        </a>
      </div>
    </div>
    <div className="presentation-text">
      <p className="title">Quem é o Ratske?</p>
    </div>
  </div>
);
