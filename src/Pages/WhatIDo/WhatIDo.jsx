import React from 'react';
import WhatIDoBox from '../../Components/WhatIDoBox/WhatIDoBox';
import './WhatIDo.scss';

export default () => (
  <div>
    <h2 className="title">O que o Ratske faz?</h2>
    <div className="what-i-do-container">
      <WhatIDoBox header="Web Apps">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        placeat repudiandae saepe in sit, dolorum sequi libero similique atque
        fuga eius accusantium nemo eaque sunt? Vel sed reiciendis quod sit.
        <h3 className="sub-title">Tecnologias:</h3>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>SCSS</li>
        </ul>
      </WhatIDoBox>
      <WhatIDoBox header="Mobile Apps">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        placeat repudiandae saepe in sit, dolorum sequi libero similique atque
        fuga eius accusantium nemo eaque sunt? Vel sed reiciendis quod sit.
        <h3 className="sub-title">Tecnologias:</h3>
        <ul>
          <li>Flutter</li>
          <li>Ionic Framework</li>
        </ul>
      </WhatIDoBox>
      <WhatIDoBox header="Web Development">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        placeat repudiandae saepe in sit, dolorum sequi libero similique atque
        fuga eius accusantium nemo eaque sunt? Vel sed reiciendis quod sit.
        <h3 className="sub-title">Tecnologias:</h3>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>SCSS</li>
        </ul>
      </WhatIDoBox>
      <WhatIDoBox header="RESTful APIs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        placeat repudiandae saepe in sit, dolorum sequi libero similique atque
        fuga eius accusantium nemo eaque sunt? Vel sed reiciendis quod sit.
        <h3 className="sub-title">Tecnologias:</h3>
        <ul>
          <li>C#</li>
          <li>Node.JS</li>
          <li>Firebase functions</li>
        </ul>
      </WhatIDoBox>
    </div>
  </div>
);
