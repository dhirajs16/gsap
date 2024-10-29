var tl = gsap.timeline();

tl.from("nav", {
    delay: 0.5,
    x: -1000,
    opacity: 0,
    duration: 1
});

tl.from("nav img, #nav-elements h3, #nav-button", {

    y: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5
});

tl.from("#part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5
});

tl.from("#part1 h2", {
    y: 200,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5
});

tl.from("#part2 img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.7,
    rotation: 360
});

gsap.from("#page2 div", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page2 div",
        scroller: "body",
        markers: false,
        start: "top 97%",
        end: "top 60%",
        scrub: 3
    }
});