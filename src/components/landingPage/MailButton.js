import { useContext } from "react";
import { ModalContext } from "../App";

import { GrMail } from "react-icons/gr";

import { Fragment } from "react";
import "../../styles/landingPage/mailButton.css";

const MailButton = () => {
  const modalContext = useContext(ModalContext);
  return (
    <Fragment>
      <button
        className="mail__btn click"
        onClick={() => modalContext.setModalIsOpen((prev) => !prev)}
      >
        <GrMail />
      </button>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
    </Fragment>
  );
};

export default MailButton;
