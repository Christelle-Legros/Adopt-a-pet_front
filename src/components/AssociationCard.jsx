import React from "react";

const AssociationCard = ({
  name,
  address,
  postal_code,
  city,
  phone,
  email,
}) => {
  return (
    <div className="associationCard">
      <div className="associationCard__name">{name}</div>
      <div className="associationCard__address">{address}</div>
      <div className="associationCard__postalCode">{postal_code}</div>
      <div className="associationCard__city">{city}</div>
      <div className="associationCard__phone">Tél : {phone}</div>
      <div className="associationCard__email">{email}</div>
      <button className="associationCard__btn">Contactez-nous</button>
    </div>
  );
};

export default AssociationCard;
