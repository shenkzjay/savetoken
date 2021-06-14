import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import { btn, Subtext, textIntro} from "../Animations/HomeAnim";







function Home(){
    
    let intro = useRef(null)
    useEffect(() => {
    textIntro(intro)
    })

    let sub = useRef(null)
    useEffect(() => {
    Subtext(sub)
    })

    let buttn = useRef(null)
    useEffect(() => {
        btn(buttn)
    })

    

    return(
        
        <div id="Home" className="Home">
         
            <header>
                <div>
              <Navbar  />
              </div>
              </header>
             
              <section className="title">
              <div className="">
                    
                  <div className="title__name" ref={(el) => (intro = el)}><p>SAVETOKEN  </p></div>
                 <div className="main__text" ref={(el) => (sub = el)}>A  decentralized exchange on the binance smart chain that accepts
                    its tokens as transaction fees.</div>

                <div className="homebtn">
                  <button className="homebtn__style" ref={(el => (buttn = el))}>Dont have a name yet</button>
                  </div>
                  </div>
                  
              </section>
              
              <section className="footer"></section>
        
        </div>
        
    )
}

export default Home;