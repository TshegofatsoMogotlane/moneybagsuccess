import React from "react";
import { CardWrapper } from "../card/Card.styled";
import Khetho from "../../assets/Khetho.jpeg";
const Kethokuhle = () => {
  return (
    <CardWrapper>
      <img className="card" src={Khetho} alt="" />
      <div className="card_info">
        <h2>Kethokuhle</h2>
        <h3>CO-Founder</h3>
        <h4>
          
        </h4>
      </div>
    </CardWrapper>
  );
};

export default Kethokuhle;
