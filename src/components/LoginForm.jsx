import React, { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginForm">
      <p className="loginForm__subtitle">
        Connectez-vous pour gérer vos annonces !
      </p>
      <input
        type="text"
        placeholder="Votre mail"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="loginForm__btn">Log in</button>
    </div>
  );
};

export default LoginForm;
