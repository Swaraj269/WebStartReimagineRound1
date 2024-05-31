const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  
  gsap.registerPlugin(ScrollTrigger);
  
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed",
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

var phanter = document.querySelector('#panther');
var homeh3 = document.querySelector('#home1 h3');
var homeh1 = document.querySelector('#home1 h1');
var homeimgcon = document.querySelector('#homeimg');
var homeimg = document.querySelector('#homeimg img');
var homebutton = document.querySelector('#home2 button');
var nav1 = document.querySelector('#navpart1');
var nav2 = document.querySelectorAll('#navpart2');
var nav3 = document.querySelector('#navpart3');
var loadertext = document.querySelector('#loadingtext');
var loadercounter = document.querySelector('#loadercounter');
var count = 0;




function loadingAndHomeAnimation(){
    var tl2 = gsap.timeline();
tl2.from("#loadingtext h1",{
    opacity: 0,
    delay: 0.6,
    duration: 0.7,
    y: 100,
    onStart: function() {
        Shery.textAnimate("#loadingtext h1" /* Element to target.*/, {
            //Parameters are optional.
            style: 1,
            y: 90,
            delay: 0.1,
            duration: 0.4,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            multiplier: 0.5,
        });
        
    }
})
tl2.from("#loadingtext h2",{
    opacity: 0,
    delay: 0.6,
    duration: 0.7,
    y: 100,
    onComplete: function(){
        var functioncounter = setInterval(function(){
            if(count<100){
                count++;
                loadercounter.innerHTML = count;
            }
            else{
                setTimeout(functioncounter);
            }
        }, 23)
    }
})
tl2.to("#loader",{
    delay: 2.6,
    opacity: 0,
    duration: 1,
    x:200,
    onComplete: function() {
        gsap.to("#page1",{
            opacity: 1,
            duration: 3.5,
        })
        gsap.from(nav1,{
            y: -200,
            duration: 0.7,
            ease: "power4.inOut",
        })
        gsap.from(nav2,{
            y: -200,
            duration: 1.2,
            ease: "power4.inOut",
        })
        gsap.from(nav3,{
            y: -200,
            duration: 1.2,
            ease: "power4.inOut",
        })
        gsap.from(homeh3,{
            duration: 1.1,
            y: 100,
            ease: "power4.inOut",
        })
        gsap.from(homeh1,{
            duration: 1.1,
            y: 600,
            ease: "power4.inOut",
        })
        gsap.from(homeimg,{
            duration: 1.5,
            y:200,
            ease: "power4.inOut",
        })
        gsap.to(homeimg,{
            duration: 1.5,
            opacity: 1,
            ease: "power4.inOut",
        })
        
        
        var tl = gsap.timeline();
        tl.to(phanter,{
            delay: 0.2,
            duration: 0.8,
            opacity: 1,
            ease: "power4.inOut",
        })
        tl.to(homebutton,{
            duration: 1,
            opacity: 1,
            ease: "power4.inOut",
        })
        
        
    }
})
tl2.to("#loader",{
    display: "none",
    
})
}

loadingAndHomeAnimation();
window.addEventListener('mousemove',function(){
    phanter.style.filter = 'drop-shadow(0 0 20px rgba(183, 238, 12, 1)) drop-shadow(0 0 5px rgba(183, 238, 12, 0.8))';
    mouseMoveTimeout = setTimeout(function() {
        phanter.style.filter = 'none';
    }, 400);
})

