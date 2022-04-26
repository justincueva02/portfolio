import ProjectSingle from "./ProjectSingle";
import "../../styles/projects/projects.css";

import projectImg1 from "../../assets/blinckerMockup.png";

const projectsData = [
  {
    title: "Car Sales Project",
    tech: "React, Javascript, TypeScript, CSS, Html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: projectImg1,
  },
  {
    title: "Car Sales Project",
    tech: "React, Javascript, TypeScript, CSS, Html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: projectImg1,
  },
  {
    title: "Car Sales Project",
    tech: "React, Javascript, TypeScript, CSS, Html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    image: projectImg1,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="red">projects</span>
          </h1>
          <ul className="project__list">
            {projectsData.map((projectData, index) => {
              return <ProjectSingle projectData={projectData} key={index} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
