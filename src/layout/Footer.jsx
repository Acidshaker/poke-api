import React from "react";

const Footer = () => {
  return (
    <footer className="footer__container">
      <ul className="footer__social--list">
        <li>
          <a href=""></a>
          <i className="bx bxl-linkedin-square"></i>
        </li>
        <li>
          <a href=""></a>
          <i className="bx bxl-facebook-circle"></i>
        </li>
        <li>
          <a href=""></a>
          <i className="bx bxl-instagram-alt"></i>
        </li>
        <li>
          <a href=""></a>
          <i className="bx bxl-twitter"></i>
        </li>
      </ul>
      <section className="about">
        <p>&copy; All rights reserved</p>
        <p>
          {" "}
          <a href="">About me</a>
        </p>
      </section>
      <img className="footer__img" src="/images/pokeball.png" alt="" />
    </footer>
  );
};

export default Footer;
