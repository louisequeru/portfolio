import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".star-start",
//     markers: true,
//     scrub: 1,
//   },
// });

// tl.to(".star", {
//   x: 400,
//   scale: 0.8,
//   rotation: 45,
//   duration: 1,
// });

// tl.to(".star", {
//   x: -400,
//   scale: 0.8,
//   rotation: -45,
//   duration: 1,
// });

gsap.to(".star", {
  scrollTrigger: {
    trigger: ".star",
    // markers: true,
    pin: ".star",
    start: "top",
    end: "bottom",
  },
});

gsap.to(".star", {
  scrollTrigger: {
    trigger: ".star-start",
    // markers: true,
    scrub: 1,
  },
  x: 400,
  scale: 0.8,
  rotation: 45,
  duration: 1,
});

gsap.fromTo(
  ".star",
  {
    x: 400,
    scale: 0.8,
    rotation: 45,
  },
  {
    scrollTrigger: {
      trigger: ".star-end",
      // markers: true,
      scrub: 1,
    },
    x: -400,
    scale: 0.7,
    rotation: -45,
    duration: 1,
  }
);

const sections = document.querySelectorAll(".projects-gd-img");
const container = document.querySelector(".projects-gd");

gsap.to(container, {
  xPercent: ((sections.length - 1) / sections.length) * -100,
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    end: () => "+=" + container.offsetWidth,
  },
});
