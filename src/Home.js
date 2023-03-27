import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";
import Nochfragen from "./components/Nochfragen";
import Person from "./components/Person";
import Faq from "./components/Faq";
import Videos from "./components/Videos";
import Schritte from "./components/Schritte";
import Wirleafren from "./components/Wirleafren";
import Consaltexteam from "./components/Consaltexteam";
import Besten from "./components/Besten";
import Mitconsaltex from "./components/Mitconsaltex";
import Kunden from "./components/Kunden";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
   useEffect(() => {
     AOS.init({
       once: true,
     });
   }, []);
  return (
    <>
      <Header />
      <Besten />
      <Mitconsaltex />
      <Kunden />
      <Consaltexteam />
      <Wirleafren />
      <Schritte />
      <Videos />
      <Faq />
      <Person />
      <Nochfragen />
      <Footer />
    </>
  );
};

export default Home;
