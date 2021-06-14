import React from "react";
import graphyy from "../../img/graphyy.svg";
import { pageAnimation, bar, bar2, bar3, tokenHead,Count, Count2, Count3 } from "../Animations/HomeAnim";
import { useRef, useEffect} from "react"



function TokenSale(){

   // let ImgVision = useRef(null)
   // useEffect(() => {
   // pageAnimation(ImgVision)
   // })

    let progbar = useRef(null);
    useEffect(() =>{
        bar(progbar)
    })

    let progbar2 = useRef(null);
    useEffect(() =>{
        bar2(progbar2)
    })

    let progbar3 = useRef(null);
    useEffect(() =>{
        bar3(progbar3)
    })

    let TokenH = useRef(null);
    useEffect(() =>{
        tokenHead(TokenH)
    })

    let Cont1 = useRef(null);
    useEffect(() =>{
        Count(Cont1)
    })

    let Cont2 = useRef(null);
    useEffect(() =>{
        Count2(Cont2)
    })

    let Cont3 = useRef(null);
    useEffect(() =>{
        Count3(Cont3)
    })

    

    return(
        <div id="TokenSale">
            <div className="TokenSale">
                <div className="TokenSale__Head" ref={(el) => (TokenH = el)}>
                    <span>TOKEN DISTRIBUTION</span>
                </div>
            <div className="token">
                <div className="token__graph">
                    <img src={graphyy} className="akita"/>
                </div>
                
                <div className="TokenSale__bar">
                    <div>
                    <span className="pro" ref={(el => (progbar = el))}></span>
                    <span className="token__txt numCount" id="numCount" ref={(el) => (Cont1 = el)}>0</span>
                    <pre> PRESALE</pre>
                    </div>

                    <div>
                    <span className="pro2" ref={(el => (progbar2 = el))}></span>
                    <span className="token__txt numCount2" id="numCount2" ref={(el) => (Cont2 = el)}></span>
                    <pre>LOCKED</pre>
                    </div>

                    <div>
                    <span className="pro3" ref={(el => (progbar3 = el))}></span>
                    <p className="token__txt numCount3" id="numCount3" ref={(el) => (Cont3 = el)}>0</p>
                    </div>
                    
                    <br />
                    <div className="tokenSale__Price">
                    <span>*5M Save - 1BNB</span>
                  </div>

                </div>

                </div>
            </div>
        </div>
    )
}

export default TokenSale;