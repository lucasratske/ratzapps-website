import React from 'react';
import Picture from '../../Assets/Images/presentation-photo.jpg';
import './PresentationPhoto.scss';

const PresentationPhoto = () => (
  <div>
    <img className="photo" src={Picture} alt="Foto de apresentação" />
  </div>
);

export default PresentationPhoto;
