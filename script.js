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
                        duration: 1.5,
                        ease: "power3.inOut",
                    })
                    tl2.from("#hometext h1",{
                        y: 20,
                        opacity: 0,
                        duration: 1.4,
                        delay: -0.4,
                        ease: "power3.out",
                    })
                    tl2.from("#cta button",{
                        y: 20,
                        opacity: 0,
                        duration: 1.4,
                        ease: "power3.out",
                        delay: -1.2,
                    })
                    tl2.from("nav",{
                        y: -20,
                        opacity: 0,
                        duration: 1.2,
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

})