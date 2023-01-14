import React, { useEffect, useState } from "react";
import ToAdoptCard from "./ToAdoptCard";
import axios from "axios";

const ToAdopt = () => {
  const [toAdoptList, setToAdoptList] = useState([]);
  const [animalFilter, setAnimalFilter] = useState("");
  console.log(toAdoptList);
  console.log(animalFilter);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/animals")
      .then((res) => res.data)
      .then((data) => setToAdoptList(data));
  }, []);

  return (
    <div className="toAdopt">
      <label for="pet-select">Filtrer par type animal : </label>
      <select
        name="pets-type"
        id="pet-select"
        onChange={(e) => setAnimalFilter(e.target.value)}
      >
        <option value="">--Merci de choisir un animal--</option>
        <option value="Chien">Chien</option>
        <option value="Chat">Chat</option>
        <option value="Lapin">Lapin</option>
        <option value="Autre">Autre</option>
      </select>
      <div className="toAdoptGrid">
        {!animalFilter
          ? toAdoptList &&
            toAdoptList.map((animal) => (
              <ToAdoptCard
                key={animal.id_animal}
                picture_link={animal.picture_link}
                name={animal.name}
                species={animal.species}
                description={animal.description}
              />
            ))
          : toAdoptList &&
            toAdoptList
              .filter((animal) => animal.species === animalFilter)
              .map((animal) => (
                <ToAdoptCard
                  key={animal.id_animal}
                  picture_link={animal.picture_link}
                  name={animal.name}
                  species={animal.species}
                  description={animal.description}
                />
              ))}
      </div>
    </div>
  );
};

export default ToAdopt;
