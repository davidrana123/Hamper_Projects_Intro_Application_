import React from "react";
// import "./Commom.css";

const About = () => {
  return (
    <>
      <div>
        <div className="header">
          <section id="about" className="d-flex align-items-center">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>
                        About
                        <strong className="brand-name"> David Rana </strong>
                      </h1>
                      <h2 className="my-3">
                        <br /> ― MY BACKGROUND <br />
                      </h2>

                      <p>
                        I’ve gone through a number of phases in my career, and
                        each of them has informed my current work ethos and
                        philosophy. To tell about myself, I learn things with a
                        dedication. “Being a fresher, I think I am very flexible
                        and adaptive to learning new things. I am a very quick
                        learner and also I am highly trainable. These two skills
                        allow me to learn new techniques, skills very fast and
                        they also help me to adjust in quickly.
                      </p>
                      <h2>Skills</h2>
                      <ul>
                        <li>Javascript</li>
                        <li>React & Redux</li>
                        <li>Node js</li>
                        <li>Express js</li>
                        <li>Vue & Vuex</li>
                        <li>Bootstrap</li>
                        <li>Vuetify</li>
                        <li>material ui(MUI)</li>
                        <li>MongoDB</li>
                      </ul>

                      <div className="mt-3"></div>
                    </div>

                    {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={web}
                      className="img-fluid animated"
                      alt="Commom img"
                    />
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
