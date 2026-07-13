import gsap from 'gsap';
import './style.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const play = document.querySelector('.play');
// const pause = document.querySelector('.pause');
// const restart = document.querySelector('.restart');
// const reverse = document.querySelector('.reverse');
// const seek = document.querySelector('.seek');

// const tl = gsap.timeline({
//   paused: true,
// });

// tl.to(
//   '.box',
//   {
//     x: 1200,
//     duration: 1.2,
//     ease: 'power1.out',
//     delay: 0.6,
//   },
//   'swaraj'
// )
//   .to(
//     '.box1',
//     {
//       x: 1200,
//       duration: 1.2,
//       ease: 'power1.out',
//     },
//     'swaraj'
//   )
//   .to('.box2', {
//     x: 1200,
//     duration: 1.2,
//     ease: 'power1.out',
//   })
//   .addLabel('swaraj')
//   .to(
//     '.box3',
//     {
//       x: 1200,
//       duration: 1.2,
//       ease: 'power1.out',
//     },
//     '<0.4'
//   );

// play.addEventListener('click', () => {
//   tl.play();
// });

// pause.addEventListener('click', () => {
//   tl.pause();
// });

// restart.addEventListener('click', () => {
//   tl.restart();
// });

// reverse.addEventListener('click', () => {
//   tl.reverse();
// });

// seek.addEventListener('click', () => {
//   tl.seek('swaraj');
// });

// Loading Timeline
// const loadingTimeline = () => {
//   return gsap.timeline().to('box', {});
// };

// // Navbar Timeline
// const navbarTimeline = () => {
//   return gsap.timeline().to('.box1', {});
// };

// // Master Timeline
// const master = gsap.timeline();

// master.add(loadingTimeline, navbarTimeline);

gsap.registerPlugin(ScrollTrigger);

gsap.set('.imageDiv', {
  scale: 0.3,
});

gsap.set('.content', {
  gap: '80rem',
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.page2',
    start: 'top top',
    end: 'top -40%',
    scrub: 2,
    pin: true,
    // onEnter: () => {},
    // onLeave: () => {},
    // onUpdate: () => {},
    // onEnterBack: () => {},
    // onLeaveBack: () => {},
  },
});

tl.to('.imageDiv', {
  scale: 1,
  // duration: 1.3,
  ease: 'power2.out',
}).to(
  '.content',
  {
    gap: '7rem',
  },
  '<'
);
