import { Fragment, useContext, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "../App";
import emailjs from "@emailjs/browser";

import ModalForm from "./ModalForm";
import SuccessOverlay from "./SuccessOverlay";
import LoadingOverlay from "./LoadingOverlay";
import "../../styles/modal/modalContact.css";

const ModalContact = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formState, setFormState] = useState("FORM");

  const setModalIsOpen = useContext(ModalContext);

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const contact = async (e) => {
    try {
      e.preventDefault();
      setFormState("LOADING");

      await timeout(1000);
      // if (1 === 1) throw new Error("error something went wrong");

      // await emailjs.sendForm(
      //   "service_de9xr5x",
      //   "template_2gsy4wi",
      //   formRef.current,
      //   "w43vXE8yTe0BrmmKl"
      // );

      setFormState("SUCCESS");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setFormState("FORM");
      alert(
        "the email service is temporarily unavailable. Please contact me directly on justincueva02@gmail.com"
      );
    }
  };

  return (
    <Fragment>
      <div className="modal__half modal__contact">
        {formState === "FORM" && (
          <ModalForm
            name={name}
            email={email}
            message={message}
            setName={setName}
            setEmail={setEmail}
            setMessage={setMessage}
            contact={contact}
            formRef={formRef}
          />
        )}
        {formState === "LOADING" && <LoadingOverlay />}
        {formState === "SUCCESS" && <SuccessOverlay />}
      </div>
      <span className="modal__exit click" onClick={() => setModalIsOpen(false)}>
        <FaTimes />
      </span>
    </Fragment>
  );
};

export default ModalContact;
