import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const eventAdd = () => {
        navigate("/form");
    }

  return (
    <div>
        <h1>Literacy Rate</h1>
        <button onClick={eventAdd}>Add details</button>
    </div>
  )
}

export default Home
