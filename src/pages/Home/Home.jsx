import React from 'react'
import "./home.css"

import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='home_container'>

      <div className="headings">
        <h2 className='head__text'>Psst...!! You have got a secret message waiting</h2>
        <h3 className='sub__text'><i>Tap to reveal the secret</i> </h3>
        <Link to='/signup'><button className='btn' >Message</button></Link>
      </div>

    </div>
  )
}

export default Home
