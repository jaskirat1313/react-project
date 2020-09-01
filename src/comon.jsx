import React from 'react';
import { NavLink } from 'react-router-dom';



const Comon=(props)=> {
  return (
    
      <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h1>{props.title}<strong className="brand-name"> Jaskirat Singh</strong></h1>
                      <h2 className="my-3">{props.des}</h2>
                     <div className="mt-3">
                         
                         
                    <NavLink to={props.link}  className="btn-get-started">{props.button}</NavLink> </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img className="img-fluid animated" src={props.img} alt="textimage"/>
                  </div>

              </div>
          </div>
      </div>
       
      </section>

    </>
  );
}

export default Comon;
