import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import locationicon from "../asstes/images/svg/location.svg";
import mailicon from "../asstes/images/svg/mail.svg";
import arrowleft from "../asstes/images/png/arrow-left.png";
import arrowright from "../asstes/images/png/arrow-right.png";
import circle from "../asstes/images/png/nachfragen-circle.png";
import btnarrow from "../asstes/images/png/btn-arrow.png";

const Nochfragen = () => {
  return (
    <section className="bg_theme py-5 position-relative nochfragen_shadow">
      <img
        className="position-absolute nachfragen_circle_overflow d-none d-xl-block  circle_gray_animation"
        src={circle}
        alt="circle"
      />
      <Container>
        <Row className="mb-md-5 position-relative z_index_2">
          <Col md={6}>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="ps-3 ps-sm-5">
                <div className="d-flex">
                  {" "}
                  <p className=" common_para para mt-5">
                    <span className="ms-5 ps-1">Noch Fragen?</span>{" "}
                  </p>{" "}
                </div>
                <h2 className="common_heading">
                  <strong>Jetzt Erstgespräch vereinbaren</strong>
                </h2>
                <p className="common_para opacity_8 mb-4">
                  Fülle das Formular aus und ein Experte aus{" "}
                  <span className="d-lg-block">
                    unserem Team wird sich zum ausgewählten
                  </span>{" "}
                  Zeitfenster bei dir melden.
                </p>
                <div className="d-flex align-items-center gap-3 ">
                  <img className="pt-4" src={locationicon} alt="locationicon" />
                  <p className="mb-0 common_para border_top pt-4">
                    22143 Hamburg, Rahlstedter Bahnhofstraße
                    <span className="d-lg-block">27-29</span>{" "}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <img src={mailicon} alt="mailicon" />
                  <a href="mailto:info@consaltex.de">
                    <p className="mb-0 common_para">info@consaltex.de</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="calender_box pt-5 px-4 px-sm-5 pb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <img src={arrowleft} alt="arrowleft" />
                  <h2 className="ff_montserrat fw_semibold fs_base clr_1">
                    October
                  </h2>
                  <img src={arrowright} alt=" arrowright" />
                </div>
                <table className="w-100 my-4 d-flex justify-content-between">
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Sun
                    </th>
                    <td className="common_para opacity_3  table_data_hover2">
                      25
                    </td>
                    <td className="common_para table_data_hover2">02</td>
                    <td className="common_para table_data_hover2">09</td>
                    <td className="common_para table_data_hover2">16</td>
                    <td className="common_para table_data_hover2">23</td>
                    <td className="common_para table_data_hover2">30</td>
                  </tr>
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Mon
                    </th>
                    <td className="common_para opacity_3 table_data_hover ">
                      26
                    </td>
                    <td className="common_para table_data_hover">03</td>
                    <td className="common_para table_data_hover">10</td>
                    <td className="common_para table_data_hover">17</td>
                    <td className="common_para table_data_hover">24</td>
                    <td className="common_para table_data_hover">31</td>
                  </tr>
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Tue
                    </th>
                    <td className="common_para opacity_3 table_data_hover ">
                      27
                    </td>
                    <td className="common_para table_data_hover">04</td>
                    <td className="common_para table_data_hover">11</td>
                    <td className="common_para table_data_hover">18</td>
                    <td className="common_para table_data_hover">25</td>
                    <td className=" common_para opacity_3 table_data_hover">
                      01
                    </td>
                  </tr>
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Wed
                    </th>
                    <td className="common_para opacity_3 table_data_hover2">
                      28
                    </td>
                    <td className="common_para table_data_hover2">05</td>
                    <td className="common_para table_data_hover2">12</td>
                    <td className="common_para table_data_hover2">19</td>
                    <td className="common_para table_data_hover2">26</td>
                    <td className=" common_para opacity_3 table_data_hover2">
                      02
                    </td>
                  </tr>
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Thu
                    </th>
                    <td className="common_para opacity_3 table_data_hover2">
                      29
                    </td>
                    <td className="common_para table_data_hover2">06</td>
                    <td className="common_para table_data_hover2">13</td>
                    <td className="common_para table_data_hover2">20</td>
                    <td className="common_para table_data_hover2">27</td>
                    <td className=" common_para opacity_3 table_data_hover2">
                      03
                    </td>
                  </tr>
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Fri
                    </th>
                    <td className="common_para opacity_3 table_data_hover ">
                      30
                    </td>
                    <td className="common_para table_data_hover">07</td>
                    <td className="common_para table_data_hover">14</td>
                    <td className="common_para table_data_hover">21</td>
                    <td className="common_para table_data_hover">28</td>
                    <td className=" common_para opacity_3 table_data_hover">
                      04
                    </td>
                  </tr>
                  <tr className="d-flex flex-column align-items-center">
                    <th className="ff_montserrat fw_semibold fs_base clr_1">
                      Sat
                    </th>
                    <td className="common_para table_data_hover">01</td>
                    <td className="common_para table_data_hover">08</td>
                    <td className=" common_para table_data_hover">15</td>
                    <td className=" common_para table_data_hover">22</td>
                    <td className=" common_para table_data_hover">29</td>
                    <td className=" common_para opacity_3 table_data_hover">
                      05
                    </td>
                  </tr>
                </table>
                <h2 className="ff_montserrat fw_semibold fs_base clr_1 text-center  pb-3">
                  Timings
                </h2>
                <Row>
                  <Col sm={6}>
                    <button className="common_para timming_btn py-2">
                      1.00 PM-2.00 PM
                    </button>
                  </Col>
                  <Col sm={6}>
                    <button className="common_para timming_btn py-2 mt-3 mt-sm-0">
                      3.00 PM-4.00 PM
                    </button>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={6}>
                    <button className="common_para timming_btn py-2">
                      6.00 PM-8.00 PM
                    </button>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <button className="common_btn d-flex align-items-center gap-5  mt-5 mt-sm-4">
                    <p className="mb-0 ff_poiret fw_regular fs_base clr_1 ">
                      <strong>Submit</strong>
                    </p>
                    <img src={btnarrow} alt="btnarrow" />
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nochfragen;
