import React from "react";
import "./styles.css";

import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className="home-container">
      <header>Sistema de Login</header>
      <main>
        <section>
          <p>
            Sistema de login desenvolvido em React. 
            Feito por Alberto Jose.
          </p>
        </section>
        <div className="button-group">
          <Link to="/login">Entrar</Link>
          <Link to="/singup">Criar conta</Link>
        </div>
      </main>
    </div>
  );
}
