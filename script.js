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
var producttag = document.querySelector('#producttag');
var products = document.querySelector('#products');
var shopall = document.querySelector('#shop');
var protein = document.querySelector('#protein');
var creatine = document.querySelector('#creatine');
var BCCA = document.querySelector('#BCCA');
var clothing = document.querySelector('#clothing');
var accessories = document.querySelector('#accessories');
var productphoto = document.querySelector('#productphoto img');
var swiperSlider = document.querySelector('#swiper-slide');
var leftsidebutton = document.querySelector('#leftsidebutton');
var rightsidebutton = document.querySelector('#rightsidebutton');
var leftparth1 = document.querySelector('#leftpart h1');
var video = document.querySelector('#mainVideo');
var liftpart = document.querySelector('#liftpart');
var videocursor = document.querySelector('#videocursor');
var rightpart = document.querySelector('#rightpart');
var images = document.querySelectorAll('.image img');
var leftpartvideo = document.querySelector('.slideleftpart video');
var soundbox = document.querySelector('.soundbox');
var soundon = document.querySelector(".soundbox .soundon i");
var soundoff = document.querySelector(".soundbox .soundoff i");

function loadingAndHomeAnimation(){
    var tl2 = gsap.timeline();
tl2.from("#loadingtext h1",{
    opacity: 0,
    delay: 0.3,
    duration: 0.3,
    y: 100,
    onStart: function() {
        Shery.textAnimate("#loadingtext h1" /* Element to target.*/, {
            //Parameters are optional.
            style: 1,
            y: 90,
            delay: 0.06,
            duration: 0.001,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            multiplier: 0.3,
        });
        
    },
})
tl2.from("#loadingtext h2",{
    opacity: 0,
    delay: 2,
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
        }, 20)
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

function productmenudownanimation(){
    producttag.addEventListener('mouseover',function(){
        gsap.to("#products",{
            y:"100%",
            duration: 0.5,
            ease: "power4.inOut",
        })
    })
    products.addEventListener('mouseleave',function(){
        gsap.to("#products",{
            y:0,
            duration: 0.5,
            ease: "power4.inOut",
        })
    })
    
    shopall.addEventListener('mouseover',function(){
        gsap.to('#shopall',{
            display: 'initial',
            opacity: 1,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "initial";
        productphoto.src = "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--shopall-219a3f.jpg?v=1715186587";
    })
    shopall.addEventListener('mouseleave',function(){
        gsap.to('#shopall',{
            display: 'none',
            opacity: 0,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "none";
    })
    
    protein.addEventListener('mouseover',function(){
        gsap.to('#shopprotein',{
            display: 'initial',
            opacity: 1,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "initial";
        productphoto.src = "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--protein-eb5e33.jpg?v=1715186349";
    })
    protein.addEventListener('mouseleave',function(){
        gsap.to('#shopprotein',{
            display: 'none',
            opacity: 0,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "none";
    })
    
    creatine.addEventListener('mouseover',function(){
        gsap.to('#shopcreatine',{
            display: 'initial',
            opacity: 1,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "initial";
        productphoto.src = "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--creatine-e7ea9c.jpg?v=1715186354";
    })
    creatine.addEventListener('mouseleave',function(){
        gsap.to('#shopcreatine',{
            display: 'none',
            opacity: 0,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "none";
    })
    
    BCCA.addEventListener('mouseover',function(){
        gsap.to('#shopBCCA',{
            display: 'initial',
            opacity: 1,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "initial";
        productphoto.src = "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--bcaa-c241d8.jpg?v=1715186359";
    })
    BCCA.addEventListener('mouseleave',function(){
        gsap.to('#shopBCCA',{
            display: 'none',
            opacity: 0,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "none";
    })
    
    clothing.addEventListener('mouseover',function(){
        gsap.to('#shopclothing',{
            display: 'initial',
            opacity: 1,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "initial";
        productphoto.src = "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--tshirt-88de72.jpg?v=1715186364";
    })
    clothing.addEventListener('mouseleave',function(){
        gsap.to('#shopclothing',{
            display: 'none',
            opacity: 0,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "none";
    })
    
    accessories.addEventListener('mouseover',function(){
        gsap.to('#shopaccessories',{
            display: 'initial',
            opacity: 1,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "initial";
        productphoto.src = "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--Metal-Shaker-53da01.jpg?v=1715247352";
    })
    accessories.addEventListener('mouseleave',function(){
        gsap.to('#shopaccessories',{
            display: 'none',
            opacity: 0,
            duration: 0.2,
            ease: "bounce.inOut",
        })
        productphoto.style.display = "none";
    })
}

productmenudownanimation();

function secondpageanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
    const options = {
        threshold: 0.7
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const show1 = entry.target.querySelector(".show1");
            const show2 = entry.target.querySelector(".show2");
            if (entry.isIntersecting) {
                gsap.to(show1, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                });
                gsap.to(show2, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                });
            } else {
                gsap.to(show1, {
                    y: 50,
                    opacity: 0,
                    scale: 0,
                    duration: 0.4
                });
                gsap.to(show2, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.3
                });
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, options);
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
        observer.observe(slide);
    });
var page2 = document.querySelector('#page2');
let mouseMoveTimeout;


function onMouseStop() {
  gsap.to('#seccursor', {
    opacity: 0, 
    duration: 0.2,
  });
}


function onMouseMove(e) {
  clearTimeout(mouseMoveTimeout);

  mouseMoveTimeout = setTimeout(onMouseStop, 500);

  gsap.to('#seccursor', {
    opacity: 1,
    x: e.x,
    y: e.y,
    duration: 0.2,
  });
}

page2.addEventListener('mousemove', onMouseMove);

    page2.addEventListener('wheel',function(){
        gsap.to('#seccursor',{
            opacity: 0,
        })
    })
    window.addEventListener('drag',function(){
        gsap.to('#seccursor',{
            opacity: 0,
        })
    })
    page2.addEventListener('mouseleave',function(){
        gsap.to('#seccursor',{
            opacity: 0,
        })
    })
}

secondpageanimation();

function thirdpagesliding(){
    const track = document.querySelector('#productslist');

    let isDragging = false;
    let startX = 0;
    let prevPercentage = 0;
    const minPercentage = -95;
    const maxPercentage = 0;


    window.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        track.dataset.mouseDownAt = startX;
    });

    window.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        const mouseDelta = e.clientX - startX;
        const maxDelta = window.innerWidth;

        const percentage = (mouseDelta / maxDelta) * 100;
        let nextPercentage = prevPercentage + percentage;

        if (nextPercentage < minPercentage) {
            nextPercentage = minPercentage;
        } else if (nextPercentage > maxPercentage) {
            nextPercentage = maxPercentage;
        }

        track.dataset.percentage = nextPercentage;

        track.style.transform = `translateX(${nextPercentage}%)`;
    });

    window.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        
        isDragging = false;
        prevPercentage = parseFloat(track.dataset.percentage);
    });


    window.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });

    var trackpercentage = 0;
    leftsidebutton.addEventListener('click', function(e) {
        if(trackpercentage >= -95) trackpercentage -= 20;
        track.style.transform = `translateX(${trackpercentage}%)`;
    })
    rightsidebutton.addEventListener('click', function(e) {
        if(trackpercentage <= -5) trackpercentage += 20;
        track.style.transform = `translateX(${trackpercentage}%)`;
    })
}

thirdpagesliding();


gsap.from("#leftpart h1", {
    opacity: 0,
    y:200,
    duration: 1.3,
    scrollTrigger:{
        trigger: "#leftpart",
        scroller: "main",
        start: "top 60%",
        end: "top 15%",
        scrub: true,
    }
})
gsap.from(".line img", {
    opacity: 0,
    width: "0",
    duration: 1.3,
    scrollTrigger:{
        trigger: "#leftpart",
        scroller: "main",
        start: "top 60%",
        end: "top 15%",
        scrub: true,
    }
})
gsap.from("#leftpart4 button", {
    opacity: 0,
    duration: 1.3,
    scrollTrigger:{
        trigger: "#leftpart",
        scroller: "main",
        start: "top 60%",
        end: "top 15%",
        scrub: true,
    }
})
video.addEventListener('click',function(){
    if(video.muted){
        gsap.to(liftpart, {
            opacity: 0,
            duration: 0.2,
        }) 
    }
    else{
        gsap.to(liftpart, {
            opacity: 1,
            duration: 0.2,
        })
    }
})
liftpart.addEventListener('click',function(){
    if(video.muted){
        gsap.to(liftpart, {
            opacity: 0,
            duration: 0.2,
        }) 
    }
    else{
        gsap.to(liftpart, {
            opacity: 1,
            duration: 0.2,
        })
    }
})
video.addEventListener('click', function() {
    if (this.muted) {
        this.muted = false;
    } else {
        this.muted = true;
    }
});
liftpart.addEventListener('click', function() {
    video.muted = !video.muted;
});

// window.addEventListener('mousemove', function(e){
//     const windowWidth = window.innerWidth;
//     const halfWidth = windowWidth / 2;

//     if (e.x > halfWidth) {
//         gsap.to('#videocursor',{
//             x: e.x,
//             y: e.y,
//             duration: 0.2,
//         });
//     }
// });

var swiper = new Swiper(".p5swiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".p5mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


var slideIdx = 0;
var intervalId = null;


function insitializeSlide(){
    images[slideIdx].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 4000)
};
function showSlide(idx){
    if(idx >= images.length){
        slideIdx = 0;
    }
    else if(idx < 0){
        slideIdx = images.length - 1;
    }
    images.forEach(e => {
        e.classList.remove("displaySlide");
    });
    images[slideIdx].classList.add("displaySlide");
};
function prevSlide(){
    clearInterval(intervalId);
    slideIdx--;
    showSlide(slideIdx);
};
function nextSlide(){
    slideIdx++;
    showSlide(slideIdx);
};
document.addEventListener("DOMContentLoaded", insitializeSlide);

leftpartvideo.addEventListener('click', function(){
    if (leftpartvideo.muted) {
        leftpartvideo.muted = false;
        soundoff.style.display = 'none';
        soundon.style.display = 'block';

    } else {
        leftpartvideo.muted = true;
        soundon.style.display = 'none';
        soundoff.style.display = 'block';
    }
})
soundbox.addEventListener('click', function(){
    if (leftpartvideo.muted) {
        leftpartvideo.muted = false;
        soundoff.style.display = 'none';
        soundon.style.display = 'block';

    } else {
        leftpartvideo.muted = true;
        soundon.style.display = 'none';
        soundoff.style.display = 'block';
    }
})