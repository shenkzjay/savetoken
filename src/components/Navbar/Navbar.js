import React from "react";
import * as ROUTES from "../../constants/Route";
import {Link} from "react-scroll";
import {BrowserRouter as Router, Route} from "react-router-dom";



/***const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li className="Navbar__list__items">
          <Link to={ROUTES.HOME} className="Navbar__list__anchor">HOME</Link>
        </li>

        <li className="Navbar__list__items">
          <Link to={ROUTES.TOKENECONOMICS} className="Navbar__list__anchor">TOKEN ECONOMICS</Link>
        </li>

        <li className="Navbar__list__items">
          <Link to={ROUTES.TOKENSALE} className="Navbar__list__anchor">TOKEN SALE</Link>
        </li>
    

     
        <li className="Navbar__list--login">
          <Link to={ROUTES.ROADMAP} className="Navbar__list__anchor">ROADMAP</Link>
        </li>
          <li className="Navbar__list--Signup">
          <Link to={ROUTES.CONTACT} className="Navbar__list__anchor">CONTACT</Link>
        </li>
       </ul>
    </div>
  );
};
**/


function Navbar (){

  
        return (
    /**   <div className="nav" id="nav">
        <div className="navbar">
        <div className="logo">SAVEPUP</div>
        <div className="nav__toggle" onClick={Toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </div> **/
        <div className="nav">
        <nav className="navbar">
        <div className="brand-title">SAVETOKEN</div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

       
      </nav>
      
         
        <div className="navbar-links" >
          <Router>
            <ul className="navigation__list">

            <Link
              activeClass="active"
              to="TokenSale"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              TOKENSALE</Link>

              <Link
              activeClass="active"
              to="Roadmap"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              ROADMAP </Link>



            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-item"
            >
              CONTACT </Link>
            </ul>
          </Router>
        </div>
      </div>
      
      
    
  
    )


    

  }
window.onload=function(){
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
}



export default Navbar;