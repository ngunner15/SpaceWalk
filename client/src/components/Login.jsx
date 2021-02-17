import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  let isSuccess = false;

  const login = () => {
    // e.preventDefault();
    return Axios.post("http://localhost:3001/login", {username: username, password: password})
      .then(res => {
        isSuccess = true;
        localStorage.setItem("token", res.data.token);
        setToken(localStorage.getItem("token"));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login">
      {token && <Redirect to= "/admin" />}
      <form className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" name='name'>
        <h1>Login</h1>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="username" type="text" placeholder="Username..." onChange={(e) => setUsername(e.target.value) }/>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" name="password" type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value) }/>
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={login}> Login </button>
      </form>
    </div>
  );
}
