var loadingNo= document.querySelector(".loading-no span");

var grow=0;
setInterval(() => {
    if(grow<100){
        loadingNo.innerHTML=grow++
    }else{
        loadingNo.innerHTML=grow;
    }
}, 40);

var tl=gsap.timeline();
tl.from(".loader",{
    y:200,
    scaleY:0.3,
    scaleX:0.7,
    ease:Expo.easeInOut,
    duration:1.5,
    delay:0.2,
    borderRadius:"15%"
})

tl.from(".row-loader h1",{
    y:200,
    stagger:0.29,
    ease:Power2,
    duration:0.5,
    delay:-0.5,
})
tl.from(".loading-no",{
    opacity:0,
    delay:-0.45
})
tl.to(".now",{
    animationName:"anim",
    opacity:1,
    delay:-.5,
})
tl.from(".load-bottum",{
    opacity:0,
    delay:-0.2,
    repeat:-1,
    duration:.7,
    yoyo:true,
  
})
tl.to(".row-loader h1 span",{
    opacity:0,
    stagger:-0.4,
    ease:Power2,
    duration:0.9,
    delay:1.1
},"a")
tl.to(".row-loader h1",{
    opacity:0,
    stagger:-0.1,
    ease:Power2,
    duration:0.9,
    delay:1.8
},"a")
tl.to(".loading-no",{
    opacity:0,
    delay:-0.3
})
tl.to(".loader",{
    y:"-100%",
    ease:Expo.easeIn,
    delay:-.3
})
tl.to(".loader",{
    display:"none"
})

