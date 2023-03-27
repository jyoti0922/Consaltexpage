import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ringtestimonial from "../asstes/images/png/pink-cube-testimonial.png";
import cardimg from "../asstes/images/png/slider-card-img.png";
import Nav from "./Nav";

const Kheader = () => {
  return (
    <section className=" bg_theme mh_50 mh_xl_100 d-flex flex-column position-relative header_shadow_left header_shadow_right">
      <img
        className="position-absolute kundenring_set d-none d-lg-block ring_animation"
        src={ringtestimonial}
        alt="ringtestimonial"
      />
      {/* NAVBAR */}
      <Nav text="d-none" />
      <article className="flex-grow-1 d-flex align-items-center py-5 position-relative z_index_2 ">
        {" "}
        <Container>
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Row>
              <Col>
                <div className="tkundenstimmen_card h-100">
                  <img
                    className="w-100 cursor_pointer"
                    src={cardimg}
                    alt="cardimg"
                  />
                  <p className="ff_montserrat fw_medium fs_base clr_1 opacity_8 p-4 mb-0">
                    Sit nec cras varius leo sit consectetur eros. Odio egestas
                    malesuada interdum scelerisque sed facilisis tincidunt arcu.
                    Ut scelerisque sodales senectus feugiat sem nec consequat.
                    Sed erat aliquet euismod sed pellentesque ut ornare integer
                    risus. Nam varius et scelerisque amet a suscipit felis. Amet
                    odio aliquam orci et et ac. Quam non neque condimentum
                    consequat augue odio malesuada. Est sit faucibus egestas
                    pretium ipsum elementum turpis ultrices lacus. Leo aliquam,
                    orci, in facilisis venenatis enim. Feugiat dictumst eget
                    amet eget. Molestie mollis risus porta a magna a.
                    Pellentesque at enim ultricies tortor enim.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </article>
    </section>
  );
};

export default Kheader;
