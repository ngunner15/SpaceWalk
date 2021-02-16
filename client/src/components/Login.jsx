import React, { useState } from "react";
import Axios from "axios";

export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState();

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        // setLoginStatus(response.data.message)
        setLoginStatus("FAILED")
      } else {
        // setLoginStatus(response.data[0].username)
        setLoginStatus("SUCCESS")
      }
    })
  };

  return (
    <div className="login">
      <form name='name'>
        <h1>Login</h1>
        <input name="username" type="text" placeholder="Username..." onChange={(e) => setUsername(e.target.value) }/>
        <input name="password" type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value) }/>
        <button type="button" onClick={login}> Login </button>
        <h1>{loginStatus}</h1>
      </form>
    </div>
  );
}
