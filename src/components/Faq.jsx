import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import cubegreen from "../asstes/images/png/cube-green-img.png";
import ringpink from "../asstes/images/png/ring-pink-img.png";
const Faq = () => {
  return (
    <section className="bg_theme py-5 position-relative ">
      <img
        className=" position-absolute cubegreen_set d-none d-md-block circle_gray_animation"
        src={cubegreen}
        alt="cubegreen"
      />
      <img
        className="position-absolute ringpink_set d-none d-md-block circle_gray_animation"
        src={ringpink}
        alt="ringpink"
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
              <span className="ms-5 ps-1">Du hast noch Fragen?</span>{" "}
            </p>{" "}
          </div>
          <h2 className="common_heading text-center mb-0 mb-md-3">
            <strong>
              Häufig gestellte <span className="d-lg-block">Fragen</span>
            </strong>
          </h2>
        </div>
        <Row className="justify-content-center position-relative z_index_2">
          <Col sm="8">
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Accordion defaultActiveKey="0" className="pt-5">
                <Accordion.Item eventKey="0" className="bg-transparent">
                  <Accordion.Header className="bg-transparent">
                    Was unterscheidet euch von anderen Agenturen?
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_7">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mt-3 bg-transparent">
                  <Accordion.Header className="bg-transparent">
                    Brauche ich eure Hilfe?
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_7">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mt-3 bg-transparent">
                  <Accordion.Header className="bg-transparent">
                    Wie könnt ihr mir helfen?
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_7">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mt-3 bg-transparent">
                  <Accordion.Header className="bg-transparent">
                    Kann man im Internet noch neue Kunden gewinnen?
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_7">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mt-3 bg-transparent">
                  <Accordion.Header className="bg-transparent">
                    Gibt es eine eins-zu-eins Betreuung?
                  </Accordion.Header>
                  <Accordion.Body className="common_para opacity_7">
                    Consaltex ist keine Agentur, sondern eine ganzheitliche
                    Unternehmensberatung. Wir helfen dir nicht nur im Marketing,
                    im Vertrieb oder in der Kundenbetreuung, sondern betrachten
                    die Geschäftsprozesse in ihrem Zusammenhang und optimieren
                    sie von Grund auf. Das bedeutet: Wir verstehen uns als
                    Partner, nicht als Dienstleister und laufen nicht nur die
                    extra Meile, sondern wenn nötig einen ganzen Marathon, damit
                    dein Unternehmen zu einer echten Umsatzmaschine wird!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
