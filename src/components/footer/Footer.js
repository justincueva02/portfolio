import "../../styles/footer/footer.css";
import { useContext } from "react";
import { ModalContext } from "../App";

const Footer = () => {
  const setModalIsOpen = useContext(ModalContext);

  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            {/* <img src="" alt="" /> */}
            <div className="footer__logo--img"></div>
          </figure>
          <div className="footer__social--list">
            <a
              href="#"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
          "
            >
              Github
            </a>
            <a
              href="#"
              className="
            footer__social--link
            link__hover-effect
            link__hover-effect--white
          "
            >
              LinkedIn
            </a>
            <a
              onClick={() => setModalIsOpen(true)}
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
              href="#"
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
