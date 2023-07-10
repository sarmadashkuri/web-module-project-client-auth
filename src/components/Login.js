import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [cred, setCred] = useState({
        username: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                navigate('/friends');
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            </div>
          <div>
            <input id='username' name='username' onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor='password'>Password</label>
          </div>
          <div>
            <input type='password' name='password' id='password' onChange={handleChange}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
  
        </form>
      </div>
    )
  }

  export default Login;