import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import teercard from "../asstes/images/png/teer-card.png";
import btnarrow from "../asstes/images/png/btn-arrow.png";
import pinkcube from "../asstes/images/png/cube-pink-img.png";
import { ICON1, ICON2, ICON3, ICON4 } from "./Icon";

const Schritte = () => {
  return (
    <section className="bg_theme py-5 position-relative">
      <img
        className="position-absolute cube_position_set cube_xl_position_set d-none d-sm-block circle_gray_animation"
        src={pinkcube}
        alt="pinkcube"
      />
      <Container>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="d-flex justify-content-center">
            {" "}
            <p className=" common_para para  ms-md-4 mt-5  text-center">
              <span className="ms-5 ps-1">Die nächsten Schritte</span>{" "}
            </p>{" "}
          </div>
          <h2 className="common_heading text-center mb-4">
            <strong>So geht es für dich weiter! </strong>
          </h2>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Carousel className="d-sm-none position-relative z_index_3">
            <Carousel.Item>
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100 position-relative">
                <img
                  className="position-absolute teer_set d-none d-xl-block"
                  src={teercard}
                  alt="teercard"
                />
                <div className="img_bg_circle ">
                  <div className="schritte_icon">
                    <ICON1 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  1. Terminanfrage
                </h2>
                <p className="common_para opacity_8 text-center mb-0">
                  Vereinbare online deinen Termin und beantworte einige Fragen,
                  damit wir uns optimal auf dich vorbereiten können.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100 position-relative">
                <img
                  className="position-absolute teer_set d-none d-xl-block"
                  src={teercard}
                  alt="teercard"
                />
                <div className="img_bg_circle">
                  <div className="schritte_icon">
                    <ICON2 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  2. Erstgespräch
                </h2>
                <p className="common_para opacity_8 text-center mb-0">
                  Im Telefonat ermitteln wir die Hürden, die dich von deinen
                  Wunschumsätzen fernhalten.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100 position-relative">
                <img
                  className="position-absolute teer_set d-none d-xl-block"
                  src={teercard}
                  alt="teercard"
                />
                <div className="img_bg_circle">
                  <div className="schritte_icon">
                    <ICON3 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  3. Strategieberatung
                </h2>
                <p className="common_para opacity_8 text-center mb-0">
                  Ein ausgewählter Strategieberater entwickelt in 60 Minuten mit
                  dir einen individuellen Plan, um deinen Markt erobern zu
                  können.
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100">
                <div className="img_bg_circle">
                  <div className="schritte_icon">
                    <ICON4 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  4. Die Zusammenarbeit
                </h2>
                <p className="common_para opacity_8 text-center mb-0 ">
                  Nach der Beratung zünden wir den Vertriebsturbo und die
                  Schlacht beginnt. Wir arbeiten mit dir 1:1 um dir die
                  bestmögliche Betreuung zu bieten.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="py-5 justify-content-center d-none d-sm-flex position-relative z_index_2">
            <Col sm={6} lg={4} xl={3}>
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100 position-relative">
                <img
                  className="position-absolute teer_set d-none d-xl-block z_index_3"
                  src={teercard}
                  alt="teercard"
                />
                <div className="img_bg_circle ">
                  <div className="schritte_icon">
                    <ICON1 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  1. Terminanfrage
                </h2>
                <p className="common_para opacity_8 text-center mb-0">
                  Vereinbare online deinen Termin und beantworte einige Fragen,
                  damit wir uns optimal auf dich vorbereiten können.
                </p>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3} className="mt-5 mt-sm-0">
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100 position-relative">
                <img
                  className="position-absolute teer_set d-none d-xl-block z_index_3"
                  src={teercard}
                  alt="teercard"
                />
                <div className="img_bg_circle">
                  <div className="schritte_icon">
                    <ICON2 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  2. Erstgespräch
                </h2>
                <p className="common_para opacity_8 text-center mb-0">
                  Im Telefonat ermitteln wir die Hürden, die dich von deinen
                  Wunschumsätzen fernhalten.
                </p>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3} className="mt-5 mt-lg-0">
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100 position-relative">
                <img
                  className="position-absolute teer_set d-none d-xl-block z_index_3"
                  src={teercard}
                  alt="teercard"
                />
                <div className="img_bg_circle">
                  <div className="schritte_icon">
                    <ICON3 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  3. Strategieberatung
                </h2>
                <p className="common_para opacity_8 text-center mb-0">
                  Ein ausgewählter Strategieberater entwickelt in 60 Minuten mit
                  dir einen individuellen Plan, um deinen Markt erobern zu
                  können.
                </p>
              </div>
            </Col>
            <Col sm={6} lg={4} xl={3} className="mt-5 mt-xl-0">
              <div className="schritte_card d-flex flex-column align-items-center p-3 p-lg-4 h-100">
                <div className="img_bg_circle">
                  <div className="schritte_icon">
                    <ICON4 />
                  </div>
                </div>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1  pt-4 schritte_heading">
                  4. Die Zusammenarbeit
                </h2>
                <p className="common_para opacity_8 text-center mb-0 ">
                  Nach der Beratung zünden wir den Vertriebsturbo und die
                  Schlacht beginnt. Wir arbeiten mit dir 1:1 um dir die
                  bestmögliche Betreuung zu bieten.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center position-relative z_index_2">
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <button className="common_btn d-flex align-items-center gap-3 mt-5 mt-sm-4">
              <p className="mb-0 ff_poiret fw_regular fs_base clr_1 ">
                <strong>Jetzt Erstgespräch vereinbaren</strong>
              </p>
              <img src={btnarrow} alt="btnarrow" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Schritte;
