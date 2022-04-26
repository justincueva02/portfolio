import { useState } from "react";

import LandingPage from "./landingPage/LandingPage";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
      <LandingPage setModalIsOpen={setModalIsOpen} />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
