import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import loader from "../asstes/images/png/logo.png";
function Preloader() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      {" "}
      <Container>
        {" "}
        {loading ? (
          <div id="root">
            {" "}
            <div class="position-fixed min-vh-100 w-100 top-0 start-0 bg-black z-10 d-flex justify-content-center align-items-center z_index_3">
              <img className="loader_animation" src={loader} alt="" />
            </div>{" "}
          </div>
        ) : (
          <></>
        )}{" "}
      </Container>{" "}
    </>
  );
}
export default Preloader;
