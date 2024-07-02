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
                        duration: 2,
                        ease: "power4.inOut",
                    })
                    tl2.from("#hometext h1",{
                        y: 40,
                        opacity: 0,
                        duration: 1,
                        delay: -0.4,
                    })
                    tl2.from("#cta button",{
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        delay: -0.4, 
                    })
                    tl2.from("nav",{
                        y: -40,
                        opacity: 0,
                        duration: 0.8,
                    },"<");
                    tl2.from("#navmobile",{
                        y: -20,
                        opacity: 0,
                        duration: 1.3,
                    },"<");
                    tl2.to("#cursor",{
                        opacity: 1,
                        duration: 1.3,
                    });
                    tl2.to("#bigcursor",{
                        opacity: 1,
                        duration: 1.3,
                    }, ">");
                }
            })
            tl.to("#loader",{
                display: "none",
            })
        }
        
    }
    var main = document.querySelector("main");
    var cursor = document.querySelector("#cursor");
    gsap.set("#bigcursor",{
        xPercent: -50,
        yPercent: -50,
    })
    gsap.set("#cursor",{
        xPercent: -50,
        yPercent: -50,
    })
    main.addEventListener("mouseleave", function(){
        gsap.to("#cursor",{
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
        })
        gsap.to("#bigcursor",{
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
        })
    })
    main.addEventListener("mouseenter", function(){
        gsap.to("#cursor",{
            opacity: 1,
            duration: 0.2,
            ease: "power1.out",
        })
        gsap.to("#bigcursor",{
            opacity: 1,
            duration: 0.2,
            ease: "power1.out",
        })
    })
    window.addEventListener("mousemove",function(e){
        gsap.to("#cursor",{
            x: e.clientX + "px",
            y: e.clientY + "px",
            duration: 0.5,
            ease: "power1.out",
        })
        gsap.to("#bigcursor",{
            x: e.clientX + "px",
            y: e.clientY + "px",
            duration: 0.2,
            ease: "power1.out",
        })
    })

    var allbutton = document.querySelectorAll("button");
    allbutton.forEach(elem => {
        elem.addEventListener("mouseover", function(){
            gsap.to("#cursor",{
                scale: 12,
                duration: 0.5,
                backgroundColor: "#ffffff00",
                ease: "power1.out",
            })
            gsap.to("#bigcursor",{
                scale: 0.1,
                duration: 0.5,
                ease: "power1.out",
            })
        })
        elem.addEventListener("mouseleave", function(){
            gsap.to("#cursor",{
                scale: 1,
                duration: 0.5,
                backgroundColor: "#fff",
                ease: "power1.out",
            })
            gsap.to("#bigcursor",{
                scale: 1,
                duration: 0.5,
                ease: "power1.out",
            })
        })
    })

    function menuanimation() {
        var menucross = document.querySelector("#menucross");
        var part11 = document.querySelector("#part11");
        var partmob11 = document.querySelector("#partmob11");
        var pagetext = document.querySelectorAll(".pagetext");
        var menudiv = document.querySelector("#menudiv");
      
        pagetext.forEach((elem,index) =>{
          elem.addEventListener("mouseover", function() {
              gsap.to(`#behind${index}`, {
                  width: "100%",
                  duration: 0.5,
                  ease: "power1.out",
              });
          });
      
          elem.addEventListener("mouseleave", function() {
              gsap.to(`#behind${index}`, {
                  width: "0%",
                  duration: 0.5,
                  ease: "power1.out",
              });
          });
        })
        part11.addEventListener("click", function(){
          gsap.to("#menudiv", {
            width: "33.4%",
            opacity: 1,
            duration : 0.4,
          })
          gsap.to("#menucross", {
            opacity: 1,
            height: "3.6vw",
            width: "3.6vw",
            duration : 0.4,
          })
          gsap.to(".pagetext h1",{
            fontSize: "2.2vw",
            duration : 0.4,
          })
        });
        partmob11.addEventListener("click", function(){
            gsap.to("#menudiv", {
              width: "100%",
              opacity: 1,
              duration : 0.4,
            })
            gsap.to("#menucross", {
              opacity: 1,
              height: "15vw",
              width: "15vw",
              duration : 0.4,
            })
            gsap.to(".pagetext h1",{
              fontSize: "8vw",
              duration : 0.4,
            })
        });
        menudiv.addEventListener("mouseleave", function(){
          gsap.to("#menudiv", {
            width: "0%",
            opacity: 0,
            duration : 0.4,
          })
          gsap.to(".pagetext h1",{
            fontSize: "0vw",
            duration : 0.4,
          })
        });
        menucross.addEventListener("click", function(){
            gsap.to("#menudiv", {
              width: "0%",
              opacity: 0,
              duration : 0.4,
            })
            gsap.to("#menucross", {
                opacity: 1,
                height: "0vw",
                width: "0vw",
                duration : 0.4,
              })
            gsap.to(".pagetext h1",{
              fontSize: "0vw",
              duration : 0.4,
            })
        } )
      }
      
      menuanimation();
      
      function cartanimation() {
        var cartcross = document.querySelector("#cartcross");
        var part32  = document.querySelector("#part32");
        var partmob32 = document.querySelector("#partmob32");
      
        cartcross.addEventListener("click", function(){
          gsap.to("#cartdiv", {
            width: "0%",
            opacity: 0,
            duration : 0.4,
          })
          gsap.to("#cartcross", {
            opacity: 0,
            height: '0vw',
            width: '0vw',
            duration : 0.4,
          })
          gsap.to("#cartcontent", {
            opacity: 0,
            duration : 0.8,
          })
        });
        part32.addEventListener("click", function(){
          gsap.to("#cartdiv", {
            width: "30%",
            opacity: 1,
            duration : 0.4,
          })
          gsap.to("#cartcross", {
            opacity: 1,
            height: "3.6vw",
            width: "3.6vw",
            duration : 0.4,
          })
          gsap.to("#cartcontent", {
            opacity: 1,
            duration : 0.2,
          })
        });
        partmob32.addEventListener("click", function(){
            gsap.to("#cartdiv", {
              width: "100%",
              opacity: 1,
              duration : 0.4,
            })
            gsap.to("#cartcross", {
              opacity: 1,
              height: "15vw",
              width: "15vw",
              duration : 0.4,
            })
            gsap.to("#cartcontent", {
              opacity: 1,
              duration : 0.2,
            })
          });
      }
      
      cartanimation();
      
      function productanimation() {
        
        var productcross = document.querySelector("#productcross");
        var part12 = document.querySelector("#part12");
        var product = document.querySelector("#products");
      
        productcross.addEventListener("click", function(){
          gsap.to("#products",{
            transform: "translateY(-100%)",
            opacity: 0,
            duration : 0.4,
          })
        });
      
        product.addEventListener("mouseleave", function(){
          gsap.to("#products",{
            transform: "translateY(-100%)",
            opacity: 0,
            duration : 0.4,
          })
        });
        part12.addEventListener("mouseover", function(){
          gsap.to("#products",{
            transform: "translateY(0%)",
            opacity: 1,
            duration : 0.4,
          })
        });
      
        var productsname = document.querySelectorAll("#productsname h3");
        var images = [
          "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--shopall-219a3f.jpg?v=1715186587",
          "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--protein-eb5e33.jpg?v=1715186349", 
          "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--creatine-e7ea9c.jpg?v=1715186354",
          "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--bcaa-c241d8.jpg?v=1715186359",
          "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--tshirt-88de72.jpg?v=1715186364",
          "https://cdn.shopify.com/s/files/1/0690/7723/7977/t/4/assets/d543ec9c521c--Metal-Shaker-53da01.jpg?v=1715247352",
        ]
        productsname.forEach((elem,index)=>{
          elem.addEventListener("mouseover", function(){
            gsap.to(`#product${index}${index}`,{
              display: 'block',
              opacity: 1,
              duration : 0.2,
              ease: "linear",
              onComplete: function(){
                var productphoto = document.querySelector('#productphoto img');
                productphoto.style.display = 'block';
                productphoto.src = images[index];
              }
            })
          })
          elem.addEventListener("mouseleave", function(){
            gsap.to(`#product${index}${index}`,{
              display: 'none',
              opacity: 1,
              duration : 0.2,
              ease: "linear",
              onComplete: function(){
                var productphoto = document.querySelector('#productphoto img');
                productphoto.style.display = 'none';
              }
            })
          })
        })
      }

    
    
    productanimation();


    var mainbutton = document.querySelector("#mainbutton");
    var page2text = document.querySelector("#page2text h1");
    
    mainbutton.addEventListener("mouseover", function(){
        gsap.to(mainbutton,{
            scale: 1.1,
            backgroundColor: "#B4EF02",
            color: "#000"
        })
    });
    mainbutton.addEventListener("mouseleave", function(){
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
        marginLeft: "3.2vw",
        width: "9%",
        duration: 0.4,
    }, "<");

    tl5.to("nav i", {
        fontSize: "1.2vw",
        duration: 0.4,
    }, "<");

    tl5.to("#part12 h1", {
        fontSize: "0vw",
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
    var page2video = document.querySelector("#page2video video");

    page2text.addEventListener("mouseover", function(){
        cursor.innerHTML = 'Click to Explore More',
        cursor.style.color = "#010101",
        gsap.to("#cursor",{
            scale: 20,
            duration: 0.5,
            backgroundColor: "#fff",
            ease: "power1.out",
            onStart: () => {
                gsap.set("#cursor", { mixBlendMode: "normal"}); // Disable mix-blend-mode
            }
        })
        gsap.to("#bigcursor",{
            scale: 0.1,
            duration: 0.5,
            ease: "power1.out",
        })
    })
    page2text.addEventListener("mouseleave", function(){
        cursor.innerHTML = "",
        gsap.to("#cursor",{
            scale: 1,
            duration: 0.5,
            backgroundColor: "#fff",
            ease: "power1.out",
            onStart: () => {
                gsap.set("#cursor", { mixBlendMode: "difference" }); // Disable mix-blend-mode
            }
        })
        gsap.to("#bigcursor",{
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
        })
    })

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

    var navpart2 = document.querySelector('#navpart2 img');
    var navmob2 = document.querySelector('#navmob2 img');
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            scroller: "main",
            start: "top 15%",
            end: "top 0%",
            toggleActions: "restart none none reverse",
        }
    });
    tl6.to("#page2",{
        backgroundColor: "#fff",
        duration: 0.6,
    })
    tl6.to("nav",{
        backgroundColor: "#fff",
        duration: 0.4,
        onStart: function(){
            navpart2.src = "./images/blacklogo.png";
        },
        onReverseComplete: function(){
            navpart2.src = "./images/beastlife-whitelogo (1).svg";
        }
    }, "<")
    tl6.to("#navmobile",{
        backgroundColor: "#fff",
        duration: 0.4,
        onStart: function(){
            navmob2.src = "./images/blacklogo.png";
        },
        onReverseComplete: function(){
            navmob2.src = "./images/beastlife-whitelogo (1).svg";
        }
    }, "<")
    tl6.to("nav i", {
        color: "#000",
        duration: 0.4,
    }, "<");
    tl6.to("#navmobile i", {
        color: "#000",
        duration: 0.4,
    }, "<");

    gsap.from("#page3part1 h1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part1 h1",
            scroller: "main",
            start: "top 100%",
            end: "top 98%",
            toggleActions: "restart none none reverse",
        }
    });

    gsap.from("#page3part2", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part2",
            scroller: "main",
            start: "top 100%",
            end: "top 98%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part3", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part3",
            scroller: "main",
            start: "top 100%",
            end: "top 98%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part4", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part4",
            scroller: "main",
            start: "top 100%",
            end: "top 98%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part5", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part5",
            scroller: "main",
            start: "top 100%",
            end: "top 98%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part6", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part6",
            scroller: "main",
            start: "top 94%",
            end: "top 92%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part7", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part7",
            scroller: "main",
            start: "top 94%",
            end: "top 92%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part8", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part8",
            scroller: "main",
            start: "top 94%",
            end: "top 92%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#page3part9", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#page3part9",
            scroller: "main",
            start: "top 94%",
            end: "top 92%",
            toggleActions: "restart none none reverse",
        }
    });
    var productcard1 = document.querySelector(" #page3part2 .productcard");
    productcard1.addEventListener("mouseenter", function(){
        gsap.to(" #page3part2 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part2 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard1.addEventListener("mouseleave", function(){
        gsap.to("#page3part2 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part2 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    var productcard2 = document.querySelector(" #page3part3 .productcard");
    var productcard3 = document.querySelector(" #page3part4 .productcard");
    var productcard4 = document.querySelector(" #page3part5 .productcard");
    var productcard5 = document.querySelector(" #page3part6 .productcard");
    var productcard6 = document.querySelector(" #page3part7 .productcard");
    var productcard7 = document.querySelector(" #page3part8 .productcard");
    var productcard8 = document.querySelector(" #page3part9 .productcard");
    productcard2.addEventListener("mouseenter", function(){
        gsap.to(" #page3part3 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part3 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard2.addEventListener("mouseleave", function(){
        gsap.to("#page3part3 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part3 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    productcard3.addEventListener("mouseenter", function(){
        gsap.to(" #page3part4 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part4 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard3.addEventListener("mouseleave", function(){
        gsap.to("#page3part4 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part4 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    productcard4.addEventListener("mouseenter", function(){
        gsap.to(" #page3part5 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part5 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard4.addEventListener("mouseleave", function(){
        gsap.to("#page3part5 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part5 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    productcard5.addEventListener("mouseenter", function(){
        gsap.to(" #page3part6 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part6 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard5.addEventListener("mouseleave", function(){
        gsap.to("#page3part6 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part6 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    productcard6.addEventListener("mouseenter", function(){
        gsap.to(" #page3part7 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part7 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard6.addEventListener("mouseleave", function(){
        cursor.innerHTML = "",
        gsap.to("#page3part7 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part7 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    productcard7.addEventListener("mouseenter", function(){
        gsap.to(" #page3part8 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part8 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard7.addEventListener("mouseleave", function(){
        cursor.innerHTML = "",
        gsap.to("#page3part8 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part8 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    productcard8.addEventListener("mouseenter", function(){
        gsap.to(" #page3part9 .upperpart button",{
            duration: 0.5,
            transform: "translateY(-10%)",
        })
        gsap.to("#page3part9 .upperpart img",{
            duration: 0.5,
            scale: 1.05,
        })
    })
    productcard8.addEventListener("mouseleave", function(){

        gsap.to("#page3part9 .upperpart button",{
            transform: "translateY(100%)",
            duration: 0.5,
        })
        gsap.to("#page3part9 .upperpart img",{
            duration: 0.5,
            scale: 1,
        })
    })
    var buttons = document.querySelectorAll(".upperpart button");
    buttons.forEach(function(elem) {
        elem.addEventListener("mouseover", function() {
            gsap.to(elem, {
                scale: 1.1,
                backgroundColor: "#B4EF02",
                color: "#000",
            },"<");
        });

        elem.addEventListener("mouseleave", function() {
            gsap.to(elem, {
                scale: 1,
                color: "#fff",
                backgroundColor: "#000",
            },"<");
        });
    });

    gsap.from("#heading", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#heading",
            scroller: "main",
            start: "top 98%",
            end: "top 95%",
            toggleActions: "restart none none reverse",
        }
    });
    gsap.from("#blog1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: "#blog1",
            scroller: "main",
            start: "top 98%",
            end: "top 95%",
            toggleActions: "restart none none reverse",
        }
    });

    let tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            scroller: "main",
            start: "top 15%",
            end: "top 0%",
            toggleActions: "restart none none reverse",
        }
    });
    
    tl10.to("nav", {
        backgroundColor: "#000",
        height: "8vh",
        duration: 0.4,
        onStart: function(){
            navpart2.src = "./images/beastlife-whitelogo (1).svg";
        },
        onReverseComplete: function(){
            navpart2.src = "./images/blacklogo.png";
        },
    },"<");
    tl10.to("#navmobile", {
        backgroundColor: "#000",
        duration: 0.4,
        onStart: function(){
            navmob2.src = "./images/beastlife-whitelogo (1).svg";
        },
        onReverseComplete: function(){
            navmob2.src = "./images/blacklogo.png";
        },
    },"<");
    tl10.to("#navpart2 ", {
        marginLeft: "3.2vw",
        width: "9%",
        duration: 0.4,
    }, "<");

    tl10.to("nav i", {
        fontSize: "1.2vw",
        duration: 0.4,
        color: "#fff"
    }, "<");
    tl10.to("#navmobile i", {
        duration: 0.4,
        color: "#fff"
    }, "<");

    tl10.to("#part12 h1", {
        fontSize: "0vw",
        duration: 0.4,
    }, "<");

    
    gsap.matchMedia().add({
        isDesktop: "(min-width: 601px)",
        isMobile: "(max-width: 600px)"
      }, (context) => {
        let { isDesktop, isMobile } = context.conditions;
      
        let tl12 = gsap.timeline({
          scrollTrigger: {
            trigger: "#page4",
            scroller: "main",
            pin: true,
            scrub: 2,
            start: "top 0",
            end: isDesktop ? "top -370%" : "top -200%", 
          }
        });
      
        tl12.to("#page4 .card", {
          yPercent: isDesktop ? -413 : -413,
        }, "<");
      
        tl12.to("#page4 .box", {
          yPercent: isDesktop ? -440 : -440,
        }, "<");
      
        tl12.to("#page4 .name", {
          yPercent: isDesktop ? -428 : -428,
        }, "<");
      });

      var page4buttons = document.querySelectorAll(".page4buttons button");
      page4buttons.forEach(function(elem) {
        elem.addEventListener("mouseover", function() {
            gsap.to(elem, {
                scale: 1.1,
                backgroundColor: "#B4EF02",
                color: "#000",
            },"<");
        });

        elem.addEventListener("mouseleave", function() {
            gsap.to(elem, {
                scale: 1,
                color: "#000",
                backgroundColor: "#fff",
            },"<");
        });
    });


    var cardVideos = document.querySelectorAll(".card video");
        cardVideos.forEach(function(video, index) {
            video.addEventListener("click", function() {
                // Mute all other videos
                cardVideos.forEach(function(otherVideo, index2) {
                    if (index !== index2) {
                        otherVideo.muted = true;
                    }
                });
                video.muted = !video.muted;
            });
            video.addEventListener("mouseover", function(){
                cursor.innerHTML = 'Click to Mute/Unmute',
                cursor.style.color = "#010101",
                gsap.to("#cursor",{
                    scale: 20,
                    duration: 0.5,
                    backgroundColor: "#fff",
                    ease: "power1.out",
                    onStart: () => {
                        gsap.set("#cursor", { mixBlendMode: "normal"}); // Disable mix-blend-mode
                    }
                })
                gsap.to("#bigcursor",{
                    scale: 0.1,
                    duration: 0.5,
                    ease: "power1.out",
                })
            })
            video.addEventListener("mouseleave", function(){
                cursor.innerHTML = "",
                gsap.to("#cursor",{
                    scale: 1,
                    duration: 0.5,
                    backgroundColor: "#fff",
                    ease: "power1.out",
                    onStart: () => {
                        gsap.set("#cursor", { mixBlendMode: "difference" }); // Disable mix-blend-mode
                    }
                })
                gsap.to("#bigcursor",{
                    scale: 1,
                    duration: 0.5,
                    ease: "power1.out",
                })
            })
        });


    var page5content = document.querySelectorAll('#page5content h1');
    var page5content1 = document.querySelector('#page5content h2');
    page5content.forEach(elem => {
        gsap.from(elem,{
            y: 200,
            opacity: 0,
            duration: 0.6,
            scrollTrigger: {
                trigger: "#page5content",
                scroller: "main",
                start: "top 88%",
                end: "top 85%",
                toggleActions: "restart none none none",
            }
        })
    })
    gsap.from(page5content1,{
        y: 200,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#page5content",
            scroller: "main",
            start: "top 88%",
            end: "top 85%",
            toggleActions: "restart none none none",
        }
    })

    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to("#move1",{
                transform:"translatex(-60%)",
                duration:50,
                repeat: -1,
                ease:"linear",
      
            })
            
        }
        else{
            gsap.to("#move1",{
                transform:"translatex(20%)",
                duration:50,
                repeat:-1,
                ease:"linear",
      
            })
        } 
    })

    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let st = window.scrollY;
        if (st > lastScrollTop) {
            gsap.to("#move1", {
                x: "-60%",
                duration: 50,
                repeat: -1,
                ease: "linear"
            });
        } else {
            gsap.to("#move1", {
                x: "20%",
                duration: 50,
                repeat: -1,
                ease: "linear"
            });
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    });




    gsap.from("#page4part1",{
        y: 200,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#page4part1",
            scroller: "main",
            start: "top 99%",
            end: "top 96%",
            toggleActions: "restart none none reverse",
        }
    })
    gsap.from(".card video",{
        y: 200,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#page4part1",
            scroller: "main",
            start: "top 99%",
            end: "top 96%",
            toggleActions: "restart none none reverse",
        }
    })

    var productcard = document.querySelectorAll('.productcard');

    productcard.forEach( (elem, index)=>{
        elem.addEventListener("click", function(){
            gsap.to(` #page3part${index+2} .upperpart button`,{
                duration: 0.5,
                backgroundColor: "#B7EE0C",
                color: "#000",
                transform: "translateY(-10%)",
            })
            gsap.to(` #page3part${index+2} .upperpart button`,{
                duration: 0.5,
                scale: 1.05,
            })
        })
    })


})