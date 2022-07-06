import React from 'react'
import {fireClay} from '../../Data';
import ProductVariants from '../ProductVariants/ProductVariants'
export default function FireClay() {
  return (
    <div className='FireClay'>
        <div className="BannerPart">
    <div className="row-Align">
      <div className="col-Align">
        <div className="banner-text">
          <div className="Banner-Text-Inner">
            <h1>
              Fire <span className="Mods">Clay</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductVariants data={fireClay}/>
  <div className="Acid-Proof-Brick-Introduction">
    <div className="Introduction-of-Brick">
      <h1>Fire Clay</h1>
      <p>
      Refractory Fire clays & castables can be used to create the monolithic linings within all types of furnaces and kilns. They can be further classified into the following sub-categories: conventional, low iron, low cement, and insulating for installation either by gunning or manually.
      </p>
    </div>
    <div className="KeyFeaturesCard">
      <h4>Our Products</h4>
      <p>Burnt Fire Clay</p>
      <p>Unburnt Fire Clay</p>
      <p>And Other Castables</p>
    </div>
  </div>
 </div>
  )
}
