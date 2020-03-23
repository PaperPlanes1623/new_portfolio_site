import React from 'react';
import { Icon } from 'semantic-ui-react';

const Skills = () => {

  let languages = ['Javascript', 'PHP', 'Ruby', 'C#'];
  let frameworks = ['React', 'Rails', 'Laravel', 'ASP.NET'];
  let otherSkills = ['Wordpress', 'Git', 'Jest', 'Rspec'];

  let mapLanguages = languages.map(function (i) {
    return <li>{i}</li>;
  });

  let mapFrameworks = frameworks.map(function (i) {
    return <li>{i}</li>;
  });

  let mapOtherSkills = otherSkills.map(function (i) {
    return <li>{i}</li>;
  });
  return (
    <section className="skills" id="skills">
      <h1 className="head">Skills</h1>
      <div className="flex-container">
        <div className="flex">
          <h1>Languages</h1>
          <ul>
            {mapLanguages}
          </ul>
        </div>
        <div className="flex">
          <h1>Frameworks</h1>
          <ul>
            {mapFrameworks}
          </ul>
        </div>
        <div className="flex">
          <h1>Other Skills</h1>
          <ul>
            {mapOtherSkills}
          </ul>
        </div>
      </div>
      <div className="flex-container">
        <div className="skill-icons" id="js"><Icon name="js square icon" size="huge" style={{ color: 'gold' }} /></div>
        <div className="skill-icons" id="php"><Icon name="php icon" size="huge" style={{ color: 'white' }} /></div>
        <div className="skill-icons" id="ruby"><Icon name="gem icon" size="huge" style={{ color: 'red' }} /></div>
        <div className="skill-icons" id="css"><Icon name="css3 alternate icon" size="huge" style={{ color: 'blue' }} /></div>
        <div className="skill-icons" id="node"><Icon name="node icon" size="huge" style={{ color: 'forestgreen' }} /></div>
        <div className="skill-icons" id="laravel"><Icon name="laravel icon" size="huge" style={{ color: 'red' }} /></div>
        <div className="skill-icons" id="html"><Icon name="html5 icon" size="huge" style={{ color: 'orangered' }} /></div>
        <div className="skill-icons" id="wp"><Icon name="wordpress icon" size="huge" style={{ color: 'dodgerblue' }} /></div>
        <div className="skill-icons" id="git"><Icon name="git icon" size="huge" style={{ color: 'white' }} /></div>
      </div>
    </section>
  )
}

export default Skills;