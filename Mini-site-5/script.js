gsap.from("#img1",{
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: 60
})
gsap.from("#img2",{
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x: 60
})
gsap.from("#img3",{
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y: -60
})
gsap.from("#page1 h1",{
    delay: 0.4,
    opacity: 0,
    duration: 1
})
gsap.from("#main #txt",{
    delay: 0.4,
    opacity: 0,
    duration: 1
})

gsap.from("#page2 h5", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 h5",
        scroller: "body",
        start: "top 60%"
    }
})

gsap.from("#page2 #test, #page2 h1, #page2 #about", {
    opacity: 0,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page2 h5",
        scroller: "body",
        start: "top 60%"
    }
})