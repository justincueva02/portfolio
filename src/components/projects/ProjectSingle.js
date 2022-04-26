import img from "../../assets/blinckerMockup.png";

import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import "../../styles/projects/projects.css";

const ProjectSingle = () => {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img className="project__img" alt="temp project image" src={img} />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">Car Sales Project</h3>
          <h4 className="project__description--sub-title">
            React, Javascript, TypeScript, CSS, Html
          </h4>
          <p className="project__description--para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="project__description--links">
            <a href="#" className="project__description--link">
              <BsGithub />
            </a>
            <a href="#" className="project__description--link">
              <BiLink />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectSingle;
