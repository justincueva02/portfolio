import NavBar from "./NavBar";
import Header from "./Header";
import MailButton from "./MailButton";
import { useContext } from "react";
import { ModalContext } from "../App";
import Shapes from "./Shapes";

import "../../styles/landingPage/landingPage.css";

const LandingPage = ({ setIsDarkTheme }) => {
  const modalContext = useContext(ModalContext);
  const moveBackground = (e) => {
    const shapes = document.querySelectorAll(".shape");
    const x = e.clientX / 20;
    const y = e.clientY / 20;
    console.log(x, y);

    for (let i = 0; i < shapes.length; i++) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px)`;
    }
  };

  return (
    <section id="landing-page" onMouseMove={(e) => moveBackground(e)}>
      {!modalContext.modalIsOpen && <NavBar setIsDarkTheme={setIsDarkTheme} />}
      {!modalContext.modalIsOpen && <Header />}
      <MailButton />
      <Shapes />
    </section>
  );
};

export default LandingPage;
