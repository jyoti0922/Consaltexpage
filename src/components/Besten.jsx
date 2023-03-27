import React from "react";
import bestenlogo1 from "../asstes/images/png/besten-logo1.png";
import bestenlogo2 from "../asstes/images/png/besten-logo2.png";
import bestenlogo3 from "../asstes/images/png/besten-logo3.png";
import bestenlogo4 from "../asstes/images/png/besten-logo4.png";
import bestenlogo5 from "../asstes/images/png/besten-logo5.png";

const Besten = () => {
  return (
    <section className="bg_theme py-5 position-relative">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        <div className="pt-xl-5 mt-xl-5">
          <p className="mb-0 common_para para ps-md-5 ms-md-4 mt-5 text-center position-relative">
            <span className="ms-5 ps-1">Wir arbeiten mit den besten</span>{" "}
          </p>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
        {" "}
        <div className=" overflow-auto  position-relative z_index_2 ">
          <div className="d-flex align-items-center justify-content-between pt-5 width_1290 ms-auto  gap -5">
            <div>
              <img src={bestenlogo1} alt="bestenlogo1" />
            </div>
            <div>
              <img src={bestenlogo2} alt="bestenlogo2" />
            </div>
            <div>
              <img src={bestenlogo3} alt="bestenlogo3" />
            </div>
            <div>
              <img src={bestenlogo4} alt="bestenlogo4" />
            </div>
            <div>
              <img src={bestenlogo5} alt="bestenlogo5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Besten;
