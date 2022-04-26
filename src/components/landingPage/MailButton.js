import { GrMail } from "react-icons/gr";

import { Fragment } from "react";
import "../../styles/mailButton.css";

const MailButton = () => {
  return (
    <Fragment>
      <button className="mail__btn click">
        <GrMail />
      </button>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
    </Fragment>
  );
};

export default MailButton;
