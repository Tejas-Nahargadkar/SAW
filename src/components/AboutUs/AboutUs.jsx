import React from "react";
import "./AboutUs.css";
import Info from "../assets/Info.svg";
import isologo from "../assets/isologo.png";
import AboutusImage from "../assets/AboutusImage.jpg";
import wall from "../icons/wall.png";
import brick from '../icons/brick.png'
import nopaint from '../icons/nopaint.png'
import home from '../icons/home.png'
import savetime from '../icons/savetime.png'
import rgb from '../icons/rgb.png'
import SatpuraSlideTwo from '../assets/SatpuraSlideTwo.jpeg'
export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="AboutUs_Image">
        <div className="container">
          <div className="row">
            <div className="bread-inner">
              <div className="bread-crumb-inner">
                <h2>ABOUT US</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs-Introduction-1">
        <p>
          <h1>
            Who We <span className="Mods">Are</span> ?
          </h1>
          We are Satpura Acid Ware also well known as SAW Jabalbur, 
          Madhya Pradesh is in  business of bricks manufacturing 
          since more than 22 years.<br/>
          We are the leading manufacturer of
          A.R Bricks, All types of refractories bricks.
        </p>

        <div className="AboutUs-SubImage">
          <img src={SatpuraSlideTwo} alt="" />
        </div>
      </div>
      <div className="Features">
        <div className="Features-Col-1">
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={wall} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Our Bricks Perform Well Left Exposed</h3>
              <p>
              Bricks properties like compresive strength, water absorption,
                efflorescence, and warpage are carefully monitored to deliver
                the best qualities that make our brick capable of performing better
                when left exposed.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={brick} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Modularity</h3>
              <p>
              The modular size of bricks offers endless design options.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={nopaint} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Forget About Maintenance</h3>
              <p>
              Bricks and related products never fade, peel or rot. Therefore,
                 you will never need to paint and will hardly ever have to clean.
              </p>
            </div>
          </div>
        </div>
        <div className="Features-Col-2">
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={home} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>TimeLess Beauty</h3>
              <p>
              Bricks products never age. They last through centuries like the aqueducts in Rome.
               Brick is the material of past present & future
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={savetime} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>Time Saving</h3>
              <p>
              Bricks needs not to be plastered after installation.They can be left exposed 
                which in turn not only saves plaster,  and paint costs but also time.
              </p>
            </div>
          </div>
          <div className="Feature-Card">
            <div className="Feature-Card-icon">
              <img src={rgb} alt="" />
            </div>
            <div className="Feature-Card-Content">
              <h3>No Colour Pigment</h3>
              <p>
              The colors in bricks and related products are achieved by mixing clays and firing the 
               resulting mixture at a certain temparature. There are no artificial colors or pigments added to 
               get the required colors.  
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs-QualityBuild">
        <div className="First">
          <h1>Quality Policy</h1>

          <p>
          We always & strictly follow the Quality Control Parameters right from Sourcing of raw materials up to production of finished goods. Special attention has always been given in sourcing of other accessories related to completion of turn-key projects.
          Apart from this we are also manufacturing & Testing our products as per Indian Standards(IS) & ASTM Procedures. This Further certify ours as a Quality manufacturer. Behind each one of our quality products and services there is a dedicated team of highly trained engineers and technologist who ensure that we consistently provide the best is to offer.</p>
          <p>Our Quality Policy, Commits to comply with customer requirements and applicable standards.</p>
        </div>
      
      </div>

      <div className="Mission-Vision">
        <div className="Mission">
          <h1>
            {" "}
            <img src={Info} alt="" /> Mission
          </h1>
          <p>
          To become a Total Refractory Solutions Company by providing a comprehensive range of products and provide highest quality products & customer service. Strive to become a Technology and Market leader in the world. Be a leader in refractories and ceramics through continuous innovation, up gradation of product quality, introduction of new products and expansion of markets. Providing promising career and personal development opportunities to all employees. Achieve fair returns on capital employed by promoting productivity in all activities
          </p>
        </div>
        <div className="Vision">
          <h1>
            {" "}
            <img src={Info} alt="" /> Vision
          </h1>
          <p>
          Our aim is to provide timely supply and service after sale. We are very focused on quality, customer satisfaction and value for money. Our business philosophy dictates that we develop long-term relationship with the people we deal with.
          </p>
        </div>
      </div>
    </div>
  );
}
