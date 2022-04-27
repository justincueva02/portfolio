import { Fragment } from "react";
import { ImSpinner6 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

import "../../styles/modal/modalContact.css";

const ModalContact = () => {
  return (
    <Fragment>
      <div className="modal__half modal__contact">
        <h3 className="modal__title modal__title--contact">
          Let's have a chat
        </h3>
        <h3 className="modal__sub-title modal__sub-title--contact">
          I'm currently open to new opportunities
        </h3>
        <form id="contact__form">
          <div className="form__item">
            <label className="form__item--label" htmlFor="name">
              Name
            </label>
            <input
              autoComplete="off"
              className="input"
              name="user_name"
              type={"text"}
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label" htmlFor="email">
              Email
            </label>
            <input
              autoComplete="off"
              className="input"
              name="user_email"
              type={"email"}
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item--label" htmlFor="message">
              Message
            </label>
            <textarea
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
        <div className="modal__overlay modal__overlay--loading">
          <ImSpinner6 className="spinner" />
        </div>
        <div className="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
      <span className="modal__exit click">
        <FaTimes />
      </span>
    </Fragment>
  );
};

export default ModalContact;
