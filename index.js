var tl = gsap.timeline();
var cart = document.querySelector("#part32")
var closeButton = document.querySelector("#cartPart1 .sub1 i")
tl.to("#cartClickBox",{
    right:0,
    duration:0.3
})
tl.from("#cartClickBox  .animate",{
    x:500,
    duration:0.2,
    stagger:0.2,
    opacity:0
})
tl.pause();
cart.addEventListener("mouseover",cartAnimation)
cart.addEventListener("click",cartAnimation)
function cartAnimation() {
    tl.play();
}
closeButton.addEventListener("click",()=>{
    tl.reverse();
})