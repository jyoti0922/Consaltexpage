import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import manimg from "../asstes/images/png/wirleafren-man-img.png";
import btnarrow from "../asstes/images/png/btn-arrow.png";

const Wirleafren = () => {
  return (
    <section className="bg_theme py-5 wirefragen_shadow ">
      <Container>
        <Row className="align-items-center z_index_2 position-relative">
          <Col md={6}>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h2 className="common_heading text-center text-md-start">
                <strong>Wir liefern Ergebnisse</strong>
              </h2>
              <p className="common_para opacity_8 pt-3 text-center text-md-start">
                Wir sind vielleicht nicht der größte Player in der Branche, aber
                auf dem Weg dorthin. Aber vor allem sind wir hungrig darauf,
                gemeinsam mit Unternehmern wie dir Erfolgsgeschichten zu
                schreiben.
              </p>
              <p className="common_para opacity_8 text-center text-md-start">
                Wenn andere aufgeben, werden wir erst richtig warm. Wir sind der
                Ansprechpartner für umkämpfte Märkte, komplizierte Kunden,
                erklärungsbedürftige Services und scheinbar aussichtslose Fälle.
                Wir sind das Spezialeinsatzkommando für Agenturen.
              </p>
              <p className="common_para opacity_8 text-center text-md-start">
                Unser Herz schlägt für den Underdog: David gegen Goliath -
                Marketing, Vertrieb, interne Prozesse: Unser Team gibt für dich
                110 Prozent - weil dein Erfolg unsere Motivation ist.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
                <button className="common_btn d-flex align-items-center gap-3  mt-4">
                  <p className="mb-0 ff_poiret fw_regular fs_base clr_1 ">
                    <strong>Jetzt Erstgespräch vereinbaren</strong>
                  </p>
                  <img src={btnarrow} alt="btnarrow" />
                </button>
              </div>
            </div>
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img className="w-100" src={manimg} alt="manimg" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Wirleafren;
