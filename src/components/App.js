import { useState, createContext } from "react";

import LandingPage from "./landingPage/LandingPage";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

export const ModalContext = createContext();

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      <ModalContext.Provider value={{ setModalIsOpen, modalIsOpen }}>
        {modalIsOpen && <Modal />}
        <LandingPage />
        <Projects />
        <Footer />
      </ModalContext.Provider>
    </div>
  );
};

export default App;
