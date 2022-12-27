import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="loader__container">
        <img className="loader__title" src="/images/Pokemon-API.png" alt="" />
        <div className="loader-img__container">
          <img
            className="loader__img"
            src="/images/first_loader-bg.gif"
            alt="Loading page image"
          />
        </div>
        <div className="loader-img__container">
          <div className="box__hide"></div>
          <div className="box__center"> </div>
          <p className="loading__title">
            Loading
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
          <img
            className="loader__img--pikachu"
            src="/images/pikachu__running.gif"
            alt="Loading page image"
          />
          <div className="box__hide-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
