const ModalAbout = () => {
  return (
    <div className="modal__half modal__about">
      <h3 className="modal__title modal__title--about">
        Here's a bit about me.
      </h3>
      <h4 className="modal__sub-title modal__sub-title--about">
        Frontend Software Engineer.
      </h4>
      <p className="modal__para">
        Lorem ipsum dolor sit amet,{" "}
        <b className="red bold-primary">consectetur adipiscing</b> elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation
        <br />
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </p>
      <div className="modal__languages">
        <figure className="modal__language">
          <img
            className="modal__language--image"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          />
          <span className="language__name">JavaScript</span>
        </figure>
        <figure className="modal__language">
          <img
            className="modal__language--image"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          />
          <span className="language__name">JavaScript</span>
        </figure>
        <figure className="modal__language">
          <img
            className="modal__language--image"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          />
          <span className="language__name">JavaScript</span>
        </figure>
        <figure className="modal__language">
          <img
            className="modal__language--image"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          />
          <span className="language__name">JavaScript</span>
        </figure>
      </div>
    </div>
  );
};

export default ModalAbout;
