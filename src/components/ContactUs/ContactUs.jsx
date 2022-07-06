import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import FeatherIcon from "feather-icons-react";
import { useLocation } from "react-router-dom";
export default function ContactUs() {
  const location = useLocation();
  const [loading,setLoading] = useState(false);
  const HandleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const scriptURL = `https://v1.nocodeapi.com/tejas001/google_sheets/xhkmsXbsrKKAgzxy?tabId=Sheet1`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const form = document.forms['ContactUs']
    let data = new FormData(form)
    let row = [
      [data.get("Name"), data.get("Email"),data.get("Number"),data.get("Product"), data.get("Query")]
    ]

    console.log(row)
    var requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify(row)
    };


    //console.log(data.get("name"));
    fetch(scriptURL, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        setLoading(false);
        alert('Your Query Was Sent Successfully!');
      })
      .catch(error => {
        setLoading(false);
        alert('Failed to send your query.!');
        console.log('error', error)
      });
  }
  useEffect(() => {
    console.log(location.state);
    if(location.state){
        
    }
  }, [location])
  
  return (
    <div className="ContactUs">
      <div className="ContactUs-Image">
        <div className="container">
          <div className="row">
            <div className="bread-inner">
              <div className="bread-crumb-inner">
                <h2>CONTACT US</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContactUs-Main">
        <div className="ContactUs-Cards">
          <div className="ContactUs-Card-01">
            <h4>
              {" "}
              <FeatherIcon icon="map-pin" /> SATPURA ACID WARE & STONE WARE PIPES
            </h4>
            <p>
              {" "}
            Office Address:- Nagpur Road, Opp. Devatal Ramayan Mandir, P.O. GARHA, Jabalpur 482003.
            </p>
            <p>
              {" "}
            Site Address:- Nagpur Road, Opp. Devatal Ramayan Mandir, P.O. GARHA, Jabalpur 482003.
            </p>
          </div>
          <div className="ContactUs-Card-01">
            <h4>
              <FeatherIcon icon="phone" /> Phone No:
            </h4>
            <p>9425152102 , 9893519860 , 9425385997</p>
          </div>
          <div className="ContactUs-Card-01">
            <h4> <FeatherIcon icon="map-pin" /> Office Address</h4>
            <iframe
              title="My Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.37798705876!2d79.89587191497021!3d23.156400584885457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1f4c10dc59b%3A0x9477a0a53061a0b1!2sRamayan%20Mandir!5e0!3m2!1sen!2sin!4v1647945134305!5m2!1sen!2sin" 
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="ContactUs-Card-01">
            <h4>
              <FeatherIcon icon="mail" /> Email:
            </h4>
            <p>satpuraref1@gmail.com</p>
          </div>
        </div>
        <div className="ContactUs-Form">
          <div className="Form">
            <h1>Get in Touch </h1>
            <form name="ContactUs" onSubmit={HandleSubmit}>
              <input type="text" placeholder="Your Name..." name="Name" required />
              <input type="email" placeholder="Your Email Id..." name="Email"  required />
              <input type="text" placeholder="Your Number..." name="Number" required />
              <input type="text" value={location.state&&location.state.product} placeholder="Product name , Dimension" name="Product" />
              <textarea
                name="Query"
                id=""
                cols="100"
                rows="6"
                placeholder="Message / Details Of Product / Quantity"
                required
              ></textarea>
              <button type="submit" className="ContactUs-Button">{loading?"Sending...":"SUBMIT NOW"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
