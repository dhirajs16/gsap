// video 2

// gsap.registerPlugin(ScrollTrigger);//PascalCase
// gsap.to("#box", {
//     x: 700,
//     duration: 4,
    // scrollTrigger: {               //camelCase
//         trigger: "#box",
//         markers: true,
//         start: "top bottom",
//         // end: "bottom top",
//         // to dynamically change the gap between start and end markers as per the change in
//         // height of trigger: "selector"
//         // It works when the height of box is relative like in vh...
//         end : () => `+=${document.querySelector("#box").offsetHeight}`,

//         scrub: 3
//     }
// });



// Video 2 playlist link: https://www.youtube.com/playlist?list=PLMPgoZdlPumexxtvuPUB3TY7LExI1N_Xp
//start and end property.
// both start and end takes two values inside " " the first value determine the 
// position of start and second value determine the position of scroller-start.
// the position of start is relative to the value of trigger: " " and
//  the position of scroller-start is relative to viewport screen.
// E.g., if start: "top ...." and trigger: "#page2" then start marker lies just 
// on top of page2.
// scroller-start and scroller-end are fixed in position and start and end move 
// with the page.




// Video 4 Toggle Action
//
// gsap.registerPlugin(ScrollTrigger);
// gsap.to("#box", {
//     x: 800,
//     duration: 5,
//     scrollTrigger: {
//         trigger: "#box",
//         start: "bottom 60%", 
//         end: "bottom 40%",
//         markers: true,
//         toggleActions: "restart reverse none none", //"onEnter onLeave onEnterBack onLeaveBack"
//                                             //possible values: "play pause resume restart reverse none"
//     }
// });






// Video 5 Pin
//pin is used to suspend the component at the same position but animation works as coded...

gsap.registerPlugin(ScrollTrigger);
gsap.to ("#box", {
    x: 1000,
    duration: 5,
    scrollTrigger: {
        trigger: "#box1",
        markers: true,
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 3,


        // pin: true //true value: to pin the selector mentioned trigger: "selector",


        pin: "#box", //"selector" value: to pin the selector mentioned in this line...
                    //if the selector in trigger: " " is different from pin: " "
                    //start and end position will be relative to trigger: " " and 
                    //pinning will be relative trigger: " " but the item being pinned
                    //will be pin: " "


        pinSpacing: false //to provide space to remove the space between pinned selector
                            //  and pinning selector
    }
});













