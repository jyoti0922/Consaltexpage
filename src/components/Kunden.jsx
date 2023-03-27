import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import btnarrow from "../asstes/images/png/btn-arrow.png";
import btnleft from "../asstes/images/png/btn-left.png";
import btnright from "../asstes/images/png/btn-right.png";
import ringimg from "../asstes/images/png/slider-ring.png";
import cardimg from "../asstes/images/png/slider-card-img.png";
export default function SimpleSlider() {
  const my_slider = useRef();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-md-5 bg_theme overflow-hidden position-relative">
      <img
        className="ring_position ring_animation1 position-absolute d-none d-lg-flex "
        src={ringimg}
        alt="ringimg"
      />
      <Container>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="pt-5 pb-md-5 my-md-5 position-relative z_index_2">
            <Col md={8}>
              <Slider ref={my_slider} {...settings}>
                <div className="col-6 pe-sm-4">
                  <div className="slider_cards h-100 ">
                    <img
                      className="w-100 cursor_pointer"
                      src={cardimg}
                      alt="cardimg"
                    />
                    <p className="common_para mb-0 p-3 opacity_08">
                      Die Metarec GmbH unterstützt unter der Leitung des
                      Geschäftsführers Christian Schmitt kleine- und
                      Mittelständische Unternehmen beim Gewinnen von
                      qualifizierten Fachkräfte zur beseitigung des
                      Fachkräftemangels
                    </p>
                  </div>
                </div>
                <div className="col-6 pe-sm-4">
                  <div className="slider_cards h-100 ">
                    <img
                      className="w-100 cursor_pointer"
                      src={cardimg}
                      alt="cardimg"
                    />
                    <p className="common_para mb-0 p-3 opacity_08">
                      Die Metarec GmbH unterstützt unter der Leitung des
                      Geschäftsführers Christian Schmitt kleine- und
                      Mittelständische Unternehmen beim Gewinnen von
                      qualifizierten Fachkräfte zur beseitigung des
                      Fachkräftemangels
                    </p>
                  </div>
                </div>{" "}
                <div className="pe-sm-4">
                  <div className="slider_cards h-100 ">
                    <img
                      className="w-100 cursor_pointer"
                      src={cardimg}
                      alt="cardimg"
                    />
                    <p className="common_para mb-0 p-3 opacity_08">
                      Die Metarec GmbH unterstützt unter der Leitung des
                      Geschäftsführers Christian Schmitt kleine- und
                      Mittelständische Unternehmen beim Gewinnen von
                      qualifizierten Fachkräfte zur beseitigung des
                      Fachkräftemangels
                    </p>
                  </div>
                </div>
              </Slider>
            </Col>
            <Col md={4}>
              <div className="text-center text-md-start mt-5 mt-md-0 pt-4 pt-md-0 position-relative z_index_2">
                <p className="mb-0 common_para para">
                  <span className="ms-5 ps-1">Das sagen unsere Kunden</span>
                </p>
                <h2 className="common_heading">
                  <strong>Testimonials</strong>
                </h2>
                <p className="mb-0 common_para opacity_08 mt-3">
                  Unsere Kunden berichten über die Zusammenarbeit
                </p>
                <article className="d-flex justify-content-center justify-content-md-start">
                  <button className="common_btn d-flex align-items-center gap-3  mt-4">
                    <p className="mb-0 ff_poiret fw_regular fs_base text_primary ">
                      <strong>Mehr ansehen</strong>
                    </p>
                    <img src={btnarrow} alt=" btnarrow" />
                  </button>
                </article>
                <div className="d-flex  align-items-center  py-4 pt-md-5 mt-md-5 gap-3 justify-content-center justify-content-md-start">
                  <div
                    onClick={() => my_slider.current.slickPrev()}
                    className="slider_btn_bg "
                  >
                    <img src={btnleft} alt="btnleft" />
                  </div>
                  <div
                    onClick={() => my_slider.current.slickNext()}
                    className="slider_btn_bg "
                  >
                    <img src={btnright} alt="btnright" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
