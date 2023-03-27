import React from "react";
import { Container } from "react-bootstrap";
import personimg from "../asstes/images/png/person-img.png";
import circlegray from "../asstes/images/png/circle-gary-overflow.png";

const Person = () => {
  return (
    <section className="bg_theme py-5 position-relative wirefragen_shadow">
      <img
        className="position-absolute person_overflow_set d-none d-lg-block circle_gray_animation"
        src={circlegray}
        alt="circlegray"
      />
      <Container>
        <div className="d-flex justify-content-center z_index_2 position-relative">
          <img className="w-100 image_md_wh" src={personimg} alt="personimg" />
        </div>
      </Container>
    </section>
  );
};

export default Person;
