import React, { useEffect, useState } from 'react'
import './UpdateForm.css'
import axios from 'axios'
import { useParams, useNavigate  } from 'react-router-dom'


const UpdateForm = () => {
    const {id} = useParams()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get(`http://localhost:4000/user/${id}`)
      .then(result => {
        const {name,email,age} = result.data
        setName(name)
        setAge(age)
        setEmail(email)
      })
      .catch(err => console.log(err))
  
    },[])

  
   const updateForm = (e) =>{
      e.preventDefault()
      axios.put(`http://localhost:4000/user/${id}`,{ name, email, age })
      .then(result => {console.log(result)
        window.location.reload()})
      .catch(err => console.log(err));
      navigate('/')
   }

  return (
    <div className="container">
      <h2 className="title">Fill out the Form</h2>
      <form className="form" onSubmit={updateForm} >
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
  )
}

export default UpdateForm