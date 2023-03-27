import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import teamimg1 from "../asstes/images/png/team-img1.png";
import teaming2 from "../asstes/images/png/team-img2.png";
import teaming3 from "../asstes/images/png/team-img3.png";
import linkdinicon from "../asstes/images/svg/team-linkdin-icon.svg";
import circlegray from "../asstes/images/png/circle-gary-overflow.png";

const Consaltexteam = () => {
  return (
    <section className="bg_theme py-5 position-relative video_shadow">
      <img
        className="position-absolute team_circle_overflow d-none d-lg-block circle_gray_animation"
        src={circlegray}
        alt="circlegray "
      />
      <Container>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="z_index_2 position-relative">
            <div className="d-flex justify-content-center">
              {" "}
              <p className=" common_para para  ms-md-4 mt-5  text-center">
                <span className="ms-5 ps-1">Consaltex</span>{" "}
              </p>{" "}
            </div>
            <h2 className="common_heading text-center mb-5 mb-sm-3">
              <strong>Unser Team</strong>
            </h2>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Carousel className="d-sm-none z_index_2 position-relative">
            <Carousel.Item>
              <div className="team_card h-100">
                <img className="w-100" src={teamimg1} alt="teamimg1" />
                <div className="d-flex justify-content-between pt-4  px-3">
                  <div className="d-flex flex-column">
                    <h2 className="ff_montserrat fw_semibold fs_medium clr_1">
                      Rene Jozic
                    </h2>
                    <p className="ff_montserrat fw_semibold fs_base clr_1 mb-0 mb-1">
                      Founder
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <img src={linkdinicon} alt="linkdinicon" />
                  </a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="team_card h-100 ">
                <img className="w-100" src={teaming2} alt="teaming2" />
                <div className="d-flex justify-content-between pt-4  px-3">
                  <div className="d-flex flex-column">
                    <h2 className="ff_montserrat fw_semibold fs_medium clr_1">
                      Selmei Nejahsie
                    </h2>
                    <p className="ff_montserrat fw_semibold fs_base clr_1 mb-0 mb-4">
                      Co-Founder
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <img src={linkdinicon} alt="linkdinicon" />
                  </a>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="team_card h-100">
                <img className="w-100" src={teaming3} alt="teaming3" />
                <div className="d-flex justify-content-between pt-4  px-3">
                  <div className="d-flex flex-column">
                    <h2 className="ff_montserrat fw_semibold fs_medium clr_1">
                      David Saberi
                    </h2>
                    <p className="ff_montserrat fw_semibold fs_base clr_1 mb-0 ">
                      Sales Manager
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <img src={linkdinicon} alt="linkdinicon" />
                  </a>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="py-0 py-md-5 justify-content-center d-none d-sm-flex z_index_2 position-relative">
            <Col sm="6" md="4" className="mt-5 mt-md-0">
              <div className="team_card h-100">
                <img className="w-100" src={teamimg1} alt="teamimg1" />
                <div className="d-flex justify-content-between pt-4  px-3">
                  <div className="d-flex flex-column">
                    <h2 className="ff_montserrat fw_semibold fs_medium clr_1">
                      Rene Jozic
                    </h2>
                    <p className="ff_montserrat fw_semibold fs_base clr_1 mb-0 mb-1">
                      Founder
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <img src={linkdinicon} alt="linkdinicon" />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm="6" md="4" className="mt-5 mt-md-0">
              <div className="team_card h-100 ">
                <img className="w-100" src={teaming2} alt="teaming2" />
                <div className="d-flex justify-content-between pt-4  px-3">
                  <div className="d-flex flex-column">
                    <h2 className="ff_montserrat fw_semibold fs_medium clr_1">
                      Selmei Nejahsie
                    </h2>
                    <p className="ff_montserrat fw_semibold fs_base clr_1 mb-3 mb-xl-0">
                      Co-Founder
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <img src={linkdinicon} alt="linkdinicon" />
                  </a>
                </div>
              </div>
            </Col>
            <Col sm="6" md="4" className="mt-5 mt-md-0">
              <div className="team_card h-100">
                <img className="w-100" src={teaming3} alt="teaming3" />
                <div className="d-flex justify-content-between pt-4  px-3">
                  <div className="d-flex flex-column">
                    <h2 className="ff_montserrat fw_semibold fs_medium clr_1">
                      David Saberi
                    </h2>
                    <p className="ff_montserrat fw_semibold fs_base clr_1 mb-3 mb-lg-0">
                      Sales Manager
                    </p>
                  </div>
                  <a href="https://www.linkedin.com/login" target="_blank">
                    <img src={linkdinicon} alt="linkdinicon" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Consaltexteam;
