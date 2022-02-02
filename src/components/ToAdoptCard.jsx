import React from "react";

const ToAdoptCard = ({
  picture_link,
  name,
  species,
  description,
  association_name,
}) => {
  return (
    <div className="toAdoptCard">
      <img src={picture_link} src="Photo de l'animal" />
      <div className="toAdoptCard__name">{name}</div>
      <div className="toAdoptCard__species">{species}</div>
      <div className="toAdoptCard__description">{description}</div>
      <div className="toAdoptCard_association">{association_name}</div>
      <button className="toAdoptCard__btn">En savoir +</button>
    </div>
  );
};

export default ToAdoptCard;
