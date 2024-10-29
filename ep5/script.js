gsap.to("#page1 h1", {
    transform: "translateX(-100%)",
    fontSize: 1,
    duration: 3,
    fontSize: 200,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top 0",
        end: "top -50%",
        markers: true,
        scrub: 1,
        pin: true
    }  
})