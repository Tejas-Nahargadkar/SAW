import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Menu, PhoneCall, X } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";
import LinkDropDown from "../Link-Dropdown/LinkDropDown";
export default function Navbar() {
  const Products = [
    {
      link: "/AcidProofBrick",
      title: "Acid Proof Brick",
    },
    {
      link: "/AluminaBrick",
      title: "High Alumina Brick",
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
      title: "Fire Clay & Castables",
    },
  ];
  const location =useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [scrollPosition]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav className={`${scrollPosition > 50 ? "solid" : "transparent"}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="links">
          <Link to="/" style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':""}}>Home</Link>
          <Link  style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':""}} to="/AboutUs">About Us</Link>
          <LinkDropDown style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':""}} label={"Our Products"} links={Products} />
          <Link style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':""}} to={'/Gallery'} >Gallery</Link>
          <Link style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':"#fff"}} to="/ContactUs">Contact Us</Link>
        </div>
        <div className="info">
          <div className="col">
            <a style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':""}} href="tel:+919425152102"><PhoneCall />9425152102</a>
            <a style={{color:location.pathname==='/Gallery'&&scrollPosition < 50?'#2b3294':""}} href="tel:+919893519860"><PhoneCall />9893519860</a>

          </div>
          <div className="col">
            <div className="row">
              <Link className="Quote-Btn-1" to="/ContactUs">
                Get Quote
              </Link>
            </div>
          </div>
          <div className="col"></div>
        </div>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="menu"
        >
          <Menu />
        </button>
      </nav>
      {showMenu && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: "+10vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: "+10vw" }}
            className="sideBar"
          >
            <div className="top">
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className="menu"
              >
                <X />
              </button>
            </div>
            <div className="links">
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <LinkDropDown label={"Our Products"} links={Products} />
          <Link to={'/Gallery'} >Gallery</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>
        <div className="info">
          <div className="col">
            <a href="tel:+919425152102"><PhoneCall/>9425152102</a>
            <a href="tel:+919893519860"><PhoneCall/>9893519860</a>
            
          </div>
          <div className="col">
            <div className="row">
              <Link className="Quote-Btn-1" to="/ContactUs">
                Get Quote
              </Link>
            </div>
          </div>
         </div> 
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
