import React, { useState } from 'react';


const Contact=()=> {
  const [Form, setForm]=useState({
    fname:"",
    phone:"",
    email:"",
    message:"",
});
const setValue=(event)=>{
  const { name, value}=event.target;
  setForm((preValue)=>
  {
      return{
          ...preValue,
          [name] : value,
      };

    
  });
   
}
const onSubmit =(event)=>{
  event.preventDefault();
 alert(`Your form values are Name:${Form.name} phone:${Form.phone} Email:${Form.email} Message:${Form.message} `);
 setForm("");
}
  
  return (
    
      <>
      <div className="my-4">
        <h1 className="text-center">Contact-Us</h1>
      </div>
      <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={onSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" name="fname" onChange={setValue} value={Form.fname}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone No</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Number" onChange={setValue} name="phone" value={Form.phone}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={setValue} name="email" value={Form.email}/>
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={setValue} name="message" value={Form.message}> </textarea>
  </div><br/>
  <div className="col-12">
  <button type="submit"  class="btn btn-outline-primary">Submit</button>
  </div>
  
</form>

              </div>
          </div>
      </div>
       
     
    </>
  );
}

export default Contact;
