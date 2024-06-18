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


document.addEventListener('DOMContentLoaded', function(){

    var counter = document.querySelector("#counter");
    var count = 50;
    var counterinterval = setInterval(function(){
        if(count<100){
            count += Math.floor(Math.random()*10);
            counter.innerHTML = count + "%";
        }
        else {
            counter.innerHTML = 100 + "%";
            clearTimeout(counterinterval);
            startloader();
        }
    },70);

    function startloader(){
        gsap.to("#loadertext h1",{
            y: -12,
            opacity: 0,
            duration: 1,
            display: "none",
            ease: "power3.out",
            delay: 0.3,
        });
        imageexplode();
    }
    function imageexplode(){
        gsap.to("#photos",{
            delay: 1.4,
            display: "block",
            onComplete: photos(),
        });
        function photos(){
            var tl = gsap.timeline();
            tl.to("#image1",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                delay: 1.4,
                onComplete: function(){
                    gsap.from("#image1 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#image2",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                onComplete: function(){
                    gsap.from("#image2 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#image3",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                delay:-0.2,
                onComplete: function(){
                    gsap.from("#image3 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#image4",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                delay:-0.2,
                onComplete: function(){
                    gsap.from("#image4 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#image5",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                delay:-0.2,
                onComplete: function(){
                    gsap.from("#image5 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#image6",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                delay:-0.2,
                onComplete: function(){
                    gsap.from("#image6 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#image7",{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                delay:-0.2,
                onComplete: function(){
                    gsap.from("#image7 img",{
                        scale: 1.3,
                        duration: 1.1,
                    });
                }
            });
            tl.to("#loader",{
                delay: 0.4,
                y: -600,
                opacity: 0,
                duration: 1.2,
                ease: "power3.in",
                onStart: function(){
                    var tl2 = gsap.timeline();
                    tl2.from("#page1",{
                        y:50,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.in",
                        delay: 0.3,
                    })
                    tl2.to("#homeimg img",{
                        scale: 1,
                        duration: 1.7,
                        ease: "power3.inOut",
                    })
                    tl2.from("#hometext h1",{
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        delay: -0.4,
                    })
                    tl2.from("#cta button",{
                        y: 20,
                        opacity: 0,
                        duration: 1.7,
                        ease: "power3.out",
                    },"<")
                    tl2.from("nav",{
                        y: -20,
                        opacity: 0,
                        duration: 1.7,
                        ease: "power3.out",
                    },"<");
                    tl2.to("#cursor",{
                        opacity: 1,
                        duration: 1.7,
                        ease: "power3.out",
                        delay: -1.19, 
                    })
                    tl2.to("#bigcursor",{
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                        delay: -1.19,
                    })
                }
            })
            tl.to("#loader",{
                display: "none",
            })
        }
        
    }
    window.addEventListener("mousemove", function(e){
        gsap.set("#cursor",{
            yPercent: -50,
            xPercent: -50,
        })
        gsap.set("#bigcursor",{
            yPercent: -50,
            xPercent: -50,
        })
        gsap.to("#cursor",{
            x: e.clientX,
            y: e.clientY,
            duration: 0.85,
        })
        gsap.to("#bigcursor",{
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
        })
    });

    var mainbutton = document.querySelector("#mainbutton");
    var cursor = document.querySelector("#cursor");
    var page2text = document.querySelector("#page2text h1");
    
    mainbutton.addEventListener("mouseover", function(){
        gsap.to(cursor,{
            scale: 12,
            backgroundColor: "#00000000",
        })
        gsap.to("#bigcursor",{
            scale: 0.1,
            borderColor: "#B4EF02",
        })
        gsap.to(mainbutton,{
            scale: 1.1,
            backgroundColor: "#B4EF02",
            color: "#000"
        })
    });
    mainbutton.addEventListener("mouseleave", function(){
        gsap.to(cursor,{
            scale: 1,
            backgroundColor: "#fff",
        })
        gsap.to("#bigcursor",{
            scale: 1,
            borderColor: "#fff",
        })
        gsap.to(mainbutton,{
            scale: 1,
            color: "#000",
            backgroundColor: "#fff",
        })
    });
    Shery.makeMagnet("#mainbutton", {
    });
    Shery.makeMagnet("#part11", {
    });
    Shery.makeMagnet("#part12 h1", {
    });
    Shery.makeMagnet("#part31", {
    });
    Shery.makeMagnet("#part32", {
    });
    Shery.makeMagnet("#navpart2", {
    });

    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            scroller: "main",
            start: "top -0.5%",
            end: "top 0%",
            toggleActions: "restart none none reverse",
        }
    });
    
    tl5.to("nav", {
        backgroundColor: "#000",
        height: "8vh",
        duration: 0.4,
    });

    tl5.to("#navpart2 ", {
        width: "7%",
        duration: 0.4,
    }, "<");

    tl5.to("nav i", {
        fontSize: "1.2vw",
        duration: 0.4,
    }, "<");

    tl5.to("#part12 h1", {
        fontSize: "1.2vw",
        duration: 0.4,
    }, "<");
    gsap.from("#page2text",{
        y: 20,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "main",
            start: "top 50%",
            end: "top 45%",
            toggleActions: "restart none none reverse",
        }
    })
    page2text.addEventListener("mouseover",function(){
        cursor.innerHTML = "Click to explore";
        cursor.style.fontSize = "0.8px";
        gsap.to(cursor,{
            scale: 20,
            backgroundColor: "#fff",
        })
        gsap.to("#bigcursor",{
            scale: 0.1,
        })
    })
    page2text.addEventListener("mouseleave",function(){
        cursor.innerHTML = "";
        gsap.to(cursor,{
            scale: 1,
            backgroundColor: "#fff",
        })
        gsap.to("#bigcursor",{
            scale: 1,
        })
    })
    var page2video = document.querySelector("#page2video video")
    page2text.addEventListener("click",function(){
        gsap.to("#page2video",{
            display: "block",
            pointerEvents: "auto",
            duration: 0.4,
            onComplete: function(){
                page2video.muted = false;
                page2video.play();
            }
        })
    })
    var cross = document.querySelector("#cross");
    cross.addEventListener("click",function(){
        gsap.to("#page2video",{
            display: "none",
            pointerEvents: "none",
            videoMuted: "true",
            duration: 0.4,
            onComplete: function(){
                page2video.muted = true;
                page2video.pause();
            }
        });
    });
})