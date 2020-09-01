import React from 'react';
import team from "../src/svg/team.svg"
import Comon from './comon';
const About=()=> {
  return (
    
      <>
    <Comon title={`welcome to About-Us page`}
      des={`We have some good developer to making website`}
      button={`Contact-Us`}
      img={team}
      link={"/contact"}/>
    </>
  );
}

export default About;
