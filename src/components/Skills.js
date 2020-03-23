import React from 'react';

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
    </section>
  )
}

export default Skills;