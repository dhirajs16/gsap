const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});




gsap.from("#page1 #box1", {
    delay: 0.5,
    scale: 0,
    rotation: 360,
    duration: 1
})


gsap.from("#page2 #box2", {
    scale: 0,
    rotation: 360,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 #box2",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 60%",
        scrub: 3
    }
})



gsap.from("#page3 #box3", {
    scale: 0,
    rotation: 360,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 #box3",
        scroller: "body",
        markers: true,
        start: "top 90%",
        end: "top 60%",
        scrub: 3
    }
})