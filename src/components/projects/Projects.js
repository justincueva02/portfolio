import ProjectSingle from "./ProjectSingle";
import "../../styles/projects/projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="red">projects</span>
          </h1>
          <ul className="project__list">
            <ProjectSingle />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
