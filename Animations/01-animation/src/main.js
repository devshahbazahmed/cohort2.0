import gsap from 'gsap';
import './style.css';

// const box = document.querySelector('.box');

// gsap.to('.box', {
//   delay: 0.6,
//   x: 200,
//   duration: 2,
//   ease: 5,
// });

// gsap.from('.box', {
//   delay: 0.6,
//   x: 200,
//   duration: 2,
//   ease: 5,
// });

// gsap.fromTo(
//   '.box',
//   {
//     x: 200,
//   },
//   {
//     delay: 0.6,
//     x: 500,
//     y: 200,
//     duration: 2,
//     ease: 5,
//   }
// );

// gsap.set('.box', {
//   x: 200,
//   y: 500,
//   opacity: 2,
// });

// const obj = {
//   a: 0,
// };

// gsap.to(obj, {
//   a: 100,
//   onUpdate: () => {
//     console.log(obj.a);
//   },
// });

// gsap.set('.box', {
//   x: -300,
// });

// gsap.to('.box', {
//   x: 2000,
//   duration: 1,
//   delay: 0.5,
//   ease: 'power2.inOut',
// });

// gsap.to('.box', {
//   x: 300,
//   duration: 1.4,
//   delay: 3,
//   ease: 'power2.inOut',
//   onStart: () => {
//     console.log('Animation started');
//   },
//   onComplete: () => {
//     console.log('Animation completed');
//   },

//   onUpdate: () => {
//     console.log('Animation updated');
//   },
// });

// gsap.to('.box', {
//   x: 1200,
//   duration: 1.3,
//   ease: 'power4.out',
//   delay: 1.6,
//   stagger: {
//     each: 0.2,
//     from: 'edges',
//   },
// });

// gsap.from('h1 span', {
//   yPercent: 100,
//   opacity: 0,
//   duration: 1.5,
//   ease: 'expo.inOut',
//   stagger: {
//     each: 0.08,
//     from: 'random',
//   },
// });

gsap.to('.box', {
  x: 1200,
  duration: 1.2,
  ease: 'power1.out',
  delay: 0.6,
});

gsap.to('.box1', {
  x: 1200,
  duration: 1.2,
  ease: 'power1.out',
  delay: 1.9,
});

const tl = gsap.timeline();

tl.to(
  '.box',
  {
    x: 1200,
    duration: 1.2,
    ease: 'power1.out',
    delay: 0.6,
  },
  'swaraj'
)
  .to(
    '.box1',
    {
      x: 1200,
      duration: 1.2,
      ease: 'power1.out',
    },
    'swaraj'
  )
  .to(
    '.box2',
    {
      x: 1200,
      duration: 1.2,
      ease: 'power1.out',
    },
    '<'
  )
  .to(
    '.box3',
    {
      x: 1200,
      duration: 1.2,
      ease: 'power1.out',
    },
    '<0.4'
  );
