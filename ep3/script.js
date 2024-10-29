gsap.from("#page1 .box", {
    delay: 0.5,
    scale: 0,
    duration: 2,
    rotation: 360
});
gsap.from("#page2 .box", {
    scale: 0,
    duration: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true,
        start: "top 20%",
        end: "top 20%",
        scrub: 3
    }
});
gsap.from("#page3 .box", {
    scale: 0,
    duration: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: "#page3 .box",
        scroller: "body",
        scrub: 3
    }
});