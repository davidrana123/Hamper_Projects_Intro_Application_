import React from "react";
import "./Footer.css";
// import "./Commom.css"?;
import Media from "./components/Posts/Media";

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <>
      <Media />
      <div className="footer">
        <footer className="w-100 bg-light text-center">
          <p>
            © {currentDate} {currentTime} David Rana. All Rights Reserved |
            Terms and Conditions
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
