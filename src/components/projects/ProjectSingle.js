import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import "../../styles/projects/projects.css";

const ProjectSingle = ({ projectData }) => {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img
          className="project__img"
          alt="temp project image"
          src={projectData.image}
        />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{projectData.title}</h3>
          <h4 className="project__description--sub-title">
            {projectData.tech}
          </h4>
          <p className="project__description--para">
            {projectData.description}
          </p>
          <div className="project__description--links">
            <a
              target={"_blank"}
              href={projectData.githubRepo}
              className="project__description--link"
            >
              <BsGithub />
            </a>
            <a
              href={projectData.liveSite}
              target={"_blank"}
              className="project__description--link"
            >
              <BiLink />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectSingle;
