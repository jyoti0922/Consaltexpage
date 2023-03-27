import React, { useEffect, useState } from "react";
import arrowup from "../asstes/images/svg/top-to-bottom.svg";
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <>
      {isVisible && (
        <div
          style={{ zIndex: "99" }}
          onClick={scrollToTop}
          className="scroll-to-top position-fixed
          btn_set mb-2 z_index_2"
        >
          <a className="text-success z-10 px-3 py-3 arrowbtn_bg" href="#">
            <img src={arrowup} alt="arrowup" />
          </a>
        </div>
      )}
    </>
  );
}
export default ScrollToTop;
