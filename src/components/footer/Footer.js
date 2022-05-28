import "../../styles/footer/footer.css";
import { useContext } from "react";
import { ModalContext } from "../App";

import resume from "../../assets/resume.pdf";

const Footer = () => {
  const modalContext = useContext(ModalContext);

  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            {/* <img src="" alt="" /> */}
            <div className="footer__logo--img">JC</div>
          </figure>
          <div className="footer__social--list">
            <a
              target={"_blank"}
              href="https://github.com/justincueva02"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
          "
            >
              Github
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/justin-cueva-5a5134239/"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
          "
            >
              LinkedIn
            </a>
            <a
              onClick={() => modalContext.setModalIsOpen(true)}
              href="#"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
          "
            >
              Contact
            </a>
            <a
              target={"_blank"}
              href={resume}
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
          "
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
