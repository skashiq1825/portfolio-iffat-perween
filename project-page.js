const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

if (window.matchMedia("(min-width: 1024px)").matches) {
    gsap.to("#page2", {
        scrollTrigger: {
            trigger: "#page2",
            pin: "#page2",
            start: "top 0%",
            end: "top -250%",
            // markers:true,
            // scrub:1
        }
    });

    var layerfnc = gsap.timeline();

    layerfnc.to("#layerlock", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5
    });

    layerfnc.to("#layer1", {
        x: "-50vw",
        // delay: 0.5
    });

    layerfnc.to("#layer2", {
        x: "50vw",

    }, "<");
    layerfnc.to("#layers", {
        zIndex: "-1"


    });
    layerfnc.to("#layerlockmain", {
        zIndex: "-1"

    }, "<");
}



if (window.matchMedia("(max-width: 550px)").matches) {
gsap.to("#page2", {
    scrollTrigger: {
        trigger: "#page2",
        pin: "#page2",
        start: "top 0%",
        end: "top -200%",
        // markers:true,
        // scrub:1
    }
});
var layerfnc = gsap.timeline();

layerfnc.to("#layerlock", {
    opacity: 0,
    duration: 0.8,
    delay: 0.5
});

layerfnc.to("#layer1", {
    x: "-50vw",
    // delay: 0.5
});

layerfnc.to("#layer2", {
    x: "50vw",

}, "<");
layerfnc.to("#layers", {
    zIndex: "-1"


});
layerfnc.to("#layerlockmain", {
    zIndex: "-1"

}, "<");

}



// linking projects..


// const link1 = document.querySelector(".frame .more");


// link1.addEventListener("click", function() {

//     window.location.href = "./cont-residential1.html"; 
// });

// const link2 = document.querySelector(".frame:nth-child(4) .more");


// link2.addEventListener("click", function() {

//     window.location.href = "./cont.html"; 
// });
