import { useState, createContext } from "react";

import LandingPage from "./landingPage/LandingPage";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";
import "../styles/responsive.css";

export const ModalContext = createContext();

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${isDarkTheme ? "dark-theme" : ""}`}>
      <ModalContext.Provider value={{ setModalIsOpen, modalIsOpen }}>
        {modalIsOpen && <Modal />}
        <LandingPage setIsDarkTheme={setIsDarkTheme} />
        <Projects />
        <Footer />
      </ModalContext.Provider>
    </div>
  );
};

export default App;
