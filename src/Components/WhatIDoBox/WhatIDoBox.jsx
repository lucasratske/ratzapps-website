import React from 'react';
import './WhatIDoBox.scss';

export default props => (
  <article className="what-i-do-box">
    <header className="what-i-do-box-title">{props.header}</header>
    {props.children}
  </article>
);
