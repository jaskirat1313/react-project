import React from "react";

const ServiceC=(props)=>{
    return (
        <>
         <div className="col-md-4 col-10 mx-auto ">
                  <div className="card" >
  <img src={props.img} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.tittle}</h5>
    <p className="card-text">{props.des}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>


                  </div>

              </div>
        </>
    );
}
export default ServiceC;