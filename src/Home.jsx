import React from 'react';

import Comon from './comon';
import web from "../src/svg/web.svg"

const Home=()=> {
  return (
    
      <>
      <Comon title={`Grow your business with`}
      des={ `We have some good developer making website`}
      button={`Get Started`}
      img={web}
      link={"/service"}/>
     

    </>
  );
}

export default Home;
