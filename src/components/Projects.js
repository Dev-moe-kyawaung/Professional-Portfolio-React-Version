import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "ကိုယ်ပိုင် portfolio site ကို modern design ဖြင့်တည်ဆောက်ထားခြင်း။"
    },
    {
      title: "React Dashboard",
      description: "React အသုံးပြုထားသော dashboard application။"
    },
    {
      title: "Landing Page",
      description: "Business promotion အတွက် responsive landing page။"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Project များ</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="btn">ကြည့်ရန်</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
