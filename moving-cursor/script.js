// var play = document.querySelector("#box");
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


let box = document.querySelector("#box");
let page1 = document.querySelector("#page1");


page1.addEventListener("mousemove", (coordinates) => {
    gsap.to(box, {
        x: coordinates.x,
        y: coordinates.y,
        scale: 1,
    })
})

page1.addEventListener("mouseleave", () => gsap.to(box, { scale: 0, opacity: 0}));
page1.addEventListener("mouseenter", () => gsap.to(box, { scale: 1, opacity: 1}));
