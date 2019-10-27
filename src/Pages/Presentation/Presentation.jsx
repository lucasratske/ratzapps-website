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
      <h2 className="title">Quem é o Ratske?</h2>
      Desenvolvedor desde 2011, onde comecei atuar com desenvolvimento de sites
      com PHP e desktop com Dataflex, em 2012 mudei de stack e comecei a
      desenvolver com .NET Framework utilizando Webforms e MVC.
      <br />
      Somente mais tarde em 2016 comecei a procurar saber mais sobre frameworks
      Javascript e desenvolvimento mobile hibrido, onde conheci Angular e Ionic,
      foi paixão a primeira vista!
      <br />
      Atualmente trabalho desenvolvendo soluções para mobile e webapps, fazendo
      backend e frontend.
      <h3 className="sub-title">Principais tecnologias utilizadas:</h3>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Ionic framework</li>
        <li>C#</li>
        <li>Node.JS</li>
      </ul>
    </div>
  </div>
);
