import React from "react";
import { CardWrapper } from "../card/Card.styled";
import Tshego from "../../assets/Tshego.jpg";
import { useNavigate } from "react-router-dom";

const Tshegofatso = () => {
  const navigate = useNavigate()
  return (
    <CardWrapper onClick={()=>navigate("/about-tshego")}>
      <img className="card" src={Tshego} alt="" />
      <div className="card_info">
        <h2>Tshegofatso Mogotlane</h2>
        <h3>Chief Technology Officer (CTO)</h3>
        <h4>
          As a data scientist with machine learning expertise and a full stack
          developer, I possess a unique skill set combining data-driven insights
          and software development. I excel at analyzing data, applying
          statistical methods, and building machine learning models to inform
          decisions. Proficient in Python, I develop robust solutions that
          optimize business performance. As a full stack developer, I create
          responsive interfaces using HTML, CSS, and React, while handling
          backend logic with Node.js. My knowledge extends to databases and
          APIs, enabling me to craft scalable applications and integrate data
          into user-centric designs effectively.
        </h4>
      </div>
    </CardWrapper>
  );
};

export default Tshegofatso;
