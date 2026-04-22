import React from "react";

function Skills() {
  const skills = ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "GitHub"];

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2>ကျွမ်းကျင်မှုများ</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

