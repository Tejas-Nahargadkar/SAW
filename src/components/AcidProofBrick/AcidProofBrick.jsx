import React from "react";
import "./AcidProofBrick.css";
import ARclass1Png from "../icons/ARclass1Png.png"
import ARclass2Png from "../icons/ARclass2Png.png"
import chimney from "../assets/chimney.jpg";
import AcidStorageTank from "../assets/AcidStorageTank.jpg";
import { Check } from "react-feather";
import ARFloor from '../icons/ARFloor.jpg'
import ProductVariants from "../ProductVariants/ProductVariants";
import image04 from '../assets/Image04.jpeg'
import {AcidBrick} from "../../Data";
export default function AcidProofBrick() {
  return (
    <div className="AcidProofBrick">
      <div className="BannerPart">
        <div className="row-Align">
            <div className="banner-text">
              <div className="Banner-Text-Inner">
                <h1>
                  Acid Proof <span className="Mods">Brick</span>{" "}
                </h1>
              </div>
            </div>
          
        </div>
      </div>
      <ProductVariants data={AcidBrick}/>
      <div className="Acid-Proof-Brick-Introduction">
        <div className="Introduction-of-Brick">
          <h1>Acid Resistant Bricks</h1>
          <p>
            Acid brick or acid resistant brick is a specially made form of
            masonry brick that is chemically resistant and thermally durable.
            Acid brick is created from high silica shale and fired at higher
            temperatures than those used for conventional brick. Some
            manufacturers create the brick by baking it for over a week. It has
            an average compressive strength of approximately 23,000 PSI.
          </p>

          <p>
            The ASTM specification C-279 creates specifications for acid brick
            properties. Acid brick is not resistant against hydrofluoric acid or
            strong alkali.
          </p>
        </div>
        <div className="KeyFeaturesCard">
          <img src={image04} alt="" />
        </div>
      </div>
      <div className="WaterResistant">
        <h2>Water Absorption</h2>
        <div className="WaterResistent-Row">
          <div className="WaterResistant-Row-Card">
            <div className="WaterResistant-Row-Card-Content">
            <h2>Class I</h2>
            <p>
              <Check /> Water Absorption &#60; 1%
            </p>
            <p>
              <Check /> Cold Crushing Strength (C.C.S) &#62; 750 kg/cm sq
            </p>
            <p>
              <Check /> Modulus Of Rupture &#62; 175 kg/cm sq
            </p>
            <p>
              <Check /> Acid Resistant &#60; 1 %
            </p>
            </div>
           <div className="WaterResistant-Row-Card-Image">
             <img src={ARclass1Png} alt="" />
           </div>
          </div>
          <div className="WaterResistant-Row-Card">
            <div className="WaterResistant-Row-Card-Content">
            <h2>Class II</h2>
            <p>
              <Check /> Water Absorption 	&#60; 4%
            </p>
            <p>
              <Check /> Cold Crushing Strength (C.C.S) &#62; 600 kg/cm sq
            </p>
            <p>
              <Check />Modulus Of Rupture &#62; 90 kg/cm sq 
            </p>
            <p>
              <Check /> Acid Resistant &#60; 4 %
            </p>
            </div>
           <div className="WaterResistant-Row-Card-Image">
           <img src={ARclass2Png} alt="" />
           </div>
          </div>
        </div>
      </div>
      <div className="Application">
        <h1>Application Areas</h1>
        <div className="Application-Parent">
          <div className="Area-Card">
            <img src={chimney} alt="" />
            <h3>Chimney of Thermal Power Plants</h3>
          </div>
          <div className="Area-Card">
            <img src={AcidStorageTank} alt="" />
            <h3>Acid Storage Tank</h3>
          </div>
          <div className="Area-Card">
            <img src={ARFloor } alt="" />
            <h3>Floor</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
