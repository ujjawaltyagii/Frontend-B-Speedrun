gsap.to(".imgcontainer",{
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2
})

gsap.to("#text h1", {
    ease: Expo.easeInOut,
    stagger: 2.5,
    top: 0
})

gsap.to("#text h1", {
    delay: 2.5,
    ease: Expo.easeInOut,
    stagger: 2.5,
    top: "-100%"
})