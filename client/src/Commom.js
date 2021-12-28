import React from "react";
// import web from "../src/images/img2.svg";
import web from "../src/images/img2.svg";

const Commom = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Hi! I am
                    <strong className="brand-name">
                      {" "}
                      David Rana , <br />{" "}
                    </strong>
                    I Am Software
                  </h1>
                  <h1>
                    <strong className="brand-name">Developer</strong>
                  </h1>
                  <h2 className="my-3">
                    Welcome to my Application <br />
                  </h2>
                  <div className="mt-3"></div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
