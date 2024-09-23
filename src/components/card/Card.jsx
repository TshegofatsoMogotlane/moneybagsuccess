import React from "react";
import { CardWrapper } from "./Card.styled";
import Gallery from "../../assets/Gallery.JPG"
import  BookingCard from "../../assets/BookingCard.JPG"
// import AUs from "../../assets/AUs.jpg"
import Connect from "../../assets/WhatsApp Image 2024-09-23 at 01.46.08.jpeg"
import BCard from "../../assets/IMG-20240504-WA0005.jpg"

// const Card = ({ src, title, description }) => {
//   return (
//     <CardWrapper>
//       <img src={src} alt="" />
//       <div>
//         <h2>{title}</h2>
//         <h4>{description}</h4>
//       </div>
//     </CardWrapper>
//   );
// };

// export default Card;
export const Card3 = () => {
    return (
      <CardWrapper>
        <img className="card" src={BCard} alt="" />
        <div className="card_info" >
          <h2>About Our Studio</h2>
          <h4>Learn more about our team, our story, and what makes us stand out in
          the world of photography.</h4>
        </div>
      </CardWrapper>
      
    );
  };
  
  export const Card = () => {
    return (
      <CardWrapper>
        <img className="card" src={Gallery} alt="" />
        <div className="card_info" >
          <h2>Explore Our Gallery</h2>
          <h4>Take a look at some of our favorite shoots and creative work. Click
          the picture to explore.</h4>
        </div>
      </CardWrapper>
      
    );
  };

  export const Card2 = () => {
    return (
      <CardWrapper>
        <img className="card" src={BookingCard} alt="" />
        <div className="card_info" >
          <h2>Book Your Photoshoot</h2>
          <h4>Ready to capture your moments? Sign up or log in to schedule your
          personalized photoshoot.</h4>
        </div>
      </CardWrapper>
      
    );
  };

  export const Card4 = () => {
    return (
      <CardWrapper>
        <img className="card" src={Connect} alt="" />
        <div className="card_info" >
          <h2>Connect With Us</h2>
          <h4>Got questions or ideas? We'd love to hear from you! Click the picture
          to get in touch.</h4>
        </div>
      </CardWrapper>
      
    );
  };