// var play = document.querySelector("#play");
// var page1 = document.querySelector("#page1");



// page1.addEventListener("mousemove", (coordinates) => {
//     gsap.to(play, {
//         x: coordinates.x,
//         y: coordinates.y
//     });
// });


// page1.addEventListener("mouseenter", () => {
//     gsap.to(play, {
//         scale: 1,
//         opacity: 1
//     });
// });

// page1.addEventListener("mouseleave", () => {
//     gsap.to(play, {
//         scale: 0,
//         opacity: 0
//     });
// });


// // gsap.to("#play", {
// //     x: 500,
// //     y: 580,
// //     duration: 3
// // })



var tl = gsap.timeline();

tl.from("nav div img, nav div a, nav div span, nav div button", {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.5
});

tl.from("#page1-content h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5
});

tl.from("#img1", {
    x: -200,
    opacity: 0,
    scale: 0.5
});

tl.from("#img2", {
    y: -200,
    opacity: 0,
    scale: 0.5
});

tl.from("#img3", {
    y: 40,
    opacity: 0,
    scale: 0.5
});

tl.from("#img4", {
    x: 100,
    opacity: 0,
    scale: 0.5
});

// // gsap.from("nav div a", {
// //     x: -100,
// //     opacity: 0,
// //     duration: 1,
// //     delay: 0.5,
// //     stagger: 0.5
// // });





