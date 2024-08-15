var loadingNo = document.querySelector(".loading-no span");

var grow = 0;
setInterval(() => {
    if (grow < 100) {
        loadingNo.innerHTML = grow++
    } else {
        loadingNo.innerHTML = grow;

    }
}, 45);
function loadAndLandingPageAnimation() {

    var tl = gsap.timeline();

    tl.from(".loader", {
        y: 200,
        scaleY: 0.3,
        scaleX: 0.7,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: 0.2,
        borderRadius: "30vw"
    })

    tl.from(".row-loader h1", {
        y: 200,
        stagger: 0.29,
        ease: Power2,
        duration: 0.5,
        delay: -0.5,
    })
    tl.from(".loading-no", {
        opacity: 0,
        delay: -0.45
    })
    tl.to(".now", {
        animationName: "anim",
        opacity: 1,
        delay: -.5,
    })
    tl.from(".load-bottum", {
        opacity: 0,
        delay: -0.5,
        repeat: 3,
        duration: .7,
        yoyo: true,

    })
    tl.to(".row-loader h1 span", {
        opacity: 0,
        stagger: -0.4,
        ease: Power2,
        duration: 0.9,
        delay: 1.1
    }, "a")
    tl.to(".row-loader h1", {
        opacity: 0,
        stagger: -0.1,
        ease: Power2,
        duration: 0.9,
        delay: 1.8
    }, "a")
    tl.to(".loading-no", {
        opacity: 0,
        delay: -0.3
    })
    tl.to(".loader", {
        y: "-100%",
        ease: Expo.easeIn,
        delay: -.7
    })
    tl.to(".loader", {
        display: "none",
        delay: -.7
    })

    // page1
    tl.from(".page1", {
        y: "100%",
        opacity: 0,
        scaleY: 0.3,
        scaleX: 0.7,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        borderRadius: "30vw"
    })

    tl.from(".hero-row h1", {
        y: 200,
        stagger: 0.29,
        ease: Power2,
        duration: 0.5,
        delay: -0.5,
    })
    tl.from(".nav-part1 h1,.nav-part2 a ,.hero-p1 h2 ", {
        x: 10,
        opacity:0,
        stagger: 0.29,
        ease: Power2,
        duration: 0.5,
        delay: -0.5,
    })
}



var menu=document.querySelector(".menu");
var Open=document.querySelector(".open");
var close=document.querySelector(".close");

Open.addEventListener("click",function(){
    menu.style.display="block";
})


loadAndLandingPageAnimation();

