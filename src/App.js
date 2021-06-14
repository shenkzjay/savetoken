import React, { useEffect, useRef } from "react";
import * as ROUTES from './constants/Route';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import TokenEconomics from "./components/Pages/TokenEconomics"
import TokenSale from "./components/Pages/TokenSale";
import RoadMap from "./components/Pages/Roadmap";
import Contact from "./components/Pages/Contact"
import { pageAnimation} from "./components/Animations/HomeAnim";





 /*gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);



let tl = gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});




ScrollTrigger.create({
  snap: 1 / 4 // snap whole page to the closest section!
});




/***function App() {
  return (
    <div>
      
      <Switch>
         <Route exact path={ROUTES.HOME} component={Home} />
         <Route path={ROUTES.TOKENECONOMICS} component={TokenEconomics} />
         <Route path={ROUTES.TOKENSALE} component={TokenSale} />   
          <Route path={ROUTES.ROADMAP} component={RoadMap} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          
      </Switch>
    </div>
  );
}

let page = useRef(null);
  useEffect(() => {
    pageAnimation(page)
  }, [])
*/

function App (){

  

  
  return(
     <div>
    
    <section className="panel one">
        <Home />
    </section>

   
        
   <section className="panel two">
     <TokenSale />
   </section>
        
    <section className="panel three">
    <RoadMap />
    </section> 

    <section className="panel four">
    <Contact />
    </section>   
       
  </div>
  )
}
  

 
      
  


export default App;

