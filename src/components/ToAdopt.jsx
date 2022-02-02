import React, { useEffect, useState } from "react";
import ToAdoptCard from "./ToAdoptCard";
import axios from "axios";

const ToAdopt = () => {
  const [toAdoptList, setToAdoptList] = useState([]);
  console.log(toAdoptList);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/animals")
      .then((res) => res.data)
      .then((data) => setToAdoptList(data));
  }, []);

  return (
    <div className="toAdopt">
      {toAdoptList &&
        toAdoptList.map((animal) => (
          <ToAdoptCard
            key={animal.id_animal}
            picture_link={animal.picture_link}
            name={animal.name}
            species={animal.species}
            description={animal.description}
          />
        ))}
    </div>
  );
};

export default ToAdopt;
