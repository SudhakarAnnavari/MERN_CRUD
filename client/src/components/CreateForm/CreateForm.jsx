import React, { useState } from 'react';
import './CreateForm.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const CreateForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const nav = useNavigate()

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/user/', { name, email, age })
      .then(result => {console.log(result)
      window.location.reload()})
      .catch(err => console.log(err));
    nav('/')  
  };

  return (
    <div className="main">
    <div className="container">
      <h2 className="title">Fill out the Form</h2>
      <form className="form" onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="label">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
            required
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default CreateForm;
