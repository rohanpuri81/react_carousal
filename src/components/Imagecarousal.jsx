import React from "react";
import "./Imagecarousal.css";
import Mycard from "./Mycard";

const Imagecarousal = () => {
  let box = document.querySelector(".product-container");
  const btnPressPrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnPressNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="product-car">
      <button className="pre-btn" onClick={btnPressPrev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnPressNext}>
        <p>&gt;</p>
      </button>

      <div className="product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
        <Mycard cardno="9" />
        <Mycard cardno="10" />
        <Mycard cardno="11" />
        <Mycard cardno="12" />
        <Mycard cardno="13" />
        <Mycard cardno="14" />
        <Mycard cardno="15" />
      </div>
    </div>
  );
};

export default Imagecarousal;
