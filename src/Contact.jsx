import React, { useState } from 'react';
import web from '../src/images/img4.svg';

const Contact = () => {
  const [data, setData] = useState({
  	fullname: '',
  	phone: '',
  	email: '',
  	address: '',
  });

  const InputEvent = (event) => {
  	const { name, value } = event.target;
  	
  	setData((preVal) => {
  		return {
  			...preVal,
  			[name]: value,
  		};
  	}); 
  };

  const formSubmit = (e)  => {
  	e.preventDefault();
  	alert(`Thank You! Your Order is placed ${data.fullname}`);
  }
  return(
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                {/* Bydefault 12 column it takes 10 column and align div in center*/}
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="my-3">Book your Hamper in just one form</h2>
                    <div className="container contact_div">
                      <form onSubmit={formSubmit}>
                        <div class="mb-3">
  										    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  										    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" name="fullname" value={data.fullname} onChange={InputEvent} required/>
									      </div>
                				<div class="mb-3">
                  				<label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                  				<input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+91 xxxxx-xxxxx" name="phone" value={data.phone} onChange={InputEvent} required/>
                				</div>
                				<div class="mb-3">
                  				<label for="exampleFormControlInput1" class="form-label">Email address</label>
                  				<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} required/>
                				</div>
                  			<div class="mb-3">
                  				<label for="exampleFormControlTextarea1" class="form-label">Address</label>
                  				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="address" value={data.address} onChange={InputEvent} required></textarea>
                  			</div>
                  			<div class="col-12">
    									    <button class="btn btn-outline-primary" type="submit">Order Now</button>
  									    </div>
                  		</form>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated" alt="contactimg"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
