import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../asstes/images/png/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg_footer position-relative">
      <Container>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="py-5 align-items-center">
            <Col sm={3} md={2}>
              <ul className="ps-0 mb-0 d-flex flex-column align-items-center align-items-sm-start">
                <li>
                  <Link
                    to="/"
                    className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                  >
                    HOME
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/testimonial"
                    className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                  >
                    Kundenrezensionen
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/Hiring"
                    className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                  >
                    We´re hiring!
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm={8}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img className="logo_75 logo_md_100" src={logo} alt="logo" />
                <p className="common_para opacity_8 text-center mt-4 mt-sm-2 mb-0">
                  Der Sparringspartner für die Skalierung
                  <span className="d-lg-block">deines Unternehmens.</span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="line_create position-absolite mt-md-3"></div>
      <p
        className="common_para opacity_8 text-center mb-0 py-4
          "
      >
        Impressum | Datenschutz | AGBS
      </p>
    </section>
  );
};

export default Footer;
