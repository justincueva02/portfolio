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
        I am an American web developer who loves to{" "}
        <b className="red bold-primary">solve problems</b>. I have the
        experience required to build{" "}
        <b className="red bold-primary">responsive</b>,{" "}
        <b className="red bold-primary">scaleable</b>, and{" "}
        <b className="red bold-primary">efficient</b> applications.
        <br />
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
