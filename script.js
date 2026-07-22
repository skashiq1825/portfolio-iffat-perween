const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// if (window.matchMedia("(min-width: 900px)").matches) {

    // Style injection
    const style = document.createElement('style');
    style.innerHTML = `
    .jasmine-circle.fixed-center {
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        pointer-events: auto;
    }
    .jasmine-circle.unpinned {
        position: absolute !important;
        /* Scroll position ke mutabiq jagah lock kar dega */
    }
    `;
    document.head.appendChild(style);

    // TIMELINE ONE
    var timelineone = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-img-mid",
            start: "top 13%",
            end: "bottom 0%",
            scrub: true,
            onUpdate: function(self) {
                const jasmineCircle = document.querySelector('.jasmine-circle');
                // Agar hum timelinefour ke aage nahi gaye hain tabhi fixed lagao
                if (self.progress === 1 && !jasmineCircle.classList.contains('unpinned')) {
                    jasmineCircle.classList.add('fixed-center');
                } else if (self.progress < 1) {
                    jasmineCircle.classList.remove('fixed-center');
                    jasmineCircle.classList.remove('unpinned');
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

    gsap.to(".circle-hub", {
        backgroundColor: "#F5EFE1",
        scrollTrigger: {
            trigger: ".detail-txt",
            start: "top 30%",
            end: "top 100%", 
            scrub: 1,
        }
    });

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
            start: "top 35%",
            end: "+=300",
            scrub: 1,
        }
    });
    timelinethree.to(".circle-hub", { backgroundColor: "#EBF4EA" });
    timelinethree.to(".jasmine-circle", { backgroundColor: "#E5EEE4" }, "<");

 // TIMELINE FOUR - (EXACT CENTER UNPIN FIX)
 var timelinefour = gsap.timeline({
    scrollTrigger: {
        trigger: ".fifth-block",
        start: "top 35%",
        end: "+=300",
        scrub: true,
        markers: true,
        onLeave: function() {
            const jasmineCircle = document.querySelector('.jasmine-circle');
            const rect = jasmineCircle.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Absolute positioning par exact vertical pixel lock karo
            jasmineCircle.style.top = (rect.top + scrollTop + (rect.height / 2)) + 'px';
            jasmineCircle.style.left = '50%';
            jasmineCircle.style.transform = 'translate(-50%, -50%) scale(2.2)';
            
            jasmineCircle.classList.remove('fixed-center');
            jasmineCircle.classList.add('unpinned');
        },
        onEnterBack: function() {
            // Jab user wapas upar aaye toh inline overrides saaf kar do
            const jasmineCircle = document.querySelector('.jasmine-circle');
            jasmineCircle.classList.remove('unpinned');
            jasmineCircle.classList.add('fixed-center');
            
            jasmineCircle.style.top = '';
            jasmineCircle.style.left = '';
            jasmineCircle.style.transform = '';
        }
    }
});

timelinefour.to(".jasmine-circle", {
    scale: 2.2
});
