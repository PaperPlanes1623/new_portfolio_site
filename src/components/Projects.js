import React from 'react';
import headshot from './headshot.png';
import terraNova from './terraNova.png';
import contacts from './contacts.png';
import phpform from './phpform.png';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>My Work</h1>
      <div className="flex-container">
        <div className="card">
          <a href="https://terranovacabins-dylantaft.netlify.com/">
            <img src={terraNova} alt="terraNova homepage" />
            <div className="card-container">
              <h4>Terra Nova Cabins</h4>
              <p>Terra Nova Cabins are a Cabin resort near Yellowstone Park</p>
              <p>Powered by ReactJS</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://dylans-management.netlify.com/">
            <img src={contacts} alt="employee management system" />
            <div className="card-container">
              <h4>Simple Employee Management System(CRUD)</h4>
              <p>Powered by ReactJS</p>
            </div>
          </a>
        </div>
        <div className="card">
          <a href="https://dylanphpcontactform.000webhostapp.com/index.php">
            <img src={phpform} alt="php contact form" />
            <div className="card-container">
              <h4>Simple PHP contact form with validation</h4>
              <p>Powered by PHP and Bootstrap</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects;



