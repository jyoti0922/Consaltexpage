import React from "react";
import { Container, Row } from "react-bootstrap";
import cimage from "../asstes/images/png/mitconsaltex-c-img.png";
import {
  Erhohen,
  Flower,
  Gewinnen,
  LOCATIONICON,
  Prozesse,
  Skelieren,
} from "./Icon";
import cubegray from "../asstes/images/png/cube-gray-img.png";

const Mitconsaltex = () => {
  return (
    <section className="bg_theme py-5 position-relative mitconsaltex_shadow">
      <img
        className="position-absolute mitconsaltex_graycube d-none  d-lg-flex circle_gray_animation"
        src={cubegray}
        alt="cubegray"
      />
      <Container>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="d-flex justify-content-center position-relative z_index_2">
            {" "}
            <p className=" common_para para  ms-md-4 mt-sm-5  text-center">
              <span className="ms-5 ps-1">Zusammenarbeit mit Consaltex</span>{" "}
            </p>{" "}
          </div>
          <h2 className="common_heading text-center">
            <strong>
              In 6 Schritten von der Agentur{" "}
              <span className="d-lg-block">zur Umsatzmaschine</span>
            </strong>{" "}
          </h2>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="d-lg-none align-items-center mt-5 position-relative z_index_2">
            <div className=" col-12 col-sm-4">
              <div className="d-flex justify-content-center justify-content-sm-start mitconsaltex_icon">
                <div className="icon_bg">
                  <LOCATIONICON />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 mt-3 mt-sm-0">
              <h2 className="ff_montserrat fw_semibold fs_md clr_4 text-center text-sm-start">
                Positionierung
              </h2>
              <p className="common_para opacity_8 text-center text-sm-start">
                Finde die optimale Zielgruppe für dein Angebot, bei der du als
                Experte höhere Preise abrufen kannst!
              </p>
            </div>
          </Row>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="d-lg-none align-items-center mt-3 position-relative z_index_2">
            <div className="col-12 col-sm-4">
              <div className="d-flex justify-content-center justify-content-sm-start mitconsaltex_icon">
                <div className="icon_bg">
                  <Gewinnen />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 mt-3 mt-sm-0">
              <h2 className="ff_montserrat fw_semibold fs_md clr_4 text-center text-sm-start">
                Neukunden gewinnen
              </h2>
              <p className="common_para opacity_8 text-center text-sm-start">
                Gewinne verlässlich und berechenbar Neukunden, während du dich
                auf dein Tagesgeschäft konzentrieren kannst!
              </p>
            </div>
          </Row>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="d-lg-none align-items-center mt-3 position-relative z_index_2">
            <div className="col-12 col-sm-4">
              <div className="d-flex justify-content-center justify-content-sm-start mitconsaltex_icon">
                <div className="icon_bg">
                  <Erhohen />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 mt-3 mt-sm-0">
              <h2 className="ff_montserrat fw_semibold fs_md clr_4 text-center text-sm-start">
                Gewinnmarge erhöhen
              </h2>
              <p className="common_para opacity_8 text-center text-sm-start">
                Reduziere deinen Verwaltungsaufwand, straffe interne Abläufe und
                erziele Rekordumsätze mit deinen Wunschkunden!
              </p>
            </div>
          </Row>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="d-lg-none align-items-center mt-3 position-relative z_index_2">
            <div className="col-12 col-sm-4">
              <div className="d-flex justify-content-center justify-content-sm-start mitconsaltex_icon">
                <div className="icon_bg">
                  <Skelieren />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 mt-3 mt-sm-0">
              <h2 className="ff_montserrat fw_semibold fs_md clr_4 text-center text-sm-start">
                Vertrieb skalieren
              </h2>
              <p className="common_para opacity_8 text-center text-sm-start">
                Wir bauen gemeinsam mit dir ein Vertriebsteam auf, welches sich
                ab Tag 1 rentiert, sodass der Umsatzturbo aktiviert wird und
                deine Einnahmen sich vervielfachen!
              </p>
            </div>
          </Row>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="d-lg-none align-items-center mt-3 position-relative z_index_2">
            <div className="col-12 col-sm-4">
              <div className="d-flex justify-content-center justify-content-sm-start mitconsaltex_icon">
                <div className="icon_bg">
                  <Prozesse />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 mt-3 mt-sm-0">
              <h2 className="ff_montserrat fw_semibold fs_md clr_4 text-center text-sm-start">
                Prozesse automatisieren
              </h2>
              <p className="common_para opacity_8 text-center text-sm-start">
                Sorge für glückliche Kunden und zufriedene Mitarbeiter durch
                eine agile Kultur mit digitalen Prozessen!
              </p>
            </div>
          </Row>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Row className="d-lg-none align-items-center mt-3 position-relative z_index_2">
            <div className="col-12 col-sm-4">
              <div className="d-flex justify-content-center justify-content-sm-start mitconsaltex_icon">
                <div className="icon_bg">
                  <Flower />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-8 mt-3 mt-sm-0">
              <h2 className="ff_montserrat fw_semibold fs_md clr_4 text-center text-sm-start">
                Team aufbauen
              </h2>
              <p className="common_para opacity_8 text-center text-sm-start">
                Baue dein A-Team aus Top-Talenten, die zukünftiges Wachstum
                schultern und Umsatzrekorde mit dir brechen!
              </p>
            </div>
          </Row>
        </div>
        <Row className="position-relative  d-none d-lg-flex pt-5 mt-5 z_index_2">
          <img
            className="position-absolute cimage "
            src={cimage}
            alt="cimage"
          />

          <div className="col-4 text-end ps-5 mb-4 mb-xl-5 position-relative mitconsaltex_card transition_03s cursor_pointer">
            <div className="rounded-circle location position-absolute">
              <svg
                width="45"
                height="60"
                viewBox="0 0 45 60"
                fill="none"
                xmlns="http:www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.0152 0.2862C6.64832 1.80924 -2.66046 15.4751 1.39319 27.6245C2.97701 32.3711 5.5269 35.968 14.693 46.3848C17.7202 49.8252 19.7201 52.2609 21.0606 54.1397C22.0238 55.4899 22.3017 55.6975 22.7513 55.4029C23.0695 55.1944 23.1632 55.0802 24.6354 53.1058C26.0343 51.2297 27.6118 49.3503 31.6994 44.69C41.4183 33.6095 44.1677 28.8677 44.4072 22.7736C44.9264 9.56505 33.2286 -1.21942 20.0152 0.2862ZM24.7472 10.8679C28.9588 11.6659 32.2943 14.8775 33.5309 19.3255C33.8561 20.4949 33.8262 23.6076 33.4776 24.8776C31.7515 31.1677 25.2123 34.7528 19.0244 32.802C15.3503 31.6436 12.4987 28.6556 11.462 24.8776C11.1134 23.6076 11.0835 20.4949 11.4087 19.3255C13.1185 13.1756 18.5962 9.70239 24.7472 10.8679ZM14.6968 50.5439C9.61059 52.2624 8.83072 55.904 13.0784 58.101C18.8447 61.0835 29.9727 60.435 33.526 56.9095C35.83 54.6235 34.3608 51.933 30.0114 50.473L29.0818 50.1609L28.8441 50.4437C27.8264 51.6547 25.6737 54.393 25.1126 55.1902C24.0181 56.7455 22.9536 57.3515 21.8182 57.0656C21.1603 56.9 20.7607 56.5177 19.8152 55.1497C19.4159 54.5721 18.8108 53.7512 18.4705 53.3256C17.4936 52.1039 15.8714 50.195 15.8072 50.1916C15.7751 50.1899 15.2754 50.3485 14.6968 50.5439Z"
                  fill="#FCFFFE"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4 className=" ff_montserrat fw_semibold fs_md clr_4  mb-1  me-4">
                Positionierung
              </h4>
              <p className=" mb-0 me-4 ms-xl-3 ps-xl-3 opacity_8 common_para">
                Finde die optimale Zielgruppe für dein Angebot, bei der du als
                Experte höhere Preise abrufen kannst!
              </p>
            </div>
          </div>
          <div className="col-8"></div>
          <div className="col-4 text-end pe-5 mb-4 mb-xl-5 position-relative mitconsaltex_card add_transition cursor_pointer">
            <div className="rounded-circle gewinnen_icon position-absolute p-xl-4">
              <svg
                width="58"
                height="55"
                viewBox="0 0 58 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M46.0427 3.31978C39.6569 4.66338 34.4094 5.78333 34.3816 5.80866C34.3537 5.8341 35.8662 7.39058 37.7426 9.26771L41.1541 12.6805L37.7141 16.1192C35.8221 18.0104 34.2977 19.5814 34.3265 19.6103C34.3554 19.6391 39.5776 18.5914 45.9315 17.282L57.4842 14.9013L54.038 11.4533L50.5918 8.00522L54.1525 4.46517C56.111 2.51815 57.6998 0.914231 57.6833 0.90112C57.6668 0.887899 52.4285 1.97629 46.0427 3.31978ZM20.2379 4.48572L16.7109 8.01389L21.4057 12.7077L26.1003 17.4013L29.6546 13.8458L33.2089 10.2903L28.5434 5.62389C25.9776 3.05746 23.8526 0.957562 23.8215 0.957562C23.7902 0.957562 22.1776 2.54526 20.2379 4.48572ZM10.1427 14.5958C7.84778 16.9026 5.74366 19.09 5.46712 19.4567C0.404701 26.1666 -0.477701 34.8295 3.14701 42.2333C8.37431 52.9104 21.183 57.3859 31.9083 52.2827C34.884 50.8669 35.9715 49.9888 41.0426 44.9072L44.9864 40.9552L40.2969 36.2656L35.6074 31.5762L31.7422 35.4103C28.744 38.3844 27.6899 39.3601 27.0436 39.7601C23.6763 41.8439 19.4286 41.3456 16.6938 38.5458C15.0142 36.8266 14.3166 35.0951 14.3292 32.6782C14.3446 29.7789 14.9386 28.6772 18.3379 25.2436C19.6135 23.9551 21.3555 22.1874 22.2088 21.3153L23.7603 19.7298L19.0972 15.0657C16.5325 12.5004 14.4074 10.4015 14.3748 10.4015C14.3421 10.4015 12.4377 12.2889 10.1427 14.5958ZM41.459 25.7069L37.9321 29.2351L42.6269 33.9288L47.3215 38.6225L50.8758 35.067L54.4301 31.5115L49.7646 26.8451C47.1988 24.2786 45.0738 22.1788 45.0426 22.1788C45.0114 22.1788 43.3988 23.7665 41.459 25.7069Z"
                  fill="#FCFFFE"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4 className="ff_montserrat fw_semibold fs_md clr_4  mb-1  me-5 pe-xl-3">
                Neukunden gewinnen
              </h4>
              <p className="common_para mb-0 me-5 pe-xl-3 opacity_8">
                Gewinne verlässlich und berechenbar Neukunden, während du dich
                auf dein Tagesgeschäft konzentrieren kannst!
              </p>
            </div>
          </div>
          <div className="col-8"></div>
          <div className="col-4 text-end pe-5 mb-4 mb-xl-5 position-relative mitconsaltex_card transition_03s cursor_pointer">
            <div className="rounded-circle erhohen_icon position-absolute">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.5099 0.834623C37.1501 1.21773 37.2378 1.50818 38.2336 3.23158C38.7498 4.12495 39.1721 4.89631 39.1721 4.9459C39.1721 4.9954 30.5589 10.8229 20.0314 17.8958C9.50406 24.9686 0.812941 30.8453 0.717806 30.955C0.3343 31.3971 0.699431 32.2191 1.27943 32.2191C1.41665 32.2191 8.9206 28.6565 17.9548 24.3023C42.6668 12.3919 43.1665 12.1515 43.26 12.1326C43.3077 12.1231 43.7928 12.8796 44.3379 13.814C45.4207 15.6698 45.6129 15.8597 46.173 15.6277C46.3288 15.5631 46.5058 15.4133 46.5662 15.2946C46.7061 15.0201 49.5452 4.40966 49.5452 4.16121C49.5452 3.60847 49.405 3.5575 43.7175 2.04116C37.9571 0.505452 37.8405 0.482731 37.5099 0.834623ZM35.5618 21.397L35.3193 21.6395V35.3804V49.1213L35.5618 49.3637L35.8042 49.6063H42.4322H49.0602L49.3026 49.3637L49.5452 49.1213V35.3804V21.6395L49.3026 21.397L49.0602 21.1545H42.4322H35.8042L35.5618 21.397ZM18.1746 29.3003L17.9321 29.5427V39.332V49.1213L18.1746 49.3637L18.4171 49.6063H25.045H31.673L31.9155 49.3637L32.158 49.1213V39.332V29.5427L31.9155 29.3003L31.673 29.0578H25.045H18.4171L18.1746 29.3003ZM0.787453 37.2036L0.544922 37.446V43.2836V49.1213L0.787453 49.3637L1.02989 49.6063H7.65786H14.2858L14.5283 49.3637L14.7708 49.1213V43.2836V37.446L14.5283 37.2036L14.2858 36.961H7.65786H1.02989L0.787453 37.2036Z"
                  fill="#FCFFFE"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4 className=" mb-1 ff_montserrat fw_semibold fs_md clr_4  me-4 me-xl-5">
                Gewinnmarge erhöhen
              </h4>
              <p className="common_para mb-0 me-4 me-xl-5 opacity_8 ps-xl-3">
                Reduziere deinen Verwaltungsaufwand, straffe interne Abläufe und
                erziele Rekordumsätze mit deinen Wunschkunden!
              </p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4 ps-5 position-relative mitconsaltex_card transition_03s cursor_pointer">
            <div className="rounded-circle flower_icon position-absolute">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.2602 0.122263C43.6662 0.457067 42.7343 0.64491 40.2538 0.92967C36.463 1.36503 34.973 1.74836 33.3301 2.7113C29.8103 4.77417 28.6905 9.1957 30.7672 12.8303C31.623 14.328 32.7557 14.1212 32.9235 12.4366C33.2609 9.04768 35.0609 6.30874 37.8872 4.88424C38.4911 4.57986 38.4958 4.60218 37.9777 5.32313C35.2141 9.16997 33.7809 15.891 33.3437 27.0542C33.23 29.9593 33.2692 30.265 33.8388 30.9138C34.4727 31.6358 35.2726 31.832 36.1272 31.4749C36.7677 31.2073 37.0671 30.8771 37.5667 29.8866C38.0832 28.8625 38.635 28.0948 39.4784 27.2264L40.0731 26.6141L40.5702 27.0723C42.3693 28.7308 45.3165 28.9638 47.3573 27.6092C48.3283 26.9649 49.1684 25.9786 50.7054 23.6795C51.4572 22.5549 52.1233 21.5662 52.1857 21.4824C52.2479 21.3987 52.2744 21.3137 52.2444 21.2937C51.0761 20.513 49.9721 19.7251 49.1354 19.0747C46.3423 16.9035 43.7769 16.4936 41.4641 17.849C39.5366 18.9787 38.1743 21.6779 39.5359 21.6693C39.7113 21.6682 40.2514 21.56 40.7359 21.4287C41.7429 21.1561 44.134 21.0054 45.3638 21.1371C46.3483 21.2424 46.3099 21.2894 45.1167 21.4391C42.2534 21.7981 39.56 23.1018 37.5935 25.0808L36.7418 25.9378L36.7423 25.1262C36.7431 23.6744 37.1361 18.9976 37.4224 17.0325L37.5078 16.4465L38.1528 16.3549C40.0565 16.084 42.2666 14.3359 43.5572 12.0802C45.0627 9.44933 45.4906 6.45547 44.9575 2.2851C44.6563 -0.0708667 44.6482 -0.0963588 44.2602 0.122263ZM24.7593 17.2491C23.249 17.6121 22.6413 17.9473 20.3085 19.7042C19.3789 20.4042 18.4612 21.0584 18.2693 21.1576L17.9202 21.3382L18.2142 21.6516C18.3758 21.8239 18.9356 22.6416 19.4579 23.4685C21.8863 27.3125 23.4016 28.4875 25.9261 28.4835C29.3481 28.4781 31.9353 25.6295 30.2555 23.7165C29.464 22.815 26.6509 21.7093 24.4069 21.4175C23.3785 21.2838 23.3277 21.2655 23.7608 21.1836C25.2783 20.8965 28.1297 21.1314 29.7756 21.6792C31.6029 22.2873 31.9266 21.4043 30.6029 19.422C29.4123 17.639 26.9486 16.7229 24.7593 17.2491ZM19.003 32.1935C17.9777 32.3784 16.4937 32.8567 15.655 33.2728C13.8756 34.1553 13.7138 34.3009 5.35638 42.5333L0.813965 47.0077L7.25314 53.446L13.6922 59.8843L15.8166 56.7008L17.941 53.5175L28.7805 53.4789C38.4189 53.4448 39.6917 53.4191 40.2678 53.2475C41.5546 52.8643 42.2908 52.5355 43.1212 51.9731C44.0237 51.3619 60.2456 36.9814 60.6291 36.4525C61.7204 34.9477 60.0365 33.1654 57.5234 33.1654C55.469 33.1654 55.2732 33.2805 46.8894 39.4156L39.554 44.7837L35.2543 44.8707L30.9545 44.9578L29.8254 43.8286L28.6962 42.6994L33.042 42.698C36.4328 42.6969 37.5265 42.6597 38.0186 42.5287C42.1704 41.4237 42.919 36.6224 39.2284 34.7687C38.1265 34.2152 37.3511 34.1283 33.4525 34.1216C29.2686 34.1144 28.649 34.0342 26.8494 33.2654C24.1121 32.0961 21.5122 31.741 19.003 32.1935Z"
                  fill="#FCFFFE"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4 className=" mb-1 ff_montserrat fw_semibold fs_md clr_4  ps-4 ps-xl-5 ms-3 mt-4">
                Team aufbauen
              </h4>
              <p className="common_para mb-0 opacity_8 ps-4 ps-xl-5 ms-3">
                Baue dein A-Team aus Top-Talenten, die zukünftiges Wachstum
                schultern und Umsatzrekorde mit dir brechen!
              </p>
            </div>
          </div>
          <div className="col-4 text-end ps-5 mb-4  position-relative mitconsaltex_card transition_03s cursor_pointer">
            <div className="rounded-circle skalieren_icon position-absolute">
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.7458 1.22156C18.4453 1.46442 18.4272 1.57316 18.3636 3.5131L18.2968 5.54963L17.1613 5.85207C15.756 6.22625 14.0807 6.92718 12.8639 7.65001L11.9394 8.19932L10.7765 7.00987C8.70406 4.88998 8.75976 4.88731 6.43709 7.21639C4.14287 9.51716 4.15877 9.37128 5.99853 11.2382L7.42724 12.688L6.76064 13.8506C5.96206 15.2433 5.48756 16.3951 5.08105 17.928L4.77888 19.0675L2.74235 19.1343C0.0308096 19.2233 0.195789 19.0156 0.195789 22.3404C0.195789 25.6652 0.0308096 25.4575 2.74235 25.5465L4.77888 25.6133L5.09267 26.7962C5.46445 28.1984 6.13959 29.8011 6.89182 31.0674L7.43618 31.9836L6.00293 33.4381C4.1581 35.3103 4.14221 35.163 6.43709 37.4644C8.75656 39.7903 8.65303 39.7848 10.7823 37.6918C11.9108 36.5823 12.0153 36.5117 12.2742 36.6807C13.6233 37.5617 15.479 38.3768 17.1613 38.8271L18.2968 39.1312L18.3636 41.1677C18.4525 43.8792 18.2448 43.7143 21.5697 43.7143C24.8945 43.7143 24.6868 43.8792 24.7757 41.1677L24.8425 39.1312L25.982 38.829C27.5149 38.4225 28.6667 37.948 30.0595 37.1494L31.2221 36.4828L32.6719 37.9115C34.5388 39.7513 34.3929 39.7672 36.6937 37.473C39.0113 35.1618 39.007 35.2247 36.987 33.1605L35.7447 31.891L36.2015 31.1567C36.8749 30.0744 37.6838 28.1644 38.0438 26.8069L38.3604 25.6133L40.397 25.5465C43.1085 25.4575 42.9435 25.6652 42.9435 22.3404C42.9435 19.0156 43.1085 19.2233 40.397 19.1343L38.3604 19.0675L38.0466 17.8846C37.6749 16.4824 36.9997 14.8797 36.2475 13.6135L35.7031 12.6972L37.1364 11.2427C38.9827 9.36914 38.9988 9.51702 36.6959 7.21412C34.3937 4.91189 34.5402 4.92805 32.6719 6.76928L31.2221 8.19799L30.0595 7.53139C28.6667 6.73281 27.5149 6.25831 25.982 5.8518L24.8425 5.54963L24.7757 3.5131C24.6868 0.801562 24.8945 0.966541 21.5697 0.966541C19.3003 0.966541 19.031 0.990854 18.7458 1.22156ZM43.776 10.3533C41.9554 12.1802 41.9556 12.1643 43.7082 13.9481C44.4226 14.6752 45.145 15.3048 45.3137 15.3471C46.2557 15.5836 47.023 14.468 46.4658 13.6725C46.2478 13.3612 46.2479 13.3611 46.6996 13.4588C51.3392 14.4612 54.7507 18.4142 55.1751 23.279C55.3225 24.9687 56.0816 25.5204 56.9982 24.6039C57.4061 24.1959 57.4064 24.195 57.3164 23.0862C56.8671 17.5485 53.265 13.1297 47.9426 11.5873C47.3074 11.4033 46.6141 11.2527 46.4018 11.2527C45.9309 11.2527 45.9258 11.1981 46.35 10.6941C46.7725 10.1919 46.7745 9.72809 46.356 9.3097C45.7022 8.65579 45.3093 8.81476 43.776 10.3533ZM23.2785 13.9991C29.9108 15.3402 32.37 23.5515 27.5753 28.3461C22.7808 33.1408 14.5694 30.6816 13.2284 24.0492C12.0125 18.0361 17.2654 12.7832 23.2785 13.9991ZM19.9816 16.1394C15.1377 17.442 13.5499 23.4937 17.1509 26.9283C20.7341 30.3461 26.5276 28.6691 27.7825 23.8509C28.9722 19.2835 24.5489 14.9111 19.9816 16.1394ZM45.3295 35.4197C45.0567 35.6402 45.005 35.8237 44.9473 36.7772L44.8805 37.8797L44.0122 38.1724C43.5346 38.3334 42.8203 38.6293 42.4248 38.8299L41.7057 39.1949L41.0211 38.5188C39.8798 37.3917 39.7035 37.4182 38.1755 38.9463C36.6474 40.4743 36.621 40.6506 37.7481 41.7918L38.4241 42.4765L38.0592 43.1955C37.8585 43.5911 37.5626 44.3054 37.4017 44.783L37.109 45.6513L36.0065 45.7181C34.4645 45.8114 34.394 45.9108 34.394 47.989C34.394 50.0672 34.4645 50.1666 36.0065 50.26L37.109 50.3268L37.4017 51.1951C37.5626 51.6727 37.8585 52.387 38.0592 52.7825L38.4241 53.5016L37.7481 54.1863C36.6364 55.3119 36.6605 55.4997 38.1053 56.9681C39.6364 58.5241 39.8955 58.5708 40.9909 57.4892L41.7057 56.7832L42.4248 57.1481C42.8203 57.3488 43.5346 57.6447 44.0122 57.8057L44.8805 58.0983L44.9473 59.2008C45.0407 60.7428 45.1401 60.8134 47.2183 60.8134C49.2965 60.8134 49.3959 60.7428 49.4893 59.2008L49.5561 58.0983L50.4244 57.8057C50.9019 57.6447 51.6162 57.3488 52.0118 57.1481L52.7309 56.7832L53.4155 57.4593C54.5567 58.5863 54.7331 58.5599 56.261 57.0318C57.7891 55.5038 57.8156 55.3275 56.6885 54.1863L56.0124 53.5016L56.3774 52.7825C56.578 52.387 56.8739 51.6727 57.0349 51.1951L57.3276 50.3268L58.4301 50.26C59.9721 50.1666 60.0426 50.0672 60.0426 47.989C60.0426 45.9108 59.9721 45.8114 58.4301 45.7181L57.3276 45.6513L57.0349 44.783C56.8739 44.3054 56.578 43.5911 56.3774 43.1955L56.0124 42.4765L56.6885 41.7918C57.8002 40.6662 57.776 40.4784 56.3313 39.01C54.8001 37.454 54.5411 37.4072 53.4457 38.4889L52.7309 39.1949L52.0118 38.8299C51.6162 38.6293 50.9019 38.3334 50.4244 38.1724L49.5561 37.8797L49.4893 36.7772C49.3959 35.2353 49.2965 35.1647 47.2183 35.1647C45.8692 35.1647 45.5999 35.2011 45.3295 35.4197ZM9.07329 42.9735C8.67493 43.3717 8.64074 44.1483 8.94464 45.8911C9.84101 51.0313 13.9073 55.2316 18.9827 56.2602L20.0696 56.4805L19.7509 56.8509C19.0545 57.6607 19.7791 58.8861 20.8025 58.6292C21.3957 58.4804 23.707 55.9663 23.707 55.4699C23.707 54.9735 21.3957 52.4594 20.8025 52.3106C19.8605 52.0741 19.0932 53.1897 19.6505 53.9853C19.8568 54.28 19.8551 54.293 19.6172 54.2234C19.4788 54.1831 19.095 54.0802 18.7643 53.9951C14.3767 52.865 10.9203 48.4535 10.8874 43.942C10.8817 43.1559 10.4591 42.6456 9.81403 42.6456C9.5538 42.6456 9.27995 42.7667 9.07329 42.9735ZM49.4897 43.129C52.8277 44.6921 53.6096 49.163 51.0009 51.7717C48.9362 53.8364 45.4787 53.8428 43.4216 51.7857C41.5358 49.8999 41.3635 46.6961 43.0341 44.5832C44.4708 42.7663 47.3364 42.1207 49.4897 43.129ZM45.7796 45.0585C43.5365 46.1963 43.3662 49.2497 45.4635 50.7238C45.9989 51.1001 46.1214 51.1283 47.2183 51.1283C48.3152 51.1283 48.4377 51.1001 48.9731 50.7238C50.0448 49.9705 50.3576 49.3528 50.3576 47.989C50.3576 46.6254 50.0448 46.0075 48.9737 45.2548C48.1901 44.704 46.6634 44.6102 45.7796 45.0585Z"
                  fill="#FCFFFE"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4 className=" mb-1 ff_montserrat fw_semibold fs_md clr_4 ">
                Vertrieb skalieren
              </h4>
              <p className="common_para mb-0 ms-xl-5 ps-xl-3 opacity_8">
                Wir bauen gemeinsam mit dir ein Vertriebsteam auf, welches sich
                ab Tag 1 rentiert, sodass der Umsatzturbo aktiviert wird und
                deine Einnahmen sich vervielfachen!
              </p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4 position-relative mitconsaltex_card transition_03s cursor_pointer">
            <div className="rounded-circle prozesse_icon position-absolute">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0365 2.58306L12.9506 5.13072L12.6453 5.35469C3.13958 12.3297 -1.28024 24.1214 1.39609 35.3667C4.17724 47.0523 13.7265 55.556 25.8952 57.1832L27.0433 57.3367L27.1496 56.9342C27.8603 54.2412 29.4978 47.482 29.456 47.4144C29.4258 47.3657 28.9335 47.2915 28.3619 47.2496C21.2598 46.7292 15.3486 42.738 12.4216 36.4865C9.33101 29.8859 10.5848 21.7394 15.525 16.3227C16.7187 15.0138 18.9014 13.1341 19.0523 13.2849C19.0747 13.3073 20.0471 14.5979 21.2131 16.153L23.3332 18.9802L23.4468 18.5506C23.684 17.6543 28.0504 0.146825 28.0504 0.0925128C28.0504 0.061045 23.7916 0.0354004 18.5865 0.0354004H9.12261L11.0365 2.58306ZM31.4149 0.472926C30.7043 3.16594 29.0667 9.92513 29.1086 9.99277C29.1387 10.0415 29.631 10.1156 30.2027 10.1575C35.6547 10.5571 40.2176 12.8861 43.6103 17.0011C48.923 23.4452 49.2562 32.6393 44.4238 39.4493C43.2745 41.0691 39.7883 44.3982 39.5212 44.1311C39.4938 44.1037 38.5174 42.8092 37.3515 41.2542L35.2314 38.4269L35.1177 38.8566C34.8805 39.7528 30.5141 57.2603 30.5141 57.3146C30.5141 57.3461 34.7732 57.3717 39.9787 57.3717H49.4435L47.6154 54.9361C46.61 53.5965 45.7539 52.4446 45.713 52.3764C45.6694 52.3036 46.0647 51.9368 46.6712 51.4873C48.7755 49.9278 51.8504 46.5969 53.3858 44.2135C57.6812 37.5459 58.9945 29.5343 57.057 21.8165C54.1627 10.2865 44.5792 1.80096 32.6694 0.222639L31.5212 0.0704517L31.4149 0.472926ZM27.8658 17.2701C23.0981 18.6345 23.0981 25.587 27.8658 26.9179C28.5098 27.0977 28.5326 27.1149 28.2184 27.1853C26.2642 27.6222 25.6684 27.8517 24.5936 28.5816C22.1561 30.2369 20.8834 32.7739 20.8834 35.9779V37.2144H29.2823H37.6811V35.9779C37.6811 31.7342 35.1529 28.301 31.3811 27.423C30.9966 27.3335 30.5309 27.225 30.3461 27.1819L30.0102 27.1035L30.4359 27.0082C31.2557 26.8247 32.1314 26.3184 32.8165 25.632C36.4838 21.9576 32.862 15.8403 27.8658 17.2701Z"
                  fill="#FCFFFE"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h4 className="ff_montserrat fw_semibold fs_md clr_4 mb-1 mt-4 ">
                Prozesse automatisieren
              </h4>
              <p className="common_para mb-0 opacity_8 pe-xl-5 me-xl-5">
                Sorge für glückliche Kunden und zufriedene Mitarbeiter durch
                eine agile Kultur mit digitalen Prozessen!
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Mitconsaltex;
