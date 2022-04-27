import "../../styles/modal/modalContact.css";

const ModalContact = () => {
  return (
    <div className="modal__half modal__contact">
      <h3 className="modal__title modal__title--contact">Let's have a chat</h3>
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
    </div>
  );
};

export default ModalContact;
