import React from 'react'
import Tsepang from '../../components/tsepang/Tsepang'
import Kethokuhle from '../../components/khethokuhle/Kethokuhle'
import Tshegofatso from '../../components/tshegofatso/Tshegofatso'
import Company from '../../components/company/Company'
import { AboutUsWrapper } from './AboutUs.styled'

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <div className="web-cards">
        <Tsepang />
        <Kethokuhle />
        <Tshegofatso />
        <Company />
      </div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
