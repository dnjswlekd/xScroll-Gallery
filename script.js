gsap.registerPlugin(ScrollTrigger);

let lists = gsap.utils.toArray('.portfolio ul li');
let listA = gsap.utils.toArray('.portfolio ul li.a');
let listB = gsap.utils.toArray('.portfolio ul li.b');
let listC = gsap.utils.toArray('.portfolio ul li.c');

let scrollTween = gsap.to(lists, {
  xPercent: -100 * (lists.length - 1),
  ease: 'none',

  scrollTrigger: {
    trigger: '.portfolio',
    start: 'center center',
    end: '200%',
    scrub: 1,
    pin: true,
    markers: true,
  },
});

gsap.to(listA, {
  y: 50,
  rotation: 10,
  scrollTrigger: {
    trigger: '.portfolio',
    end: '200%',
    scrub: 2,
  },
});
gsap.to(listB, {
  y: -50,
  rotation: 20,
  scrollTrigger: {
    trigger: '.portfolio',
    end: '200%',
    scrub: 2,
  },
});
gsap.to(listC, {
  x: 20,
  y: -50,
  rotation: -10,
  scrollTrigger: {
    trigger: '.portfolio',
    end: '200%',
    scrub: 2,
  },
});
