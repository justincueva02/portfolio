import ReactDOM from "react-dom";

import "../../styles/modal/modal.css";
import ModalAbout from "./ModalAbout";

const Modal = ({ setModalIsOpen }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <ModalAbout />
      <div className="modal__half modal__contact">let's have a chat</div>
    </div>,
    document.querySelector("#portal")
  );
};

export default Modal;
