import React from 'react';
import './style.css';
import headshot from './headshot.png';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1>Dylan Taft</h1>
      <p>Full Stack Developer</p>
      <img src={headshot} alt="headshot" className="headshot" />
    </section>
  )
}

export default Home;