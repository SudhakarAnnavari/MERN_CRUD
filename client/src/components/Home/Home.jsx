import React, { useEffect, useState } from 'react'
import './Home.css'
import  axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const[data,setData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:4000/user/')
    .then(result => {setData(result.data) 
      console.log(data)})
    .catch(err => console.log(err))

  },[])

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:4000/user/${id}`)
    .then(result => {console.log(result)
      window.location.reload()})
    .catch(err => console.log(err))
  }

  

  return (
    <div className='home-body'>
     
    <div className="table-container">
      <Link to='/create' ><button className='add-btn'>ADDUser +</button></Link> 
      <table className="table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((each,index)=>(
              <tr key={index}>
                <th>{index+1}</th>
                <th>{each.name}</th>
                <th>{each.email}</th>
                <th>{each.age}</th>
                <th>
                  <Link to={`/update/${each._id}`} ><button className='update-btn' >update</button></Link>
                  <button className='delete-btn' onClick={(e)=>{handleDelete(each._id)}} >Delete</button>
                </th>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Home