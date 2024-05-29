var phanter = document.querySelector('#panther');
var homeh3 = document.querySelector('#home1 h3');
var homeh1 = document.querySelector('#home1 h1');
var homeimgcon = document.querySelector('#homeimg');
var homeimg = document.querySelector('#homeimg img');
var homebutton = document.querySelector('#home2 button');
var nav1 = document.querySelector('#navpart1');
var nav2 = document.querySelectorAll('#navpart2');
var nav3 = document.querySelector('#navpart3');

window.addEventListener('mousemove',function(){
    phanter.style.filter = 'drop-shadow(0 0 20px rgba(183, 238, 12, 1)) drop-shadow(0 0 5px rgba(183, 238, 12, 0.8))';
    mouseMoveTimeout = setTimeout(function() {
        phanter.style.filter = 'none';
    }, 400);
})
gsap.from(nav1,{
    y: -200,
    duration: 1,
})
gsap.from(nav2,{
    y: -200,
    duration: 1,
})
gsap.from(nav3,{
    y: -200,
    duration: 1,
})
gsap.from(homeh3,{
    delay: 0.2,
    duration: 0.95,
    y: 100,
})
gsap.from(homeh1,{
    delay: 0.2,
    duration: 0.95,
    y: 600,
})
gsap.to(homeimg,{
    delay: 0.2,
    duration: 1.3,
    opacity: 1,
})
gsap.from(homeimg,{
    delay: 0.2,
    duration: 1.3,
    x:200,
})

var tl = gsap.timeline();
tl.to(phanter,{
    delay: 0.2,
    duration: 0.8,
    opacity: 1,
})
tl.to(homebutton,{
    duration: 1,
    opacity: 1,
})

