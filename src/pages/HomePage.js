import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {

     const navigate=useNavigate();

     const navigatorHandler=()=>{
        navigate('/products');
     }
  return (
    <div>
      <h1>My Home Page</h1>
      <p>GOto <Link to={"/products"}> list of products</Link></p>
      <button onClick={navigatorHandler}> Navigate</button>
    </div>
  )
}

export default HomePage
