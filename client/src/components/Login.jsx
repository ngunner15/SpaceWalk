import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import '../styles/login.css';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  let isSuccess = false;

  const login = () => {
    // e.preventDefault();
    return Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    })
      .then((res) => {
        isSuccess = true;
        localStorage.setItem('token', res.data.token);
        setToken(localStorage.getItem('token'));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='login'>
      {token && <Redirect to='/admin' />}
      <form name='name'>
        <h1>User Login</h1>
        <input
          name='username'
          type='text'
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          name='password'
          type='password'
          placeholder='Password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='button' onClick={login}>
          {' '}
          Login{' '}
        </button>
      </form>
    </div>
  );
}
