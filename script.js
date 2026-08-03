// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// All animations desktop ke liye (width >= 1024px)
if (window.matchMedia("(min-width: 1024px)").matches) {

    var timelineone = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-img-mid",
            start: "top 9%",
            end: "bottom 0%",
            scrub: 1,
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
    var timelineoneview = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-img-mid",
            start: "top 9%",
            end: "top 100%",
            scrub: 1,
            // markers: true,
        }
    })
        
    timelineoneview.to(".jasmine-view", {
        zIndex:-5
     });
     timelineoneview.to(".grey-view", {
         zIndex:-5
        
     }, "<");
     timelineoneview.to(".sage-view", {
         zIndex:-5
      
     }, "<");
    timelineoneview.to(".jasmine-view", {
        opacity:0
    },"<");
    timelineoneview.to(".grey-view", {
        opacity:0
    }, "<");
    timelineoneview.to(".sage-view", {
        opacity:0
    }, "<");

    timelineone.to(".jasmine-circle", {
        top: "110vh",
        left: "50vw",
        x: "-50%",
        scale: 3.9
    },"<");
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

    // Bhai, let's fix possible issues!

    // 1. Use forward slashes for image paths in JavaScript.
    // 2. Check oc/thc/revealTargets not null.
    // 3. Defensive code to avoid uncaught errors.
    // 4. Ensure NodeLists/Arrays are handled.

    const oc = document.querySelector(".jasmine-view");
    const thc = document.querySelector(".sage-view");

    const revealTargets = document.querySelectorAll(".hero-img-top, .hero-img-mid, .hero-img-bot");

    // Use FORWARD slashes, escape parens
    const imagesOC = [
        'assets/res1dining/dinig3.webp',
        'assets/boxroom/boxroom (1) reimagined (1).webp',
        'assets/boho/bohorestaurant(10).jpeg',

    ];

    const imagesTHC = [
        'assets/res1bath/washroom(3).webp',
        'assets/res1kitch/kitchen mint.webp',
        'assets/res1livin/living10.webp'
    ];

    function triggerReveal(isEnter, imageList = []) {
        // Defensive: check if targets exist
        if (!revealTargets.length) return;
        gsap.killTweensOf(revealTargets);

        if (isEnter) {
            revealTargets.forEach((div, index) => {
                // Defensive: Check index in imageList
                const imgUrl = imageList[index] || "";
                div.style.setProperty('--reveal-img', imgUrl ? `url('${imgUrl}')` : 'none');
            });

            gsap.to(revealTargets, {
                "--opacity-before": 1,
                "--blur-after": "10px",
                "--blur-before": "0px",
                duration: 0.7,
                overwrite: true
            });
        } else {
            gsap.to(revealTargets, {
                "--opacity-before": 0,
                "--blur-after": "0px",
                "--blur-before": "20px",
                duration: 0.5,
                overwrite: true
            });
        }
    }

    // Defensive: only attach event listeners if dom nodes exist
    if (oc) {
        oc.addEventListener("mouseenter", () => triggerReveal(true, imagesOC));
        oc.addEventListener("mouseleave", () => triggerReveal(false));
    }
    if (thc) {
        thc.addEventListener("mouseenter", () => triggerReveal(true, imagesTHC));
        thc.addEventListener("mouseleave", () => triggerReveal(false));
    }

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
    timelinetwo.to(".poster", { "--before-bottom": "30%" }, "<");

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


    var moodboardtime = gsap.timeline({
        scrollTrigger: {
            trigger: ".behance-sec",
            start: "top 50%",
            end: "top 100%",
            // markers: true
        }
    });

    moodboardtime.to(".card", {
        top: "10%",
        opacity:1,
        duration: 0.3,
        stagger: 0.1
    });
    moodboardtime.to(".first-card", {
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
            start: "top 62%",
            end: "+=400",
            // markers:true,
            scrub:1

        }
    });

    var gototimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".go-to-behance-box",
            start: "top 70%",
            end:"+=300",
            // markers: true,
            scrub:5
        }
    });
    gototimeline.to(".check-txt",{
        left:"50%",
        opacity:1,
        transform: "translate(-50%,-50%)",
        duration:1
    })
    gototimeline.from(".go-to-txt1 h1",{
       y:30,
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

    behance.addEventListener("click", () => {
        window.open("https://www.behance.net/veyrainterior", "_blank");
    });


    var packettimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".foot",
            start: "top 70%",
            end: "top 10%",
            scrub: 1,
            // markers: true
        }
    });
    packettimeline.to(".packet", {
        width: "100vw",
        height: "100%",
        borderRadius: "0%",
        // transform: "translate(-50%, -100%)",
        ease: "power2.out",
        duration: 1
    });
    packettimeline.from(".let", {
        x: "-50vw",
        opacity: 0,
        transform: "translate(-50%, -50%)",
        // ease: "power2.out",
        duration: 3
    });
    packettimeline.from(".collab", {
        x: "50vw",
        opacity: 0,
        transform: "translate(-50%, -50%)",
        // ease: "power2.out",
        duration: 3
    },"<");
    var clickbtn = document.querySelector(".click-btn")
    clickbtn.addEventListener("click", () => {
        window.location.href = "./project-page.html";
    });
    

}




if (window.matchMedia("(max-width: 550px)").matches) {
    var timelineone = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-img-mid",
            start: "top 43%",
            end: "bottom 0%",
            scrub: 2,
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
    var timelineoneview = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-img-mid",
            start: "top 43%",
            end: "top 100%",
            scrub: 3,
        }
        })

    timelineoneview.to(".jasmine-view", {
        zIndex:-5
     });
     timelineoneview.to(".grey-view", {
         zIndex:-5
        
     }, "<");
     timelineoneview.to(".sage-view", {
         zIndex:-5
      
     }, "<");
    timelineoneview.to(".jasmine-view", {
        opacity:0
    },"<");
    timelineoneview.to(".grey-view", {
        opacity:0
    }, "<");
    timelineoneview.to(".sage-view", {
        opacity:0
    }, "<");


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
    timelinetwo.to(".poster", { "--before-bottom": "30%" }, "<");

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
            scrub: 1,
            start:"top 50%",
            end:"+=300",
            // markers:true

        }
    });
    var clickbtntimelinephone = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-block",
            scrub: 1,
            start: "top 30%",
            end: "top 70%",
            // markers:true
        }
    });
    clickbtntimelinephone.to(".click-btn", {
        opacity: 1,
        ease: "easein",
       
    });
    clickbtntimelinephone.from(".click-btn-txt1", {
        opacity: 0,
        y: 30,
        ease: "easein"
    }, "<");
    clickbtntimelinephone.from(".click-btn-txt2", {
        opacity: 0,
        y: 30,
        ease: "easein"
    }, "<");
    gsap.from(".project-heading", {
        opacity: 0,
        y:30,
        ease:"easein",
        scrollTrigger: {
            trigger: ".ribon-head",
            scrub: 1,
            start:"top 40%",
            end:"+=300",
            // markers:true
        }
    });
    
    const projEctsTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth-block",
            scrub: 1,
            start: "top 30%",
            end: "top 70%"
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

    var moodboardtime = gsap.timeline({
        scrollTrigger: {
            trigger: ".behance-sec",
            start: "top 80%",
            end: "top 100%",
            // markers: true
        }
    });

    moodboardtime.to(".card", {
        top: "5%",
        opacity:1,
        duration: 0.3,
        stagger: 0.1
    });
    gsap.from(".moodboard-txt span", {
        opacity: 0,
        y: -100,
        duration: 0.2,
        // stagger: 0.1,
        scrollTrigger: {
            trigger: ".moodboard-txt",
            start: "top 85%",
            end: "+=200",
            // markers:true,
            scrub:1

        }
    });
    var firstcard = document.querySelector(".first-card");
    var secondcard = document.querySelector(".second-card");
    var thirdcard = document.querySelector(".third-card");
    var fourthcard = document.querySelector(".fourth-card");

// ==========================================
// CARD DECK
// ==========================================

const cardNodes = [
    document.querySelector(".first-card"),
    document.querySelector(".second-card"),
    document.querySelector(".third-card"),
    document.querySelector(".fourth-card")
].filter(Boolean);


// Current logical order
// index 0 = TOP CARD
let cardOrder = [...cardNodes];


// ==========================================
// CONFIG
// ==========================================

const swipeThreshold = 20;

const rotationMultiplier = 0.2;
const maxDragRotation = 15;

const stackYOffset = 16;
const stackScaleStep = 0.04;


// ==========================================
// SAVE ORIGINAL CSS ROTATION
// ==========================================
//
// Example:
//
// .first-card   -> 0deg
// .second-card  -> -10deg
// .third-card   -> -5deg
// .fourth-card  -> whatever CSS says
//
// We save this so after a swipe the card
// can return to its original CSS rotation.
//

const cardBaseRotation = new Map();


function getCardRotation(card) {

    const style = getComputedStyle(card);


    // --------------------------------------
    // CSS rotate property
    // --------------------------------------

    const cssRotate = style.rotate;

    if (
        cssRotate &&
        cssRotate !== "none" &&
        cssRotate !== "0deg"
    ) {

        const match =
            cssRotate.match(
                /(-?[\d.]+)deg/
            );

        if (match) {
            return parseFloat(match[1]);
        }
    }


    // --------------------------------------
    // Fallback: CSS transform matrix
    // --------------------------------------

    const transform =
        style.transform;

    if (
        transform &&
        transform !== "none"
    ) {

        const matrix =
            new DOMMatrix(transform);

        return (
            Math.atan2(
                matrix.b,
                matrix.a
            ) *
            (180 / Math.PI)
        );
    }


    return 0;
}


// Save every card's original rotation
cardNodes.forEach(card => {

    cardBaseRotation.set(
        card,
        getCardRotation(card)
    );

});


// ==========================================
// POINTER STATE
// ==========================================

const pointerData = {

    isDown: false,

    startX: 0,
    startY: 0,

    deltaX: 0,
    deltaY: 0,

    card: null,

    pointerId: null

};


// ==========================================
// LAYOUT CARD STACK
// ==========================================
//
// TOP CARD:
// rotation = 0
//
// OTHER CARDS:
// rotation = their original CSS rotation
//
// Example:
//
// top      -> 0deg
// second   -> -10deg
// third    -> -5deg
//

function layoutCardStack(animate = true) {

    cardOrder.forEach((card, index) => {

        const scale =
            1 - index * stackScaleStep;

        const y =
            index * stackYOffset;


        // TOP CARD IS ALWAYS STRAIGHT
        //
        // Other cards retain their own
        // original CSS rotation.

        const rotation =
            index === 0
                ? 0
                : (
                    cardBaseRotation.get(card) || 0
                );


        gsap.to(card, {

            // --------------------------------
            // CENTERING
            // --------------------------------

            xPercent: -50,

            x: 0,


            // --------------------------------
            // STACK POSITION
            // --------------------------------

            y: y,


            // --------------------------------
            // STACK SCALE
            // --------------------------------

            scale: scale,


            // --------------------------------
            // ROTATION
            // --------------------------------

            rotation: rotation,


            // --------------------------------
            // STACKING ORDER
            // --------------------------------

            zIndex:
                100 - index,


            // --------------------------------
            // ANIMATION
            // --------------------------------

            duration:
                animate ? 0.35 : 0,

            ease: "power3.out"

        });

    });

}


// ==========================================
// INITIAL GSAP SETUP
// ==========================================
//
// IMPORTANT:
// Don't use CSS transform:
// translateX(-50%)
//
// GSAP handles centering using xPercent.
//

cardNodes.forEach(card => {

    gsap.set(card, {

        xPercent: -50,

        x: 0,

        y: 0,

        scale: 1,

        rotation:
            cardBaseRotation.get(card) || 0,

        transformOrigin:
            "50% 50%"

    });

});


// Initial stack
layoutCardStack(false);


// ==========================================
// ATTACH DRAG TO TOP CARD
// ==========================================

function attachDragToTopCard() {

    detachDragFromAllCards();


    const topCard =
        cardOrder[0];


    if (!topCard) return;


    topCard.style.touchAction =
        "none";


    topCard.addEventListener(
        "pointerdown",
        handlePointerDown
    );

}


// ==========================================
// DETACH DRAG FROM ALL CARDS
// ==========================================

function detachDragFromAllCards() {

    cardNodes.forEach(card => {

        card.removeEventListener(
            "pointerdown",
            handlePointerDown
        );

    });

}


// ==========================================
// POINTER DOWN
// ==========================================

function handlePointerDown(e) {

    if (pointerData.isDown) {
        return;
    }


    // Only left mouse button
    if (
        e.button !== undefined &&
        e.button !== 0
    ) {
        return;
    }


    const card =
        cardOrder[0];


    if (!card) return;


    pointerData.isDown = true;


    pointerData.startX =
        e.clientX;

    pointerData.startY =
        e.clientY;


    pointerData.deltaX = 0;
    pointerData.deltaY = 0;


    pointerData.card =
        card;


    pointerData.pointerId =
        e.pointerId;


    // Pointer capture
    try {

        card.setPointerCapture(
            e.pointerId
        );

    } catch (error) {}


    // --------------------------------------
    // LISTENERS
    // --------------------------------------

    document.addEventListener(
        "pointermove",
        handlePointerMove,
        {
            passive: false
        }
    );


    document.addEventListener(
        "pointerup",
        handlePointerUp
    );


    document.addEventListener(
        "pointercancel",
        handlePointerUp
    );

}


// ==========================================
// POINTER MOVE
// ==========================================

function handlePointerMove(e) {

    if (
        !pointerData.isDown ||
        !pointerData.card
    ) {
        return;
    }


    e.preventDefault();


    const card =
        pointerData.card;


    // --------------------------------------
    // DISTANCE
    // --------------------------------------

    pointerData.deltaX =
        e.clientX -
        pointerData.startX;


    pointerData.deltaY =
        e.clientY -
        pointerData.startY;


    // --------------------------------------
    // DRAG ROTATION
    // --------------------------------------
    //
    // Top card starts at 0deg.
    //
    // Dragging right:
    // 0 -> positive rotation
    //
    // Dragging left:
    // 0 -> negative rotation
    //

    let dragRotation =
        pointerData.deltaX *
        rotationMultiplier;


    dragRotation =
        gsap.utils.clamp(
            -maxDragRotation,
            maxDragRotation,
            dragRotation
        );


    // --------------------------------------
    // MOVE TOP CARD
    // --------------------------------------

    gsap.set(card, {

        // Keep card centered
        xPercent: -50,


        // Horizontal swipe
        x:
            pointerData.deltaX,


        // Tiny vertical movement
        y:
            pointerData.deltaY * 0.18,


        // TOP CARD ALWAYS STARTS FROM 0°
        rotation:
            dragRotation,


        // Top card full size
        scale: 1

    });

}


// ==========================================
// POINTER UP
// ==========================================

function handlePointerUp() {

    if (!pointerData.isDown) {
        return;
    }


    pointerData.isDown = false;


    // --------------------------------------
    // REMOVE LISTENERS
    // --------------------------------------

    document.removeEventListener(
        "pointermove",
        handlePointerMove
    );


    document.removeEventListener(
        "pointerup",
        handlePointerUp
    );


    document.removeEventListener(
        "pointercancel",
        handlePointerUp
    );


    const card =
        pointerData.card;


    const deltaX =
        pointerData.deltaX;


    const deltaY =
        pointerData.deltaY;


    if (!card) {
        return;
    }


    // ======================================
    // SWIPE SUCCESS
    // ======================================

    if (
        Math.abs(deltaX) >=
        swipeThreshold
    ) {


        const direction =
            deltaX > 0
                ? 1
                : -1;


        // Fly completely outside screen
        const offscreenX =
            direction *
            window.innerWidth *
            1.3;


        // ----------------------------------
        // FLY OUT
        // ----------------------------------

        gsap.to(card, {

            xPercent: -50,

            x: offscreenX,

            y:
                deltaY * 0.18,


            // Keep the swipe rotation
            rotation:
                direction *
                maxDragRotation,


            scale: 1,

            duration: 0.4,

            ease: "power3.in",


            // --------------------------------
            // AFTER SWIPE
            // --------------------------------

            onComplete: () => {


                // ==============================
                // MOVE CARD TO BOTTOM
                // ==============================

                const movedCard =
                    cardOrder.shift();


                cardOrder.push(
                    movedCard
                );


                const bottomIndex =
                    cardOrder.length - 1;


                const originalRotation =
                    cardBaseRotation.get(
                        movedCard
                    ) || 0;


                // ==============================
                // RESET CARD COMPLETELY
                // ==============================
                //
                // It is now at the bottom,
                // so restore its original CSS
                // rotation.
                //

                gsap.set(movedCard, {

                    xPercent: -50,

                    x: 0,

                    y:
                        bottomIndex *
                        stackYOffset,

                    scale:
                        1 -
                        bottomIndex *
                        stackScaleStep,

                    rotation:
                        originalRotation,

                    zIndex:
                        100 - bottomIndex

                });


                // ==============================
                // RE-LAYOUT DECK
                // ==============================

                layoutCardStack(true);


                // ==============================
                // NEW TOP CARD
                // ==============================

                attachDragToTopCard();

            }

        });

    }


    // ======================================
    // SWIPE FAILED
    // ======================================

    else {


        // Since this card is the top card,
        // it must return to 0deg.

        gsap.to(card, {

            xPercent: -50,

            x: 0,

            y: 0,

            scale: 1,

            rotation: 0,

            duration: 0.4,

            ease:
                "elastic.out(1, 0.6)"

        });

    }


    // Clear
    pointerData.card = null;

}


// ==========================================
// START DECK
// ==========================================

attachDragToTopCard();

var gototimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".go-to-behance-box",
        start: "top 70%",
        end:"+=300",
        // markers: true,
        scrub:5
    }
});
gototimeline.to(".check-txt",{
    left:"35%",
    opacity:1,
    transform: "translate(-50%,-50%)",
    duration:1
})
gototimeline.from(".go-to-txt1 h1",{
   y:30,
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

behance.addEventListener("click", () => {
    window.open("https://www.behance.net/veyrainterior", "_blank");
});

var packettimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".foot",
        start: "top 95%",
        end: "top 10%",
        scrub: 1,
        // markers: true
    }
});
packettimeline.to(".packet", {
    width: "100vw",
    height: "100%",
    borderRadius: "0%",
    transform: "translate(-50%, -50%)",
    ease: "power2.out",
    duration: 1
});
packettimeline.from(".let", {
    x: "-50vw",
    opacity: 0,
    transform: "translate(-50%, -50%)",
    // ease: "power2.out",
    duration: 3
});
packettimeline.from(".collab", {
    x: "50vw",
    opacity: 0,
    transform: "translate(-50%, -50%)",
    // ease: "power2.out",
    duration: 3
},"<");

var clickbtn = document.querySelector(".click-btn")
clickbtn.addEventListener("click", () => {
    window.location.href = "./project-page.html";
});


}