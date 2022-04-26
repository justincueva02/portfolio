import NavBar from "./NavBar";
import Header from "./Header";
import MailButton from "./MailButton";

import "../../styles/landingPage/landingPage.css";

const LandingPage = () => {
  return (
    <section id="landing-page">
      <NavBar />
      <Header />
      <MailButton />
    </section>
  );
};

export default LandingPage;
