import { Fragment } from "react";

const ModalForm = ({
  name,
  email,
  message,
  setName,
  setEmail,
  setMessage,
  contact,
  formRef,
}) => {
  return (
    <Fragment>
      <h3 className="modal__title modal__title--contact">Let's have a chat</h3>
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
  );
};

export default ModalForm;
