import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".star", {
  scrollTrigger: {
    trigger: ".star-start",
    markers: true,
    scrub: 1,
  },
  x: 400,
  scale: 0.8,
  rotation: 45,
  duration: 1,
});

gsap.to(".star", {
  scrollTrigger: {
    trigger: ".star-end",
    markers: true,
    scrub: 1,
  },
  x: -400,
  scale: 0.7,
  rotation: -45,
  duration: 1,
});
