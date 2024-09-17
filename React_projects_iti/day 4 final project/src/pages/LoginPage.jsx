import React, { useContext, useState } from 'react';
import classes from '../styles/loginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UsersContextProviders';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useContext(userContext)
  const navigate = useNavigate(); // navigate hook


  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
        for (let elem of state) {
          if (elem.email === email && elem.password === password) {
            navigate('/sign/movies');
            return;  // Exit once the match is found
          }
        }
        alert('Incorrect Username and Passworrd')
    }
  };
  
  

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <legend><h1 style={{ color: "aliceblue" }}>Login Page</h1></legend><br />

        <input 
          type="email" 
          id="em" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          placeholder="Enter Email.." 
        />
        <p>The Required Email address must only contain any other sign except '@'</p><br /><br />

        <input 
          type="password" 
          id="pass" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
          pattern="([A-Z]|[a-z]|[0-9])+" 
          placeholder="Enter Password.." 
        />
        <p>The Required Password must only be Alphabetic Letters.</p><br /><br />

        <input type="submit" value="Login" />
        <input type="reset" value="Cancel" />
      </form>
    </>
  );
}

export default LoginPage;
