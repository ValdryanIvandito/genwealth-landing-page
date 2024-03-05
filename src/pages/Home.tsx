import CallToAction from "../components/CallToAction";
import ContactUs from "../components/ContactUs";
import ContainerImgTxt from "../components/ContainerImgTxt";
import ContainerTxtImg from "../components/ContainerTxtImg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import TeamMembers from "../components/TeamMembers";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />

      {/* About our Service */}

      <ContainerImgTxt />
      <ContainerTxtImg />

      {/* Testimonials / Partnerships / Sponsors */}

      <TeamMembers />
      <ContactUs />

      <CallToAction />
      <Footer />
    </div>
  );
}

export default Home;
