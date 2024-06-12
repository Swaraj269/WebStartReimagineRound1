gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  smartphone: true,
  multiplier: 1.3,
  firefoxMultiplier: 200,
  tablet: {
    smooth: true
  },
  smartphone: {
    smooth: true
  }
});

gsap.to("body", {
  autoAlpha: 1
});

locoScroll.on("scroll", ScrollTrigger.update);

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
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
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
var leftpartvideo2 = document.querySelector('.slide2 video');
var soundbox2 = document.querySelector('.slide2 .soundbox');
var soundon2 = document.querySelector(".slide2 .soundon i");
var soundoff2 = document.querySelector(".slide2 .soundoff i");
var images2 = document.querySelectorAll('.image2 img');
var leftpartvideo3 = document.querySelector('.slide3 video');
var soundbox3 = document.querySelector('.slide3 .soundbox');
var soundon3 = document.querySelector(".slide3 .soundon i");
var soundoff3 = document.querySelector(".slide3 .soundoff i");
var images3 = document.querySelectorAll('.image3 img');
var leftpartvideo4 = document.querySelector('.slide4 video');
var soundbox4 = document.querySelector('.slide4 .soundbox');
var soundon4 = document.querySelector(".slide4 .soundon i");
var soundoff4 = document.querySelector(".slide4 .soundoff i");
var images4 = document.querySelectorAll('.image4 img');
var leftpartvideo5 = document.querySelector('.slide5 video');
var soundbox5 = document.querySelector('.slide5 .soundbox');
var soundon5 = document.querySelector(".slide5 .soundon i");
var soundoff5 = document.querySelector(".slide5 .soundoff i");
var images5 = document.querySelectorAll('.image5 img');
var menu = document.querySelector("#menu");
var cross = document.querySelector("#phonecross");

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

menu.addEventListener('click', function(){
    gsap.to("#phonemenu",{
        duration: 0.4,
        transform: "translateX(0%)",
    })
    gsap.from("#phonemenu h3",{
        x: 100,
        delay: 0.25,
        duration: 0.3,
        stagger: 0.05,
    })
})
cross.addEventListener('click', function(){
    gsap.to("#phonemenu",{
        duration: 0.6,
        transform: "translateX(calc(100vh - 5vw))",
    })
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
        if(trackpercentage <= -5) trackpercentage += 20;
        track.style.transform = `translateX(${trackpercentage}%)`;
    })
    rightsidebutton.addEventListener('click', function(e) {
        if(trackpercentage >= -95) trackpercentage -= 20;
        track.style.transform = `translateX(${trackpercentage}%)`;
    })
}

thirdpagesliding();



document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#leftpart h1", {
        opacity: 0,
        y:20,
        scrollTrigger:{
            trigger: "#leftpart h1",
            scroller: "main",
            start: "top 60%",
            end: "top 50%",
            scrub:2,
        }
    })
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.from("#leftpart4 button", {
        opacity: 0,
        scrollTrigger:{
            trigger: "#leftpart",
            scroller: "main",
            start: "top 70%",
            end: "top 40%",
            scrub:2,
        }
    })
});
document.addEventListener("DOMContentLoaded", function() {
    
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


document.addEventListener("DOMContentLoaded", function() {
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
function slide1(){

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
}
slide1();

var slideIdx2 = 0;
var intervalId2 = null;


function insitializeSlide2(){
    images2[slideIdx2].classList.add("displaySlide");
    intervalId2 = setInterval(nextSlide2, 4000);
};
function showSlide2(idx){
    if(idx >= images2.length){
        slideIdx2 = 0;
    }
    else if(idx < 0){
        slideIdx2 = images2.length - 1;
    }
    images2.forEach(e => {
        e.classList.remove("displaySlide");
    });
    images2[slideIdx2].classList.add("displaySlide");
};
function prevSlide2(){
    clearInterval(intervalId2);
    slideIdx2--;
    showSlide2(slideIdx2);
};
function nextSlide2(){
    slideIdx2++;
    showSlide2(slideIdx2);
};
document.addEventListener("DOMContentLoaded", insitializeSlide2);

leftpartvideo2.addEventListener('click', function(){
    if (leftpartvideo2.muted) {
        leftpartvideo2.muted = false;
        soundoff2.style.display = 'none';
        soundon2.style.display = 'block';

    } else {
        leftpartvideo2.muted = true;
        soundon2.style.display = 'none';
        soundoff2.style.display = 'block';
    }
})
soundbox2.addEventListener('click', function(){
    if (leftpartvideo2.muted) {
        leftpartvideo2.muted = false;
        soundoff2.style.display = 'none';
        soundon2.style.display = 'block';

    } else {
        leftpartvideo2.muted = true;
        soundon2.style.display = 'none';
        soundoff2.style.display = 'block';
    }
});

var slideIdx3 = 0;
var intervalId3 = null;


function insitializeSlide3(){
    images3[slideIdx3].classList.add("displaySlide");
    intervalId3 = setInterval(nextSlide3, 4000);
};
function showSlide3(idx){
    if(idx >= images3.length){
        slideIdx3 = 0;
    }
    else if(idx < 0){
        slideIdx3 = images3.length - 1;
    }
    images3.forEach(e => {
        e.classList.remove("displaySlide");
    });
    images3[slideIdx3].classList.add("displaySlide");
};
function prevSlide3(){
    clearInterval(intervalId3);
    slideIdx3--;
    showSlide3(slideIdx3);
};
function nextSlide3(){
    slideIdx3++;
    showSlide3(slideIdx3);
};
document.addEventListener("DOMContentLoaded", insitializeSlide3);

leftpartvideo3.addEventListener('click', function(){
    if (leftpartvideo3.muted) {
        leftpartvideo3.muted = false;
        soundoff3.style.display = 'none';
        soundon3.style.display = 'block';

    } else {
        leftpartvideo3.muted = true;
        soundon3.style.display = 'none';
        soundoff3.style.display = 'block';
    }
})
soundbox3.addEventListener('click', function(){
    if (leftpartvideo3.muted) {
        leftpartvideo3.muted = false;
        soundoff3.style.display = 'none';
        soundon3.style.display = 'block';

    } else {
        leftpartvideo3.muted = true;
        soundon3.style.display = 'none';
        soundoff3.style.display = 'block';
    }
});

var slideIdx4 = 0;
var intervalId4 = null;


function insitializeSlide4(){
    images4[slideIdx4].classList.add("displaySlide");
    intervalId4 = setInterval(nextSlide4, 4000);
};
function showSlide4(idx){
    if(idx >= images4.length){
        slideIdx4 = 0;
    }
    else if(idx < 0){
        slideIdx4 = images4.length - 1;
    }
    images4.forEach(e => {
        e.classList.remove("displaySlide");
    });
    images4[slideIdx4].classList.add("displaySlide");
};
function prevSlide4(){
    clearInterval(intervalId4);
    slideIdx4--;
    showSlide4(slideIdx4);
};
function nextSlide4(){
    slideIdx4++;
    showSlide4(slideIdx4);
};
document.addEventListener("DOMContentLoaded", insitializeSlide4);

// Continue the function declaration for leftpartvideo4
leftpartvideo4.addEventListener('click', function() {
    if (leftpartvideo4.muted) {
        leftpartvideo4.muted = false;
        soundoff4.style.display = 'none';
        soundon4.style.display = 'block';
    } else {
        leftpartvideo4.muted = true;
        soundon4.style.display = 'none';
        soundoff4.style.display = 'block';
    }
});
soundbox4.addEventListener('click', function() {
    if (leftpartvideo4.muted) {
        leftpartvideo4.muted = false;
        soundoff4.style.display = 'none';
        soundon4.style.display = 'block';
    } 
    else {
        leftpartvideo4.muted = true;
        soundon4.style.display = 'none';
        soundoff4.style.display = 'block';
    }
});

// Add the missing functions for slide 5
var slideIdx5 = 0;
var intervalId5 = null;

function insitializeSlide5() {
    images5[slideIdx5].classList.add("displaySlide");
    intervalId5 = setInterval(nextSlide5, 4000);
};

function showSlide5(idx) {
    if (idx >= images5.length) {
        slideIdx5 = 0;
    } else if (idx < 0) {
        slideIdx5 = images5.length - 1;
    }
    images5.forEach(e => {
        e.classList.remove("displaySlide");
    });
    images5[slideIdx5].classList.add("displaySlide");
};

function prevSlide5() {
    clearInterval(intervalId5);
    slideIdx5--;
    showSlide5(slideIdx5);
};

function nextSlide5() {
    slideIdx5++;
    showSlide5(slideIdx5);
};

document.addEventListener("DOMContentLoaded", insitializeSlide5);

leftpartvideo5.addEventListener('click', function() {
    if (leftpartvideo5.muted) {
        leftpartvideo5.muted = false;
        soundoff5.style.display = 'none';
        soundon5.style.display = 'block';
    } 
    else {
        leftpartvideo5.muted = true;
        soundon5.style.display = 'none';
        soundoff5.style.display = 'block';
    }
});
soundbox5.addEventListener('click', function() {
    if (leftpartvideo5.muted) {
        leftpartvideo5.muted = false;
        soundoff5.style.display = 'none';
        soundon5.style.display = 'block';
    } 
    else {
        leftpartvideo5.muted = true;
        soundon5.style.display = 'none';
        soundoff5.style.display = 'block';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    
    gsap.to("#rightplace2", {
        transform: "translateY(0%)",
        opacity: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "main",
            start: "top 0%",
            end: "top -100%",
            scrub: 1,
            pin: true,
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    
    gsap.to("#rightplace62", {
        transform: "translateX(-200%)",
        opacity: 1,
        scrollTrigger: {
            trigger: "#phonepage6",
            scroller: "main",
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
        }
    });

});




