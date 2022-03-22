import React from "react";
import closeImg from "../assets/croix_rouge.png";

const ModalAnimal = ({ hideModal, showModal }) => {
  return (
    <div
      className="modalAnimalBackground"
      role="button"
      aria-hidden="true"
      onClick={() => hideModal()}
    >
      {/* <div className={showModal ? "modalAnimal" : "modalAnimal isHidden"}> */}
      <div className="modalAnimal">
        <div className="modalAnimal__close">
          <img
            src={closeImg}
            alt="Croix de fermeture fenêtre"
            onClick={() => hideModal()}
          />
        </div>

        <div className="modalAnimal__animalName">Nom de l'animal : </div>
        <div className="modalAnimal__animalSpecies">Type de l'animal :</div>
        <div className="modalAnimal__description">Son histoire :</div>
        <div className="modalAnimal__association">
          Vous souhaitez en savoir plus et lui donner une nouvelle belle vie ?
          <br />
          Contactez l'association qui l'a pris en charge :
        </div>
      </div>
    </div>
  );
};

export default ModalAnimal;
