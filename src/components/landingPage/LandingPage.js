import NavBar from "./NavBar";
import Header from "./Header";
import MailButton from "./MailButton";
import { useContext } from "react";
import { ModalContext } from "../App";

import "../../styles/landingPage/landingPage.css";

const LandingPage = ({ setIsDarkTheme }) => {
  const modalContext = useContext(ModalContext);
  return (
    <section id="landing-page">
      {!modalContext.modalIsOpen && <NavBar setIsDarkTheme={setIsDarkTheme} />}
      {!modalContext.modalIsOpen && <Header />}
      <MailButton />
    </section>
  );
};

export default LandingPage;
