import "./App.css";
import { Route, Routes } from "react-router-dom";
import Testimonials from "./Testimonials";
import Hiring from "./Hiring";
import Home from "./Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/Backtotop";
function App() {
  return (
    <>
      {" "}
      <Preloader />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Testimonial" element={<Testimonials />} />
        <Route path="/Hiring" element={<Hiring />} />
      </Routes>
    </>
  );
}

export default App;
