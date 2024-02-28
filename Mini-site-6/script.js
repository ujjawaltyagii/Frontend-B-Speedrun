var tl = gsap.timeline({
    repeat: -1
});

tl.
    to(".imgcontainer",{
        width: "100%",
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 2
    }, 'flag')
    
    .to("#text h1", {
        ease: Expo.easeInOut,
        stagger: 2,
        top: 0
    }, 'flag')
    
    .to("#text h1", {
        delay: 2,
        ease: Expo.easeInOut,
        stagger: 2,
        top: "-100%"
    }, 'flag')



// gsap.to(".imgcontainer",{
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2,
//     stagger: 2
// })

// gsap.to("#text h1", {
//     ease: Expo.easeInOut,
//     stagger: 2.5,
//     top: 0
// })

// gsap.to("#text h1", {
//     delay: 2.5,
//     ease: Expo.easeInOut,
//     stagger: 2.5,
//     top: "-100%"
// })