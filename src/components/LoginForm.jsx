import React from "react";
import { useState } from "react/cjs/react.production.min";

const LoginForm = () => {
  // const [user, setUser] = useState("User");
  // const [password, setPassword] = useState("Pswd");

  return (
    <div className="loginForm">
      <p className="loginForm__subtitle">
        Connectez-vous pour gérer vos annonces !
      </p>
      <input
        type="text"
        // value={user}
        placeholder="Votre mail"
      />
      <input
        type="password"
        // value={password}
        placeholder="Votre mot de passe"
      />

      <button className="loginForm__btn">Log in</button>
    </div>
  );
};

export default LoginForm;
