import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import {
  FooterWrapper,
  SocialIcons,
  FooterMessage,
  Copyright,
  SocialMessage,
} from './Footer.styled';

const Footer = () => {
  const [socialMessage, setSocialMessage] = useState('');

  const handleSocialClick = (platform) => {
    setSocialMessage(`We appreciate your interest in following us on ${platform}! 
    Click the "Connect With Us" image above to stay updated and join our creative journey!`);
};
  return (
    <FooterWrapper>
      <FooterMessage>Let's connect and create something beautiful together.</FooterMessage>
      <SocialIcons>
        <button onClick={() => handleSocialClick('Facebook')}>
          <FaFacebookF />
        </button>
        <button onClick={() => handleSocialClick('Instagram')}>
          <FaInstagram />
        </button>
        <button onClick={() => handleSocialClick('Twitter')}>
          <FaTwitter />
        </button>
        <button onClick={() => handleSocialClick('LinkedIn')}>
          <FaLinkedinIn />
        </button>
      </SocialIcons>
      {socialMessage && <SocialMessage>{socialMessage}</SocialMessage>}
      <Copyright>&copy; 2024 Empire Photography. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;

