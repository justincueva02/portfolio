import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";

import { useContext } from "react";
import { ModalContext } from "../App";
import resume from "../../assets/resume.pdf";
import "../../styles/landingPage/header.css";

const Header = () => {
  const modalContext = useContext(ModalContext);

  return (
    <div className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title red">I'm Justin.</h1>
        <p className="header__para">
          I'm a <b className="red">Frontend Developer </b>with a strong passion
          for building web applications with great user experiences.
          <br />
          Here's a bit more{" "}
          <b
            className="red"
            style={{ cursor: "pointer" }}
            onClick={() => modalContext.setModalIsOpen(true)}
          >
            about me
          </b>
          .
        </p>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/justin-cueva-5a5134239/"
            target={"_blank"}
            className="social__link click"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/justincueva02"
            target={"_blank"}
            className="social__link click"
          >
            <BsGithub />
          </a>
          <a href={resume} target={"_blank"} className="social__link click">
            <AiFillFilePdf />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
