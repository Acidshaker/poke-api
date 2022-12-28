import React from "react";

const Footer = () => {
  return (
    <footer className="footer__container">
      <ul className="footer__social--list">
        <li>
          <a
            href="https://www.linkedin.com/in/jorge-alberto-orteg%C3%B3n-bacelis-67bb0b254"
            target={"_blank"}
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/jorge.ortegonbacelis"
            target={"_blank"}
          >
            <i className="bx bxl-facebook-circle"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jorge_barcelino/"
            target={"_blank"}
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jorge_barcelino" target={"_blank"}>
            <i className="bx bxl-twitter"></i>
          </a>
        </li>
      </ul>
      <section className="about">
        <p>&copy; All rights reserved</p>
        <p>
          {" "}
          <a
            href="https://portafolio-jorge-ortegon.netlify.app/"
            target={"_blank"}
          >
            About me
          </a>
        </p>
      </section>
      <img className="footer__img" src="/images/pokeball.png" alt="" />
    </footer>
  );
};

export default Footer;
