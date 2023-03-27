import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import btnarrow from "../asstes/images/png/btn-arrow.png";
import locationicon from "../asstes/images/svg/location.svg";
import mailicon from "../asstes/images/svg/mail.svg";
import Form from "react-bootstrap/Form";
import ringtestimonial from "../asstes/images/png/pink-cube-testimonial.png";
import cubepink from "../asstes/images/png/cube-pink-img.png";
import Nav from "./Nav";

const Kheader = () => {
  return (
    <section className="bg_header bg_theme mh_50 mh_xl_100 d-flex flex-column position-relative k_header_shadow header_shadow_right">
      <img
        className="position-absolute testimonialring_set d-none d-md-block ring_animation"
        src={ringtestimonial}
        alt="ringtestimonial"
      />
      <img
        className="position-absolute kheader_cube d-none d-md-block circle_gray_animation"
        src={cubepink}
        alt="cubepink"
      />
      {/* NAVBAR */}
      <Nav text="d-none" />
      <article className="flex-grow-1 d-flex align-items-center py-5 mb-md-5 position-relative z_index_2 ">
        {" "}
        <Container>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mb-0 common_para para ps-md-5 ms-md-4 text-center">
              <span className="ms-5 ps-1">Initiativbewerbung | Consaltex</span>
            </p>
            <h2 className="common_heading text-center">
              <strong>
                Werde ein Teil unserer
                <span className="d-block">Erfolgsgeschichte</span>
              </strong>
            </h2>
          </div>

          <Row className="justify-content-center mt-5 align-items-center py-lg-5">
            <Col md={5} lg={4}>
              <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <p className="common_para opacity_8 text-center text-md-start pb-md-5">
                  Wir suchen nach Menschen, die wissen, was sie wollen, wohin
                  sie wollen und die ein klares Warum haben.
                </p>
                <div className="d-flex align-items-center gap-3 mt-md-5 pt-md-5 justify-content-center justify-content-md-start ms-5 ms-md-0">
                  <img className="pt-4" src={locationicon} alt="locationicon" />
                  <p className="mb-0 common_para pt-4">
                    22143 Hamburg, Rahlstedter Bahnhofstraße
                    <span className="d-lg-block">27-29</span>{" "}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3 justify-content-center justify-content-md-start">
                  <img src={mailicon} alt="mailicon" />
                  <a href="mailto:info@consaltex.de">
                    <p className="mb-0 common_para">info@consaltex.de</p>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} className="mt-5 mt-md-0">
              <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="contentbox_bg p-4 p-lg-5 ms-lg-5">
                  {" "}
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="ff_montserrat fw_semibold fs_base clr_1">
                        Vor- und Nachname
                      </Form.Label>
                      <Form.Control type="text" className="form_box" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="ff_montserrat fw_semibold fs_base clr_1">
                        Email
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Passwordexample@mail.com "
                        className="form_box"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="ff_montserrat fw_semibold fs_base clr_1">
                        Erzähl uns von dir
                      </Form.Label>
                    </Form.Group>
                    <textarea
                      id="Erzähl uns von dir"
                      name="Erzähl uns von dir"
                      className="form_box1"
                    />
                    <div className="d-flex justify-content-center">
                      <button className="common_btn d-flex align-items-center gap-5 mt-3 mt-sm-4">
                        <p className="mb-0 ff_poiret fw_regular fs_base clr_1 ">
                          <strong>Absenden</strong>
                        </p>
                        <img src={btnarrow} alt="btnarrow" />
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default Kheader;
