import React from "react";
import { CardWrapper } from "../card/Card.styled";
import Logo from "../../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate()
  return (
    <CardWrapper onClick={()=>navigate("/about-the-company")}>
      <img className="card" src={Logo} alt="" />
      <div className="card_info">
        <h2>Empire Photography</h2>
        <h4>
          Empire Photography is a top-tier photography service dedicated to
          capturing life's special moments through stunning visuals. Our
          talented team specializes in event photography, portraits, weddings,
          and commercial shoots, focusing on telling powerful stories behind
          every image. We provide personalized experiences,tailoring each
          session to our client's unique vision. Our creative photographers use
          innovative techniques high-quality,vibrant images. Offering
          comprehensive services from planning to delivery, we ensure timely
          results while maintaining excellent client relationships. At Empire
          Photography, we are passionate storytellers, creating authentic,
          lasting memories with every shot.
        </h4>
      </div>
    </CardWrapper>
  );
};

export default Company;
