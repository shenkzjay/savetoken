//import gsap from "gsap"
//import { ScrollTrigger } from "gsap/ScrollTigger";
//Animate text

import TokenSale from "../Pages/TokenSale";

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
const ScrollToPlugin = window.ScrollToPlugin;
const Power3 = window.Power3;
const TweenMax = window.TweenMax;
const TweenLite = window.TweenLite;
const Bounce = window.Bounce;
var Cont = {val : 0}, NewVal = 750;
var Cont2 = {val : 0}, NewVal2 = 200;
var Cont3 = {val : 0}, NewVal3 = 50;


export const textIntro = title__name => {
    gsap.from(title__name, {
        xPercent: -20,
        opacity:0,
        stagger:0.2,
        duration:2,
        scale:-1,
        ease:"back"
    })
}


export const Subtext = main__text => {
    gsap.from(main__text, {
        xPercent: -20,
        opacity:0,
        stagger:0.5,
        duration:3,
        scale:-1,
        delay:1,
        ease:"back"
    })
}

/*export const pageAnimation = akita => {
    gsap.from(".akita", {
        scrollTrigger: {
          trigger: ".akita",
          scrub: true,
          start: "top bottom",
          end: "top top"
        },
      
        rotation: -720,
        ease:Power0.easeNone,
        repeat:-1,
        transformOrigin: "left center", 
        ease: "none"
      });
    }
    */

export const pageAnimation = akita => {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".akita",
             scrub: true,
             start: "top bottom",
             end: "top top"
           },
        repeat:0,
        defaults:{
            duration:3,
            ease:"expo.inOut"
        }
    })
    .to(akita, {rotateX:360, rotateY:0})
}

//Token head text animation
export const tokenHead = TokenSale__Head => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".TokenSale__Head",
                 scrub: true,
                 start: "top bottom",
                 end: "top top"
               },
               
               repeat:0,
               defaults:{
                   duration:3,
                   ease:"expo.inOut"
               }
           })
           .to(TokenSale__Head, {rotateX:360, rotateY:0})
       }
    


//Token Bars animation///////////
 export const bar = pro => {
     gsap.from(".pro", {
         scrollTrigger: {
              trigger: ".TokenSale__Head",
              scrub: true,
              start: "top bottom",
              end: "top top"
            },
            
            scaleX:0,
            transformOrigin: "left center", 
            ease: "none"
          });
        } 
        
 export const bar2 = pro2 => {
            gsap.from(".pro2", {
                scrollTrigger: {
                     trigger: ".TokenSale__Head",
                     scrub: true,
                     start: "top bottom",
                     end: "top top"
                   },
                   duration:2,
                   delay:1,
                   scaleX:0,
                   transformOrigin: "left center", 
                   ease: "none"
                 });
               }    
               
               
export const bar3 = pro3 => {
                gsap.from(".pro3", {
                    scrollTrigger: {
                         trigger: ".TokenSale__Head",
                         scrub: true,
                         start: "top bottom",
                         end: "top top"
                       },
                       delay:1,
                       scaleX:0,
                       transformOrigin: "left center", 
                       ease: "none"
                     });
                   }      
    

//Home button animation
export const btn = homebtn__style =>{
    TweenMax.to(
        ".homebtn__style", 1, {
            scale:1.1,
            repeat:-1,
            ease:Bounce.easeOut,
            yoyoEase:Power3.easeOut
        }
    )
}




// Bar number count animation
export const Count = numCount => {
    
    TweenLite.to(Cont, 5, {
        scrollTrigger: {
            trigger: ".TokenSale__Head",
            scrub: true,
            start: "top bottom",
            end: "top top"
          },
            val:NewVal,
            roundProps:"val",
            onUpdate:function(){
                document.getElementById("numCount").innerHTML = Cont.val
            }
        }

        
    )
}


export const Count2 = numCount2 => {
    
    TweenLite.to(Cont2, 5, {
        scrollTrigger: {
            trigger: ".TokenSale__Head",
            scrub: true,
            start: "top bottom",
            end: "top top",
            delay:5,
          },
            val:NewVal2,
            roundProps:"val",
            onUpdate:function(){
                document.getElementById("numCount2").innerHTML = Cont2.val
            }
        }

        
    )
}


export const Count3 = numCount3 => {
    
    TweenLite.to(Cont3, 5, {
        scrollTrigger: {
            trigger: ".TokenSale__Head",
            scrub: true,
            start: "top bottom",
            end: "top top"
          },
            val:NewVal3,
            roundProps:"val",
            onUpdate:function(){
                document.getElementById("numCount3").innerHTML = Cont3.val
            }
        }

        
    )
}


// roadmap image animation
export const ImgMap = map => {
    gsap.from(map, {
        scrollTrigger: {
            trigger: ".map",
            scrub: true,
            start: "top bottom",
            end: "top top"
          },
    
          y:20,
        opacity:0,
        duration:3,
        scale:1
     
     
    })
}