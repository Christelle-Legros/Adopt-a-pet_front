import React from "react";
import homeCatPic from "../assets/Home_cat.jpg";
import homeDogPic from "../assets/Home_dog.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__pics">
        <img className="home__catPic" src={homeCatPic} alt="Chat" />
        <img className="home__dogPic" src={homeDogPic} alt="Chien" />
      </div>

      <p className="home__presentationText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur
        totam distinctio aspernatur? Atque eaque quis veniam quam magnam
        dignissimos eos ipsa quidem facere, deserunt tempora ad voluptatum non
        asperiores, cum pariatur? Velit eligendi sunt eius eveniet dicta error.
        Nostrum commodi molestiae error eaque accusamus, asperiores non harum
        quos cupiditate, rem illo id mollitia eum. Consectetur optio blanditiis
        voluptatum veniam temporibus, natus alias, quibusdam illum numquam
        labore impedit non aperiam, accusantium cum officia quidem voluptatibus
        quisquam. Possimus eum expedita quas aperiam illum impedit modi debitis
        harum ducimus molestiae officiis, voluptatibus qui doloremque dicta
        maxime. Temporibus atque consequuntur reiciendis amet libero!
      </p>
    </div>
  );
};

export default Home;
