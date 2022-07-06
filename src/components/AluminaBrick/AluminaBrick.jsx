import React from 'react'
import './AluminaBrick.css'
import AluminaCard from '../icons/AluminaCard.png'
import ProductVariants from "../ProductVariants/ProductVariants";
import {HighAluminaBrick} from "../../Data";
export default function AluminaBrick() {
  return (
    <div className='AluminaBrick'>
        <div className="BannerPart">
        <div className="row-Align">
          <div className="col-Align">
            <div className="banner-text">
              <div className="Banner-Text-Inner">
                <h1>
                  High Alumina <span className="Mods">Brick</span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductVariants data={HighAluminaBrick}/>
      <div className="Acid-Proof-Brick-Introduction">
        <div className="Introduction-of-Brick">
          <h1>High Alumina Brick</h1>
          <p>
          High-alumina refractories are made from bauxite, a naturally occurring material containing aluminum hydroxide (Al[OH]3) and kaolinitic clays. These raw materials are roasted to produce a mixture of synthetic alumina and mullite (an aluminosilicate mineral with the chemical formula 3Al2O3 · 2SiO2). 
          </p>
        </div>
        <div className="KeyFeaturesCard">
          <img src={AluminaCard} alt="" />
        </div>
      </div>
    </div>
  )
}
