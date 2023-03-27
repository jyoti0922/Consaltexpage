import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import videoimg1 from "../asstes/images/png/video-img1.png";
import videoimg2 from "../asstes/images/png/video-img2.png";
import videoimg3 from "../asstes/images/png/video-img3.png";
import btnarrow from "../asstes/images/png/btn-arrow.png";

const Videos = () => {
  return (
    <section className="bg_theme py-5 video_shadow">
      <Container>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="position-relative z_index_2">
            <div className="d-flex justify-content-center">
              {" "}
              <p className=" common_para para  ms-md-4 mt-5  text-center">
                <span className="ms-5 ps-1">Videos</span>{" "}
              </p>{" "}
            </div>
            <h2 className="common_heading text-center mb-4">
              <strong>Aktuelle Themen</strong>
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Carousel className="d-sm-none position-relative z_index_2">
            <Carousel.Item>
              <div className="videos_box h-100 d-flex flex-column justify-content-center">
                <div className="">
                  <img className="w-100" src={videoimg1} alt="videoimg1" />
                  <p className="common_para opacity_8 mb-0 px-4 pt-3">
                    <i>Oct.05, 2022</i>
                  </p>
                  <p className="ff_montserrat fw_semibold fs_md clr_1 px-4">
                    Wie du mit Leichtigkeit Neukunden für dein Hochpreis-Angebot
                    gewinnst
                  </p>
                </div>
                <div className=" mb-3">
                  <button className="ff_montserrat fw_semibold fs_md clr_3 bg-transparent border-0 px-4">
                    Zum Video
                  </button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="videos_box h-100 d-flex flex-column justify-content-between">
                <div className="">
                  <img className="w-100" src={videoimg2} alt="videoimg2" />
                  <p className="common_para opacity_8 mb-0 px-4 pt-3">
                    <i>Oct.05, 2022</i>
                  </p>
                  <p className="ff_montserrat fw_semibold fs_md clr_1 px-4">
                    Massiven Output durch deinen ersten Vertriebler
                  </p>
                </div>
                <div className=" mb-3">
                  <button className="ff_montserrat fw_semibold fs_md clr_3 bg-transparent border-0 px-4">
                    Zum Video
                  </button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="videos_box h-100 d-flex flex-column justify-content-between">
                <div className="">
                  <img className="w-100" src={videoimg3} alt="videoimg3" />
                  <p className="common_para opacity_8 mb-0 px-4 pt-3">
                    <i>Oct.12, 2022</i>
                  </p>
                  <p className="ff_montserrat fw_semibold fs_md clr_1 px-4">
                    Wieso du als Agenturinhaber UNBEDINGT einheitliche Pakete
                    haben solltest!
                  </p>
                </div>
                <div className=" mb-3">
                  <button className="ff_montserrat fw_semibold fs_md clr_3 bg-transparent border-0 px-4">
                    Zum Video
                  </button>
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
          <Row className="py-md-5 justify-content-center d-none d-sm-flex z_index_2 position-relative">
            <Col sm="6" md="4" className="mt-5 mt-md-0">
              <div className="videos_box h-100 d-flex flex-column justify-content-center">
                <div className="d-flex flex-column">
                  <img className="w-100" src={videoimg1} alt="videoimg1" />
                  <p className="common_para opacity_8 mb-0 px-4 pt-3">
                    <i>Oct.05, 2022</i>
                  </p>
                  <p className="ff_montserrat fw_semibold fs_md clr_1 px-4">
                    Wie du mit Leichtigkeit Neukunden für dein Hochpreis-Angebot
                    gewinnst
                  </p>
                </div>
                <div className=" mb-3">
                  <p className="ff_montserrat fw_semibold fs_md clr_3 bg-transparent border-0 px-4 mb-0">
                    Zum Video
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" md="4" className="mt-5 mt-md-0">
              <div className="videos_box h-100 d-flex flex-column justify-content-between">
                <div className="d-flex flex-column">
                  <img className="w-100" src={videoimg2} alt="videoimg2" />
                  <p className="common_para opacity_8 mb-0 px-4 pt-3">
                    <i>Oct.05, 2022</i>
                  </p>
                  <p className="ff_montserrat fw_semibold fs_md clr_1 px-4">
                    Massiven Output durch deinen ersten Vertriebler
                  </p>
                </div>
                <div className=" mb-3">
                  <p className="ff_montserrat fw_semibold fs_md clr_3 bg-transparent border-0 px-4 mb-0">
                    Zum Video
                  </p>
                </div>
              </div>
            </Col>
            <Col sm="6" md="4" className="mt-5 mt-md-0">
              <div className="videos_box h-100 d-flex flex-column justify-content-between">
                <div className=" d-flex flex-column">
                  <img className="w-100" src={videoimg3} alt="videoimg3" />
                  <p className="common_para opacity_8 mb-0 px-4 pt-3">
                    <i>Oct.12, 2022</i>
                  </p>
                  <p className="ff_montserrat fw_semibold fs_md clr_1 px-4">
                    Wieso du als Agenturinhaber UNBEDINGT einheitliche Pakete
                    haben solltest!
                  </p>
                </div>
                <div className=" mb-3">
                  <p className="ff_montserrat fw_semibold fs_md clr_3 bg-transparent border-0 px-4 mb-0">
                    Zum Video
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center">
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <button className="common_btn d-flex align-items-center gap-3  mt-5 mt-sm-4">
              <p className="mb-0 ff_poiret fw_regular fs_base clr_1 ">
                <strong>Mehr ansehen</strong>
              </p>
              <img src={btnarrow} alt="btnarrow" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Videos;
