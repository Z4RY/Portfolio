const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#a, #u, #a1",{
    y: 1000,
    // scale: 0,
    // delay: -1,
    duration: 1.5,
    ease: "power4.Out",
})
gsap.from("#b, #z, #r",{
    y: -1000,
    // scale: 0,
    // delay: -1,
    duration: 1.5,
    ease: "power4.Out",
})
gsap.to("#a,#b,#u,#z,#r,#a1",{
    color: "#000",
    delay: 2,
    ease: "power4.Out",
})
gsap.to("#loader",{
    backgroundColor: "#fff",
    delay: 2,
    ease: "power4.Out",
})
gsap.to("#a",{
    scale: 0.5,
    x:-152,
    y:-41,
    delay: 2.5
})

gsap.to("#b",{
    scale: 0.5,
    x:-292,
    y:-41,
    delay: 2.5
})

gsap.to("#u",{
    scale: 0.5,
    x:-422,
    y:-41,
    delay: 2.5
})
gsap.to("#z",{
    scale: 0.5,
    x:-552,
    y:-41,
    delay: 2.5
})
gsap.to("#a1",{
    scale: 0.5,
    x:-692,
    y:-41,
    delay: 2.5
})
gsap.to("#r",{
    scale: 0.5,
    x:-842,
    y:-41,
    delay: 2.5
})
gsap.to("#loader",{
    delay: 3.2,
    opacity: 0,
})
gsap.to("#loader",{
    delay: 4,
    display: "none",
})

gsap.from("#lastname",{
    x: 1000,
    delay: 3.5,
    ease: "power3.out",
})
gsap.from("#page1-content h5",{
    delay: 3.6,
    y: 1000,
    duration: 1.1,
})


gsap.to("#loader h1",{
    opacity: 1,
    duration: 1,
    delay: 0.5,
  
})







locomotive()