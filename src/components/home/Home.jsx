import React from "react";
import "./Home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Aluminiumindustry from "../assets/Aluminumindustry.jpg";
import Rollingmill from "../assets/Rollingmill.jpg";
import Palletindustry from "../assets/Pelletindustry.jpg";
import Cokeovenindustry from "../assets/Cokeovenindustry.jpeg";
import powergenerationindustry from "../assets/Powergenerationindustry.jpg";
import Fertilizerindustry from "../assets/Fertilizerindustry.jpg";
import spongeiron from "../assets/spongeiron.jpg";
import steelindustry from "../assets/steelindustry.jpg";
import petrochemical from "../assets/petrochemical.jpg";
import flat from '../icons/destination.png'
import badge from '../icons/badge.png'
import maintenance from '../icons/gears.png'
import SatpuraSlideOne from "../assets/SatpuraSlideOne.jpeg";
import SatpuraSlideTwo from "../assets/SatpuraSlideTwo.jpeg";
import SatpuraSlideThree from "../assets/SatpuraSlideThree.jpeg";
import highaluminaCard from '../icons/highaluminaCard.jpeg'
import insulatingbrickCard from '../icons/insulatingbrickCard.jpg'
import fireclayCard from '../icons/fireclayCard.jpeg'
import firebrick from '../icons/firebrick.jpg'
import experience from '../icons/discuss.png'
import projects from '../icons/feedback.png'
import analysis from '../icons/analysis.png'
import { Link } from "react-router-dom";
import class1 from '../icons/class1.jpeg'
export default function Home() {
  const Industrylist = [
    {
      title: "Aluminum Industry",

      image: Aluminiumindustry,
    },
    {
      title: "Rolling Mill Industry",

      image: Rollingmill,
    },
    {
      title: "Woden pallet Industry",

      image: Palletindustry,
    },
    {
      title: "Coke Oven Industry",

      image: Cokeovenindustry,
    },
    {
      title: "Power Generation Industry",

      image: powergenerationindustry,
    },
    {
      title: "Fertilizer Industry",

      image: Fertilizerindustry,
    },
    {
      title: "Integrated Steel Industry",

      image: steelindustry,
    },
    {
      title: "Petro Chemical Industry",

      image: petrochemical,
    },
    {
      title: "Sponge Iron Industry",

      image: spongeiron,
    },
  ];
  return (
    <div className="HomeContainer">
      <div className="banner-part">
        <div className="Row-Aligned">
          <div className="Col-Aligned">
            <div className="banner-Text">
              <div className="banner-Text-inner">
                <h5>
                  Since <span className="Mods">2000</span>
                </h5>
                <h1> Satpura Acid Ware</h1>
                <h5>JABALPUR, MADHYA PRADESH</h5>
                <h3>
                  Manufacturing all types of Refractories, A.R bricks, Fire Proof Bricks and many more...
                </h3>
                <Link to="/ContactUs" className="btn-1">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          <div>
            <img src={SatpuraSlideThree} alt="" />
          </div>
          <div>
            <img src={SatpuraSlideOne} alt="" />
          </div>
          <div>
            <img src={SatpuraSlideTwo} alt="" />
          </div>
        </Carousel>
      </div>

      <div className="Home-AboutUs">
        <div className="ProductContainer">
          <div className="counter">
            <div className="image">
              <img src={experience} alt="" />
            </div>
            <div className="info">
              <h3>22+</h3>
              <h5>Years Of Experience</h5>
            </div>

          </div>
          <div className="counter">
            <div className="image">
              <img src={projects} alt="" />
            </div>
            <div className="info">
              <h3>20000+</h3>
              <h5>Projects Served</h5>
            </div>

          </div>
          <div className="counter">
            <div className="image">
              <img src={analysis} alt="" />
            </div>
            <div className="info">
              <h3>200</h3>
              <h5>Million Bricks Supplied</h5>
            </div>

          </div>
        </div>

        <div className="Home-AboutUs-Intro">
          <h2>
            WELCOME TO <span className="Mods">SAW</span>{" "}
          </h2>
          <p><span className="Intro-Mod">Satpura Acid Ware also well known as SAW Jabalbur, Madhya Pradesh is in  business of bricks manufacturing since more than 22 years</span></p>
          <p>
            We Manufacture Refractory Bricks that are special form of masonry
            bricks which are chemically resistant and thermally durable. These
            are used for masonry construction and flooring which is prone to
            chemical attack such as towers in chemical plant. These bricks are
            made of raw material like clay or shale of suitable composition with
            low lime and iron content, feldspar, flint or sand and vitrified at
            high temperature.
          </p>
          <Link to="/AboutUs" className="Home-AboutUs-Intro-Button">
            Read More !
          </Link>
        </div>
      </div>
      <div className="Home-OurProducts">
        <div className="Home-Our-Products-Content">
          <h2>
            Our  <span className="Mods">Mission</span> & <span className="Mods">Vision</span>
          </h2>
          <h5 className="head3">Mission</h5>
          <p>
            As a brick manufacturing company our mission is to be successful by effectively
            & efficiently utilizing our philosophies,So that we achieve & maintain constantly
            the High Standards of Product quality & customer satisfaction.
          </p>
          <h5 className="head3">Vision</h5>
          <p> Our vision is to continue the heritage of our Company and be a manufacturer of top quality brick products.</p>
          <Link to="/AboutUs" className="OurProducts-btn01">
            READ MORE!
          </Link>
        </div>
        <div className="Home-OurProduct-Image">
          <img src={SatpuraSlideOne} alt="" />
        </div>
      </div>
      <div className="WhatWeDeal">
        <div className="Deal-Header">
          <h2>We Deal With</h2>
        </div>
        <div className="Deal-Products-Images">
          <div className="Image-Link">
            <Link to="/AcidProofBrick">
              <img src={class1} alt="" />
            </Link>
            <h5>Acid Resistant Brick</h5>
          </div>
          <div className="Image-Link">
            <Link to="/AluminaBrick">
              <img src={highaluminaCard} alt="" />
            </Link>
            <h5>Alumina Brick</h5>
          </div>
          <div className="Image-Link">
            <Link to="/FireProofBrick">
              <img src={firebrick} alt="" />
            </Link>
            <h5>Fire Proof Brick</h5>
          </div>
          <div className="Image-Link">
            <Link to="/FireInsulation">
              <img src={insulatingbrickCard} alt="" />
            </Link>
            <h5>Insulation Brick</h5>
          </div>
          <div className="Image-Link">
            <Link to="/FireClay" >
              <img src={fireclayCard} alt="" />
            </Link>
            <h5>Fire Clay & Castables </h5>
          </div>
        </div>
      </div>
      <div className="OurClient">
        <h2>INDUSTRIES WE SERVE</h2>
        <div className="OurClient-Parent">
          {Industrylist.map((Industry, index) => (
            <IndustryCard key={index} {...Industry} />
          ))}
        </div>
      </div>
      <div className="Achievements">
        <div className="Achievement-Parent">
          <div className="Achievement-Card">
            <img src={maintenance} alt="" />
            <h3>State of Art</h3>
            <p>Our facility houses top-notch machinery and high-end infrastructure</p>
          </div>
          <div className="Achievement-Card">
            <img src={flat} alt="" />
            <h3>Strategic Location</h3>
            <p>Snuggled in the heart of Madhya Pradesh,Jabalpur district,Our facility supports a smooth and seamless business function,mainly due to its connectivity </p>
          </div>
          <div className="Achievement-Card">
            <img src={badge} alt="" />
            <h3>Quality Assured</h3>
            <p>Being ISO:9001:2015 Certified,Our Facility conducts the most complex of operations efficiently and deliver an infallible quality of products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function IndustryCard(props) {
  const { title, image } = props;
  return (
    <div className="IndustryCard">
      <h5>{title}</h5>
      <img src={image} alt="" />
    </div>
  );
}
