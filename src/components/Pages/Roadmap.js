import { useRef, useEffect, React} from "react";
import Navbar from "../Navbar/Navbar";
import map from "../../img/map.png";
import {ImgMap} from '../Animations/HomeAnim';

function Roadmap(){

    let Map = useRef(null);
    useEffect(() =>{
        ImgMap(Map)
    })
    return(
        <div id="Roadmap" className="roadmap">
        <p className="roadmap__txt">ROADMAP</p>
        <img src={map} className="map" ref={(el) => (Map = el)} />
        </div>
    )
}

export default Roadmap;