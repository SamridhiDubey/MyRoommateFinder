import React from "react";
import { BsGithub, BsInstagram, BsTelegram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>
        Made by Samridhi
      </h3>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="https://github.com/SamridhiDubey">
            <BsGithub color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="LinkedIn">
          <Link to="https://www.linkedin.com/in/samridhi-dubey-4482551b9/">
            <BsLinkedin color="black" size={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;