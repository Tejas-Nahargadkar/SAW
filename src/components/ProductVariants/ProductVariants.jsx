import React, { useState } from 'react'
import './ProductVariants.css'
import ARclass02 from "../icons/ARclass02.jpeg";
import { X } from 'react-feather';
import { useNavigate } from 'react-router-dom';
export default function ProductVariants(props) {

  return (
    <div className="productVariants">
      <div className="head">
        <h3>Available variants</h3>
      </div>

      <div className="wrapper">
        {
          props.data.map((info,index)=><VarientCard {...info} key={index} />)
        }
      </div>

    </div>
  )
}
function VarientCard(props) {
  const { product, image, dimensions } = props;
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="Card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="name">
          <h5>{product}</h5>
        </div>
        <button onClick={() => setShowMenu(true)}>Available Dimensions</button>
      </div>
      {showMenu && <div className="Overlay">
        <div className="menu">
          <div className="top">
            <h4>Available Dimensions</h4>
            <button onClick={() => setShowMenu(false)}><X /></button>
          </div>
          <div className="wrapper">
            {dimensions.map((dimension, index) => <button key={index} onClick={() => navigate('/ContactUs',{state:{product:product+'-'+dimension }})}>{dimension} </button>)}

          </div>
        </div>
      </div>}
    </>
  )
}
