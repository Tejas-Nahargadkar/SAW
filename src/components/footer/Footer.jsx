import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import iso from "../assets/isologo.png";
import { Link } from "react-router-dom";
import LinkDropDown from "../Link-Dropdown/LinkDropDown";
import { Mail, MapPin, PhoneCall } from "react-feather";
export const Footer = () => {
  const Products = [
    {
      link: "/AcidProofBrick",
      title: "Acid Proof Brick",
    },
    {
      link: "/AluminaBrick",
      title: "Alumina Brick",
    },
    {
      link: "/FireProofBrick",
      title: "Fire Proof Brick",
    },
    {
      link: "/InsulationBrick",
      title: "Insulation Brick",
    },
    {
      link: "/FireClay",
      title: "Fire Clay",
    },
    
  ];
  return (
    <div className="Footer">
      <footer>
        <div className="Row">
          <div className="logo">
            <img src={logo} alt="" />
            <h4>Satpura Acid Ware & Stone Ware Pipes</h4>
          </div>
          <div className="quicklinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
              <LinkDropDown label={"Our Products"} links={Products} />
              </li>
              <li>
                <Link to={"/Gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/AboutUs"}>About Us</Link>
              </li>
              <li>
                <Link to={"/ContactUs"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3>Contact Us:</h3>
            <div className="column">
              
           
            <div className="Col">
              <a href="tel:+91 9425152102"><PhoneCall />+91 9425152102</a>
              <a href="tel:+91 9893519860 "><PhoneCall />+91 9893519860</a>
              <a href="tel:+91 9425385997"><PhoneCall />+91 9425385997</a>
              <a href="mailto:satpuraref1@gmail.com"><Mail />satpuraref1@gmail.com</a>
              <p className="address">
                <MapPin />  Nagpur Road, Opp. Devatal Ramayan Mandir, P.O. GARHA, Jabalpur 482003. 
              </p>
            </div>
            </div>
          </div>
         
        </div>
        <hr />
      </footer>
    </div>
  );
};
