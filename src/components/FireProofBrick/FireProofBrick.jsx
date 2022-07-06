import React from "react";
import "./FireProofBrick.css";
import FireBrickCard from "../icons/FireBrickCard.png";
import {FireBrick} from '../../Data';
import ProductVariants from '../ProductVariants/ProductVariants'
export default function FireProofBrick() {
  return (
    <div className="FireProofBrick">
      <div className="BannerPart">
        <div className="row-Align">
          <div className="col-Align">
            <div className="banner-text">
              <div className="Banner-Text-Inner">
                <h1>
                  Fire Proof <span className="Mods">Brick</span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductVariants data={FireBrick} />
      <div className="Acid-Proof-Brick-Introduction">
        <div className="Introduction-of-Brick">
          <h1>Fire Proof Bricks</h1>
          <p>
            A firebrick or refractory is a block of ceramic material used in
            lining furnaces, kilns, fireboxes, and fireplaces. A refractory
            brick is built primarily to withstand high temperature, but will
            also usually have a low thermal conductivity for greater energy
            efficiency. Usually dense firebricks are used in applications with
            extreme mechanical, chemical, or thermal stresses, such as the
            inside of a wood-fired kiln or a furnace, which is subject to
            abrasion from wood, fluxing from ash or slag, and high temperatures.
            In other, less harsh situations, such as in an electric- or natural
            gas-fired kiln, more porous bricks, commonly known as "kiln bricks",
            are a better choice. They are weaker, but they are much lighter and
            easier to form and insulate far better than dense bricks. In any
            case, firebricks should not spall, and their strength should hold up
            well during rapid temperature changes..
          </p>
        </div>
        <div className="KeyFeaturesCard">
          <img src={FireBrickCard} alt="" />
        </div>
      </div>
    </div>
  );
}
