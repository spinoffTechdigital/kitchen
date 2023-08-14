import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="co">
        <ul>
          <li>  <a
            className="btn btn-outline-light btn-floating m-1 g"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a></li>
          <li>  <a
            className="btn btn-outline-light btn-floating m-1 g"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a></li>
          <li> <a
            className="btn btn-outline-light btn-floating m-1 g"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a></li>
          <li>    <a
            className="btn btn-outline-light btn-floating m-1 g"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a></li>
          <li>      <a
            className="btn btn-outline-light btn-floating m-1 g"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a></li>
          <li>
          <a
            className="btn btn-outline-light btn-floating m-1 g"
            href="#!"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          </li>
        </ul>
      </div>
      {`Copyright © Finike House ${year}`}
    </footer>
  );
};

export default Footer;
