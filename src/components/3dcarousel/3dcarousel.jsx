import {Carousel} from '3d-react-carousal';
import acid3 from "../icons/alumina.jpeg";
import acid4 from "../icons/alumina3.jpeg";
import acid5 from "../icons/alumina1.jpeg";
import acid6 from "../icons/alumina4.jpeg";
import fire5 from "../icons/fire5.jpeg";
import fire6 from "../icons/fire6.jpeg";
import "./3dcarausal.css";

 export default function Hdcarausel()
 {

let slides = [
    <img  src={acid3} alt="1" />,
    <img  src={acid4} alt="2" />  ,
    <img  src={acid5} alt="3" />  ,
    <img  src={acid6} alt="4" />  ,
    <img src={fire5} alt="5" />,
    <img src={fire6} alt="6" />    ];

const callback = function(index){
    console.log("callback",index);
}
  return(<div className='gallery'>
            <h1 className='head'>Gallery</h1>
          <Carousel slides={slides} autoplay={false} interval={1000} onSlideChange={callback} arrows={true}/>
    
  </div>)


    }