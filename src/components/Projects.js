import React from 'react';
import headshot from './headshot.png';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>My Work</h1>
      <div className="flex-container">
        <div className="card">
          <img src={headshot} alt="" className="headshot" />
          <div className="card-container">
            <a href="https://github.com/PaperPlanes1623"><h4>Project Name</h4></a>
            <p>Project description</p>
          </div>
        </div>
        <div className="card">
          <img src={headshot} alt="" className="headshot" />
          <div className="card-container">
            <a href="https://github.com/PaperPlanes1623"><h4>Project Name</h4></a>
            <p>Project description</p>
          </div>
        </div>
        <div className="card">
          <img src={headshot} alt="" className="headshot" />
          <div className="card-container">
            <a href="https://github.com/PaperPlanes1623"><h4>Project Name</h4></a>
            <p>Project description</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;