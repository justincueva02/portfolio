import NavBar from "./NavBar";
import Header from "./Header";
import MailButton from "./MailButton";

import "../../styles/landingPage/landingPage.css";

const LandingPage = ({ setModalIsOpen }) => {
  return (
    <section id="landing-page">
      <NavBar setModalIsOpen={setModalIsOpen} />
      <Header />
      <MailButton />
    </section>
  );
};

export default LandingPage;
