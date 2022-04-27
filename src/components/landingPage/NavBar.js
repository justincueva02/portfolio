import { useContext } from "react";

import "../../styles/landingPage/navigation.css";
import { IoIosContrast } from "react-icons/io";
import { ModalContext } from "../App";

const NavBar = ({ setIsDarkTheme }) => {
  const modalContext = useContext(ModalContext);
  return (
    <nav>
      <figure>
        {/* <img id="personal-logo" src="" alt="" /> */}
        {/* will make a personal logo later */}
        <div id="personal-logo"></div>
      </figure>
      <ul className="nav__link--list">
        <li
          className="nav__link"
          onClick={() => modalContext.setModalIsOpen(true)}
        >
          <a
            href="#"
            className="
        nav__link--anchor 
        link__hover-effect 
        link__hover-effect--black"
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="#projects"
            className="
        nav__link--anchor 
        link__hover-effect 
        link__hover-effect--black"
          >
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a
            onClick={() => modalContext.setModalIsOpen(true)}
            href="#"
            className="
        nav__link--anchor 
        link__hover-effect 
        link__hover-effect--black"
          >
            Contact
          </a>
        </li>
        <li className="nav__link click">
          <a
            onClick={() => setIsDarkTheme((prev) => !prev)}
            href="#"
            className="
        nav__link--anchor 
        link__hover-effect 
        link__hover-effect--black 
        icon--contrast
        "
          >
            <IoIosContrast />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
