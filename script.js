// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


  
    
    

  var timelineone = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-img-mid",
            start: "top 9%",
            end: "bottom 0%",
            scrub: true,
            // markers: true,
            // add callbacks to add/remove fixed class
            onUpdate: function(self) {
                const jasmineCircle = document.querySelector('.jasmine-circle');
                if (self.progress === 1) {
                    if (!jasmineCircle.classList.contains('fixed-center')) {
                        jasmineCircle.classList.add('fixed-center');
                    }
                } else {
                    // Remove fixed position when not at the end
                    if (jasmineCircle.classList.contains('fixed-center')) {
                        jasmineCircle.classList.remove('fixed-center');
                    }
                }
            }
        }
    });

    timelineone.to(".jasmine-circle", {
        top: "110vh",
        left: "50vw",
        x: "-50%",
        scale: 3.9
    });
    timelineone.to(".grey-circle", {
        top: "110vh",
        left: "50vw",
        x: "-50%",
        scale: 2.7
    }, "<");
    timelineone.to(".sage-circle", {
        top: "110vh",
        left: "50vw",
        x: "-50%",
        scale: 2
    }, "<");
    timelineone.to(".grey-circle", { opacity: 0 });
    timelineone.to(".sage-circle", { opacity: 0 }, "<");
    const style = document.createElement('style');
    style.innerHTML = `
    .jasmine-circle.fixed-center {
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) scale(3.9) !important;
        /* z-index: 1000; */
        pointer-events: auto;
    }
    `;
    document.head.appendChild(style);

    // TIMELINE TWO
    var timelinetwo = gsap.timeline({
        scrollTrigger: {
            trigger: ".detail-txt",
            start: "top 70%",
            end: "+=3000",
            scrub: 3,
        }
    });
    timelinetwo.to(".style-txt-box", { right: "80%" });
    timelinetwo.to(".poster", { scale: 1.4 }, "<");
    timelinetwo.to(".poster-small", { top: "20vh" }, "<");

    // gsap.to(".circle-hub", {
    //     backgroundColor: "#F5EFE1",
    //     scrollTrigger: {
    //         trigger: ".detail-txt",
    //         start: "top 30%",
    //         end: "top 100%", 
    //         scrub: 1,
            
    //     }
    // });

    gsap.to(".ribon", {
        left: "-50%",
        scrollTrigger: {
            trigger: ".ribon-head",
            start: "top 85%",
            end: "+=3000",
            scrub: 3,
        }
    });

    // TIMELINE THREE
    var timelinethree = gsap.timeline({
        scrollTrigger: {
            trigger: ".ribon-head",
            start: "top 30%",
            end: "+=300",
            scrub: 1,
            // markers:true
        }
    });
    // timelinethree.to(".circle-hub", { backgroundColor: "#EBF4EA" });
    timelinethree.to(".jasmine-circle", { backgroundColor: "#E5EEE4" }, "<");



// Set up particle selectors as an array for group animation and movement

gsap.to(".jasmine-circle", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".fifth-block",
        scrub: 1
    }
});
gsap.to(".click-btn", {
    opacity: 1,
    ease:"easein",
    scrollTrigger: {
        trigger: ".fifth-block",
        scrub: 1,
        start:"top -10%",
        end:"top 70%",
        // markers:true
    }
});
gsap.from(".click-btn-txt1", {
    opacity: 0,
    y:30,
    ease:"easein",
    scrollTrigger: {
        trigger: ".fifth-block",
        scrub: 1,
        start:"top -10%",
        end:"top 70%",
        // markers:true
    }
},"<0.2");
gsap.from(".click-btn-txt2", {
    opacity: 0,
    y:30,
    ease:"easein",
    scrollTrigger: {
        trigger: ".fifth-block",
        scrub: 1,
        start:"top -10%",
        end:"top 70%",
        // markers:true
    }
},"<");


ScrollTrigger.matchMedia({
    "(min-width: 169px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".second-block",
                // scroller: "#main",
                start: "top 75%",
                end: "top -183%",
                // markers:true,
                scrub: 3
            }
        })
            .to(".particleP", { top: "335vh", left: "32.5vw" }, "<")
            .to(".particleROJ", { top: "335vh", left: "37vw" }, "<")

            .to(".particleECT", { top: "335vh", left: "51vw" }, "<")
            .to(".particleS", { top: "335vh", left: "66vw" }, "<");
    }
});

const golaShrinkTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".fifth-block",
        // scroller: "#main",
        start: "top 20%",
        preventOverlaps: true,
        scrub: 1,
        // markers:true
    }
});


golaShrinkTl.to(".particleP h1", { color: "#3c3c3c" }, "<");
golaShrinkTl.to(".particleROJ h1", { color: "#3c3c3c" }, "<");
golaShrinkTl.to(".particleECT h1", { color: "#3c3c3c" }, "<");
golaShrinkTl.to(".particleS h1", { color: "#3c3c3c" }, "<");



const projEctsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".fifth-block",
        scrub: 1,
        start: "top 0%",
        end: "top 80%"
    }
});

projEctsTl.from(".proj-text", { 
    opacity: 0, 
    x: 100, 
    ease: "ease", 
}, "proj")
.from(".ects-text", { 
    opacity: 0, 
    x: -100, 
    ease: "ease", 
}, "proj");


var behancetime = gsap.timeline({
    scrollTrigger: {
        trigger: ".behance-sec",
        start: "top 40%",
        end: "top 100%",
        // markers: true
    }
});

behancetime.to(".card", {
    top: "10%",
    opacity:1,
    duration: 0.3,
    stagger: 0.1
});
behancetime.to(".first-card", {
    width: "20vw",
    height:"30vw",
    duration: 0.3,
    stagger: 0.2
},"<");

var firstcard = document.querySelector(".first-card");
var secondcard = document.querySelector(".second-card");
var thirdcard = document.querySelector(".third-card");
var fourthcard = document.querySelector(".fourth-card");

fourthcard.addEventListener("mouseenter",function(){
var reveal = gsap.timeline();
// Set equal left gap between all cards
const leftGap = 24; // percent, about evenly between 3% and 77% for 4 cards

reveal.to(firstcard, {
    left: "3%",
    transform: "translate(0%, 0%)",
    duration: 0.5,
    ease: "easein"
});

reveal.to(secondcard, {
    left: `${3 + leftGap}%`,
    transform: "translate(0%, 0%)",
    duration: 0.5,
    ease: "easein"
},"<0.1");
reveal.to(fourthcard, {
    left: `${3 + leftGap * 3}%`,
    transform: "translate(0%, 0%)",
    duration: 0.5,
    ease: "easein"
},"<");
reveal.to(thirdcard, {
    left: `${3 + leftGap * 2}%`,
    transform: "translate(0%, 0%)",
    duration: 0.5,
    ease: "easein"
},"<0.1");

})

gsap.from(".moodboard-txt span", {
    opacity: 0,
    y: -100,
    duration: 0.2,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: ".moodboard-txt",
        start: "top 60%",
        end: "+=400",
        // markers:true,
        scrub:true
        
    }
});

var gototimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".go-to-behance-box",
        start: "top 60%",
        end:"+=600",
        markers: true,
        scrub:1
    }
});
gototimeline.to(".check-txt",{
    left:"40%",
    opacity:1,
    transform: "translate(-50%,-50%)",
    duration:1
})
gototimeline.from(".go-to-txt1 h1",{
   y:-30,
   opacity:0
    
},"<")
gototimeline.to(".go-to-txt2 i",{
    rotate:"0deg",
    duration:3
})

gsap.to(".behance-logo", {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "none"
});
var behance = document.querySelector(".behance-logo");
behance.addEventListener("mouseenter", () => {
    gsap.to(behance, { scale: 1.2, duration: 0.3 });
});

behance.addEventListener("mouseleave", () => {
    gsap.to(behance, { scale: 1, duration: 0.3 });
});

gsap.to(".packet", {
    scrollTrigger: {
        trigger: ".foot",
        start: "top 60%",
        end: "top 10%",
        scrub: 1,
        markers: true
    },

    width: "100vw",
    height: "100%",
    borderRadius: "0%",

    transform: "translate(-50%, -50%)",
    ease: "power2.out",
    duration: 1
});