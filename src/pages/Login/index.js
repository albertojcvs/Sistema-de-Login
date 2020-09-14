import React, { useState } from "react";
import { MdLock, MdPerson } from "react-icons/md";
import {Link} from 'react-router-dom';
import "./styles.css";
export default function Login() {
  const [username, setUsername] = useState("");
  const [passoword, setPassoword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  return (
    <form action="" className="container">
      <div className="user-input">
        <label htmlFor="username">
          <MdPerson size={18} color="#3887BF" />
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          autoFocus
        />
      </div>
      <div className="user-input">
        <label htmlFor="password">
          <MdLock size={18} color="#3887BF" />
        </label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          value={passoword}
          onChange={(e) => setPassoword(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="group">
        <div className="remember-me">
          <input
            id="lembrar"
            type="checkbox"
            name="rememberMe"
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
            defaultChecked={rememberMe}
          />
          <label htmlFor="lembrar">Lembrar de mim</label>
        </div>

        <div className="forget-password">
          <Link to="/singup" > Esqueceu a senha?</Link> 
        </div>
      </div>

      <button className="submit-button">Login</button>
    </form>
  );
}
