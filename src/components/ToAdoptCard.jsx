import React, { useState } from "react";
import ModalAnimal from "./ModalAnimal";

const ToAdoptCard = ({
  picture_link,
  name,
  species,
  description,
  association_name,
}) => {
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => setShowModal(false);
  console.log(showModal);

  return (
    <div className="toAdoptCard">
      <img src={picture_link} alt="Photo de l'animal" />
      <div className="toAdoptCard__name">{name}</div>
      <div className="toAdoptCard__species">{species}</div>
      <div className="toAdoptCard__description">{description}</div>
      <div className="toAdoptCard_association">{association_name}</div>
      <button className="toAdoptCard__btn" onClick={() => setShowModal(true)}>
        En savoir +
      </button>
      {showModal && (
        <ModalAnimal
          showModal={showModal}
          setShowModal={setShowModal}
          hideModal={hideModal}
        />
      )}
    </div>
  );
};

export default ToAdoptCard;
