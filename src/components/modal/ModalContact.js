import { Fragment, useContext, useState, useRef } from "react";
import { ImSpinner6 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "../App";
import emailjs from "@emailjs/browser";

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

      console.log("this runs first");

      await timeout(1000);

      // await emailjs.sendForm(
      //   "service_de9xr5x",
      //   "template_2gsy4wi",
      //   formRef.current,
      //   "w43vXE8yTe0BrmmKl"
      // );

      console.log("SUCCESS");
      setFormState("SUCCESS");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <div className="modal__half modal__contact">
        {formState === "FORM" && (
          <Fragment>
            <h3 className="modal__title modal__title--contact">
              Let's have a chat
            </h3>
            <h3 className="modal__sub-title modal__sub-title--contact">
              I'm currently open to new opportunities
            </h3>
            <form
              ref={formRef}
              onSubmit={(e) => {
                contact(e);
              }}
              id="contact__form"
            >
              <div className="form__item">
                <label className="form__item--label">Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  autoComplete="off"
                  className="input"
                  name="user_name"
                  type={"text"}
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="off"
                  className="input"
                  name="user_email"
                  type={"email"}
                  required
                />
              </div>
              <div className="form__item">
                <label className="form__item--label">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  autoComplete="off"
                  className="input"
                  name="user_message"
                  type={"text"}
                  required
                />
              </div>
              <button id="contact__submit" className="form__submit">
                Send it my way
              </button>
            </form>
          </Fragment>
        )}
        {formState === "LOADING" && (
          <div className="modal__overlay modal__overlay--loading">
            <ImSpinner6 className="spinner" />
          </div>
        )}
        {formState === "SUCCESS" && (
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        )}
      </div>
      <span className="modal__exit click" onClick={() => setModalIsOpen(false)}>
        <FaTimes />
      </span>
    </Fragment>
  );
};

export default ModalContact;
