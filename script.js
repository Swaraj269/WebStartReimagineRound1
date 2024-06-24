window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque :nth-child(1),.marque :nth-child(3)",{
            transform:"translatex(-200%)",
            duration:25,
            repeat:-2,
            ease:"none",

        })
        gsap.to(".marque :nth-child(2)",{
            transform:"translatex(-200%)",
            duration:13,
            repeat:-2,
            ease:"none",

        })
        
    }
    else{
        gsap.to(".marque :nth-child(1),.marque :nth-child(3)",{
            transform:"translatex(100%)",
            duration:15,
            repeat:-2,
            ease:"none",

        })
        gsap.to(".marque :nth-child(2)",{
            transform:"translatex(100%)",
            duration:6,
            repeat:-2,
            ease:"none",

        })
    } 
})


gsap.from("#div11 h1",{
    y:200,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2",
        // markers:true,
        start:"top 70%"
    }
})
gsap.from("#div12 h4",{
    y:200,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2",
        // markers:true,
        start:"top 70%"
    }
    
})