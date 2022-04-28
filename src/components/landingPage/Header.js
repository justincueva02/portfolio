import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import "../../styles/landingPage/header.css";

import { useContext } from "react";
import { ModalContext } from "../App";

const Header = () => {
  const modalContext = useContext(ModalContext);

  return (
    <div className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title red">I'm Justin.</h1>
        <p className="header__para">
          Lorem <b className="red">ipsum dolor sit amet</b>, consectetur
          adipiscing elit, sed doeiusmod tempor.
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
          <a href="#" target={"_blank"} className="social__link click">
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/justincueva02"
            target={"_blank"}
            className="social__link click"
          >
            <BsGithub />
          </a>
          <a href="#" target={"_blank"} className="social__link click">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
