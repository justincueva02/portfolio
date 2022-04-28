const icons = [
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    name: "Redux",
    img: "https://cdn.iconscout.com/icon/free/png-256/redux-3629610-3032308.png",
  },
  {
    name: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    name: "Html",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg",
  },
  {
    name: "Git",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png",
  },
  {
    name: "Npm",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
  },
];

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
        {icons.map((icon) => {
          return (
            <figure className="modal__language">
              <img className="modal__language--image" src={icon.img} />
              <span className="language__name">{icon.name}</span>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default ModalAbout;
