import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import "../../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="title">Hey</h1>
        <h1 className="title red">I'm Justin.</h1>
        <p className="header__para">
          Lorem <b className="red">ipsum dolor sit amet</b>, consectetur
          adipiscing elit, sed doeiusmod tempor
          <br />
          labore et dolore <b className="red">magna aliqua</b>.
        </p>
        <div className="social__list">
          <a href="#" target={"_blank"} className="social__link click">
            <FaLinkedinIn />
          </a>
          <a href="#" target={"_blank"} className="social__link click">
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
