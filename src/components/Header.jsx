import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import btnarrow from "../asstes/images/png/btn-arrow.png";
import headerzunde from "../asstes/images/png/header-zunde.png";
import cubepink from "../asstes/images/png/cube-pink-img.png";
import cubegray from "../asstes/images/png/cube-gray-img.png";
import ringpink from "../asstes/images/png/header-ring-pink.png";
import circlegray from "../asstes/images/png/circle-gary-overflow.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <section className="bg_header bg_theme mh_50 mh_xl_100 d-flex flex-column position-relative header_shadow_left header_shadow_right">
      <img
        className="position-absolute headercube_pink_set d-none d-lg-flex cubepink_width circle_gray_animation "
        src={cubepink}
        alt="cubepink"
      />
      <img
        className="position-absolute header_circlegray circle_gray_animation d-none d-lg-block"
        src={circlegray}
        alt="circlegray"
      />
      <img
        className="position-absolute position_cubegray d-none  d-lg-flex z_index_2 circle_gray_animation "
        src={cubegray}
        alt="cubegray"
      />
      {/* NAVBAR */}
      <Nav />
      <article className="flex-grow-1 d-flex align-items-center mt-5 position-relative z_index_2">
        //{" "}
        <Container>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-delay="1000"
          >
            <div className="d-flex justify-content-center justify-content-md-start">
              <p className="mb-0 common_para para ps-lg-5 ms-lg-5">
                <span className="ms-5 ps-1">
                  Wie Testosteron für deine Agentur
                </span>
              </p>
            </div>
            <h2 className="fw_regular ff_poiret_one fs_xl clr_1 text-center mt-2">
              <strong>
                Wir verhelfen{" "}
                <span className="text_bg  px-3 pb-2">Agenturen</span>
                <span className="d-lg-block mt_negative">
                  zu Rekordumsätzen
                </span>
              </strong>
            </h2>
          </div>
          <Row className=" align-items-center mt-xl-5">
            <Col md={7}>
              <img
                className="w_100 w_xl_45 w_xxl_40 w_4xl_36 position_xl_absolute headerzunde_set headerzunde_width"
                src={headerzunde}
                alt="headerzunde"
              />
            </Col>
            <Col md={5}>
              <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-delay="1000"
              >
                <div className="pt-xl-5">
                  <p className="common_para mb-0 mx-auto mx-md-0 text-center text-md-start">
                    Zünde die Wachstumsrakete und
                    <span className="d-lg-block">
                      {" "}
                      katapultiere deinen Umsatz in eine neue
                    </span>{" "}
                    Dimension!
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <button className="common_btn d-flex align-items-center gap-3  mt-4">
                      <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                        <strong>Sprich jetzt mit unserem Team</strong>
                      </p>
                      <img src={btnarrow} alt="btnarrow" />
                    </button>
                  </div>
                  <div className="mt-lg-5 pt-lg-5 text-center text-md-start ms-md-5 mt-3">
                    <img
                      className="mt-md-5 pt-lg-5 ring_animation "
                      src={ringpink}
                      alt="ringpink"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Header;
