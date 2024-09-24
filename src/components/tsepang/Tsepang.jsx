import React from "react";
import { CardWrapper } from "../card/Card.styled";
import AUs from "../../assets/Tseps.jpg";
import { useNavigate } from "react-router-dom"

const Tsepang = () => {
  const navigate = useNavigate()
  return (
    <CardWrapper onClick={()=>navigate("/about-tsepang")}>
      <img className="card" src={AUs} alt="" />
      <div className="card_info">
        <h2>Tsepang Molapo</h2>
        <h3>Co-Founder and CEO</h3>
        <h4>
          As the founder of BricsEmpire Photography, I blend creativity and
          storytelling to capture powerful moments that reflect the strength and
          journey of each individual. I strive to create transformative visuals
          that resonate with emotion and purpose, making BricsEmpire the go-to
          for those seeking more than a photo, but a lasting legacy."A great
          photograph tells a story; an unforgettable one captures a legacy."~B|E
        </h4>
      </div>
    </CardWrapper>
  );
};

export default Tsepang;
