import { Fragment } from "react";
import ReactDOM from "react-dom";

import "../../styles/modal/modal.css";

const Modal = ({ setModalIsOpen }) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div className="overlay"></div>
      <div className="modal">
        Modal <button onClick={() => setModalIsOpen(false)}>close</button>
      </div>
    </Fragment>,
    document.querySelector("#modal")
  );
};

export default Modal;
