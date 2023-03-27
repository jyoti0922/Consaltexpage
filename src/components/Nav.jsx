import React, { useState } from "react";
import { Container } from "react-bootstrap";
import btnarrow from "../asstes/images/png/btn-arrow.png";
import logoimg from "../asstes/images/png/logo.png";
import { Link } from "react-router-dom";
import {
  FBICON,
  INSTAGRAM,
  LINKDINICON,
  TIKTOKICON,
  YOUTUBEICON,
} from "./Icon";

const Nav = (props) => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <section>
      <article className="bg_top_nav py-2 position-relative z_index_2">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <ul className="d-md-flex gap-1 gap-lg-2 ps-0 mb-0">
              <li>
                <a
                  href="#"
                  className="mb-0 ff_montserrat fw_regular fs_sm clr_1"
                >
                  22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-0 ff_montserrat fw_regular fs_sm clr_1 d-none d-md-block"
                >
                  |
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-0 ff_montserrat fw_regular fs_sm clr_1"
                >
                  info@consaltex.de{" "}
                </a>
              </li>
            </ul>
            <ul className="ps-0 mb-0 d-flex justify-content-md-end gap-1 gap-md-2 gap-lg-3 mt-3 mt-md-0">
              <li className="social_icon_hover">
                <a
                  className={props.text}
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <FBICON />
                </a>
              </li>
              <li className="social_icon_hover">
                <a
                  className={props.text}
                  href="https://www.tiktok.com/about"
                  target="_blank"
                >
                  <TIKTOKICON />
                </a>
              </li>
              <li className="social_icon_hover">
                <a
                  className={props.text}
                  href="https://www.linkedin.com/login"
                  target="_blank"
                >
                  <LINKDINICON />
                </a>
              </li>
              <li className="social_icon_hover">
                <a
                  className={props.text}
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                >
                  <INSTAGRAM />
                </a>
              </li>
              <li className="social_icon_hover">
                <a
                  className={props.text}
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <YOUTUBEICON />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </article>
      <nav>
        <Container>
          <div className="d-flex align-items-center justify-content-between py-2 position-relative z_index_2">
            <a
              href="#"
              className="ff_ubuntu fs_xxxlg text-whit5 ps-lg-5 ps-xl-1"
            >
              <img
                className="logo_75 logo_md_100"
                src={logoimg}
                alt="logoimg"
              />
            </a>
            <div
              onClick={() => setNavShow(!navShow)}
              className=" btnss text-danger px-2 py-1 d-lg-none rounded-3"
            >
              <div className="line_black"></div>
              <div className="line_black"></div>
              <div className="line_black"></div>
            </div>
            <ul className="d-flex align-items-center mb-0 d-none d-lg-flex  ps-0 mb-0 gap_20 gap_lg_30 gap_xl_37">
              <li>
                <Link
                  to="/"
                  className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonial"
                  className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                >
                  Kundenrezensionen
                </Link>
              </li>
              <li>
                <Link
                  to="/Hiring"
                  className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                >
                  Karriere
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center justify-content-md-start d-none d-lg-flex">
              <button className="common_btn d-flex align-items-center gap-3">
                <p className="mb-0 ff_poiret fw_regular fs_base clr_1 ">
                  <strong>Jetzt Erstgespräch vereinbaren</strong>
                </p>
                <img src={btnarrow} alt="btnarrow" />
              </button>
            </div>
          </div>
          <article className="w-100 d-flex justify-content-between ">
            {" "}
            <span> </span>
          </article>{" "}
          <div className="d-lg-none d-flex ">
            <div className={` ${navShow ? "nav-fix nav_bg" : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-4">
                <button
                  onClick={() => setNavShow(false)}
                  className=" btn btn-close d-lg-none position-absolute btn_close_position "
                ></button>
                <li>
                  <Link
                    to="/"
                    className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Testimonial"
                    className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                  >
                    Kundenrezensionen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Hiring"
                    className="ff_poiret_one fw_regular fs_base clr_1 opacity_7 nav_hover"
                  >
                    Karriere
                  </Link>
                </li>
                <button className="common_btn d-flex align-items-center gap-3">
                  <p className="mb-0 ff_poiret fw_regular fs_base clr_1">
                    <strong>Jetzt Erstgespräch vereinbaren</strong>
                  </p>
                  <img src={btnarrow} alt="btnarrow" />
                </button>
              </ul>{" "}
            </div>
          </div>
        </Container>
      </nav>
    </section>
  );
};

export default Nav;
