import React, { useEffect, useState } from "react";
import axios from "axios";
import AssociationCard from "./AssociationCard";

const Associations = () => {
  const [associationsList, setAssociationsList] = useState([]);
  console.log(associationsList);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/associations")
      .then((res) => res.data)
      .then((data) => setAssociationsList(data));
  }, []);

  return (
    <div className="associations">
      <p className="associations__subtitle">
        Voici la liste des associations qui proposent des animaux à adopter.
        <br />
        Contactez-les directement !
      </p>
      <div className="associations__container">
        {associationsList &&
          associationsList.map((association) => (
            <AssociationCard
              key={association.id_association}
              name={association.name_association}
              address={association.address}
              postal_code={association.postal_code}
              city={association.city}
              phone={association.phone}
              email={association.email}
            />
          ))}
      </div>
    </div>
  );
};

export default Associations;
