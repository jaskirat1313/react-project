import React from 'react';
import ServiceC from "./ServiceCard"
import Sdata from "./Sdata"

const Service=()=> {
  return (
    
      <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
     <div className="container-fluid mb-auto">
          <div className="row">
              <div className="col-10 mx-auto">
                  <div className="row gy-4">  
                  {Sdata.map((value,index)=>{
                     return(
                     <ServiceC key={value.id}
                     tittle={value.tittle}
                     img={value.imgScr}
                     des={value.sname}
                     link={value.link}
                     />
                     );
                     
                  })}     
                 
                 </div>
                
          </div>
      </div>
       </div>
     
    </>
  );
}

export default Service;
