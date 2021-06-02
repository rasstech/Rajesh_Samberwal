import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from './Modal'

const Contact = () => {

  const [isOpen, setisOpen] = useState(false)
  
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const getVal = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
    emailjs
      .sendForm(
        "service_6pmaura",
        "template_m5h0dgg",
        e.target,
        "user_otnUESExPvp81jSIL4NEb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setuser({    
       name: "",
       email: "",
       phone: "",
       msg: "", 
      });
       
    
  };

  return (
    <div className="contact-section" data-scroll-section>
      <section className="container contact"  >
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form onSubmit={submitForm}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="md-form mb-0">
                    <input 
                     required
                      value={user.name}
                      onChange={getVal}
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="NAME"
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="md-form mb-0">
                    <input 
                    required
                      value={user.email}
                      onChange={getVal}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="EMAIL"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-4">
                    <input 
                    required
                      value={user.phone}
                      onChange={getVal}
                      type="number"
                      name="phone"
                      className="form-control"
                      placeholder="PHONE"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      value={user.msg}
                      onChange={getVal}
                      type="text"
                      id="message"
                      name="msg"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="type...."
                    ></textarea>
                  </div>
                </div>
              </div>
              <button  onClick={()=>setisOpen(true)} type="submit" className="btn btn-outline-light my-3">
                Submit
              </button>
            </form>

            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>JIND,126102, HARYANA</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+91 90687-00536</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>rajesh.samberwal10@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col mx-lg-5">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1khabdQzmQ2W-M0Dvz0itWHuKoZg&hl=en"
                width="1000"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Modal open={isOpen} onClose={()=>setisOpen(false)}> 
        <h1 className="text-center mb-5 emoji"> 🤩 </h1>
        <h1 className="text-center ThankYou"> Thank You </h1>
       </Modal>
       
      <section className="footer mt-4">
        <p className="text-center">Copyright ©2021 All rights reserved </p>
      </section>
    </div>
  
  );
};

export default Contact;
