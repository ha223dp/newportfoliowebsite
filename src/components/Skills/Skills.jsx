import React from "react";
import skills from "./imports";
import "./Skills.scss";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section
      className="app__skills"
      id="skills"
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="400"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__skills-title">
        <h2 className="app__skills-title_title">Skills</h2>
        {/* <p className="app__skills-title_content">
          I translate UI/UX design into successful responsive websites that are
          fast, easy to use, and built with best practices. The main area of my
          expertise is front-end development, HTML, CSS, JS, & React. As an
          aspirant frontend developer most of my skills are heavily focused on
          different frontend technologies.
        </p> */}

        {/* <p className="app__skills-title_content">
          Despite knowing these frontend technologies I also have experience in
          server side languanges such as PHP and MYSQL and basic knowledge in
          Python and Java.
        </p> */}

        <p className="app__skills-title_content">
          As of this moment I'm currently learning best coding principles while taking my bachelor in information system in Software enginnering
        
        </p>

        <p className="app__skills-title_content">
          These are the Tech Stack Tools I learned and currently using as a developer in designing,
          creating and establishing development projects.
        </p>
      </div>

      <div className="app__skills-container">
        <div
          className="app__skills-container_skills"
          data-aos="zoom-out"
          data-aos-offset="300"
          data-aos-delay="700"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      <div className="app__skills-container_image multidevice">
      </div>
    </section>
  );
};

export default Skills;
