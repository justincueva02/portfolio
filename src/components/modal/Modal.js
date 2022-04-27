import ReactDOM from "react-dom";

import ModalAbout from "./ModalAbout";
import ModalContact from "./ModalContact";
import "../../styles/modal/modal.css";

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="modal">
      <ModalAbout />
      <ModalContact />
    </div>,
    document.querySelector("#portal")
  );
};

export default Modal;
