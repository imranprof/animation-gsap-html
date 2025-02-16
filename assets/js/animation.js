gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(Flip);



//hero area  subtitle animation

let your = document.querySelector(".your span");

console.log(your);
let subtitle = new SplitText(".your span", { type: "chars" });
let totalChars = subtitle.chars.length;

let textTl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });

subtitle.chars.forEach((char, i) => {
  if (i === 0) {
    textTl.to(
      char,
      {
        rotation: -20,
      },
      0
    );
  }
  if (i === subtitle.chars.length - 1) {
    textTl.to(
      char,
      {
        rotation: 20,
      },
      0
    );
  }
  if (i === 1) {
    textTl.to(
      char,
      {
        y: "-20%",
      },
      0
    );
  }
  if (i === 2) {
    textTl.to(
      char,
      {
        y: "-20%",
        rotation: 13,
      },
      0
    );
  }
});

let underLine = gsap.utils.toArray(".subtitle-underline path");
console.log(underLine);
textTl.to(
  underLine[0],
  { morphSVG: "M1 14.9995C1 14.9995 51.5 -14.9999 95 14.9997" },
  0
);

//hero section video animation
let video = document.querySelector(".aae-video-thumb");
let videoWrapper = document.querySelector(".aae-video-content")
let videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".aae-video-wrapper",
    start: "top 85%",
    end: "bottom -=500",
    markers: true,
    scrub: 1,
    pin: true,
    // pinSpacing: false,
  },
});


videoTl.to(video, { scale: 3.5,   x: "24.5%", transformOrigin: "left bottom", ease: "power1.inOut"})





//animate toolkit cards
let toolkitContainer = document.querySelector(".aae-card-area");
console.log(toolkitContainer);

let toolkitCards = gsap.utils.toArray(".aae-toolkit-item-cards");

console.log(toolkitCards);
if (toolkitContainer && toolkitCards) {
  let cardTl = gsap.timeline({
    scrollTrigger: {
      trigger: toolkitContainer,
      start: "top 60%",
      end: "top 70%",
      markers: true,
      toggleActions: "restart none reverse none",
    },
  });

  toolkitCards.forEach((card, index) => {
    if (index % 2 == 0) {
      cardTl.from(card, { x: "-70vw", duration: .2, ease: "expo.out" });
    } else cardTl.from(card, { x: "70vw", duration:.2, ease: "expo.out" });
  });

  let cardUnstackTl = gsap.timeline({
    scrollTrigger: {
      trigger: toolkitContainer,
      start: "top 20%",
      end: "bottom top-=400",
      markers: true,
      pin: true,
      scrub: 1,
    },
  });

  for (let i = toolkitCards.length - 1; i > 0; i--) {
    cardUnstackTl.to(toolkitCards[i], {
      y: "-80vh",
      duration: 1.5,
      // opacity: 0.5,
      rotation: 0,
      ease: "none",
    });
  }

  let cardTitle = document.querySelector(".aae-toolkit-title")
  console.log(cardTitle)

  cardUnstackTl.to(cardTitle,{ rotationX:  90, transformOrigin: "50% 0", duration: 1.5}, 0)

}









///hero section title animation
let m = gsap.utils.toArray(".char-m")[0];
let ns = document.querySelector(".char-ns");
let nf = document.querySelector(".char-nf");
let i = document.querySelector(".char-i");

console.log(m);
console.log(i);

//a inside path previous
// let aPaths = gsap.utils.toArray(".inside-path");
// console.log(aPaths);

// aPaths.forEach((path, index)=>{
//   if(index!==0)
//      gsap.set(path, { display: "none" });
// })
let aInsidePath = document.querySelector(".a-inside-path");
let aPathHelper = document.querySelector(".a-path-helper");
let aTl = gsap.timeline({
  // repeat: -1,
});

if (aInsidePath) {
  aTl
    .to(aInsidePath, {
      duration: .5,
      morphSVG:
        "M63 134.5H136.818C136.818 134.5 92.5 80.5 99.8183 30C65.5 68.5 63 134.5 63 134.5Z",
    })
    .to(aInsidePath, {
      duration: .5,
      morphSVG:
        "M63 134.5H136.818C136.818 134.5 144 83 99.8183 30C99.8183 94.5 63 134.5 63 134.5Z",
    }, 1.5)
    .to(aInsidePath, {
      duration: .5,
      morphSVG: "M63 128.5H136.818L99.8183 24L63 128.5Z",
    }, 2.5)

    .to(
      aPathHelper,
      { rotation: 23, transformOrigin: "center center", duration: .5 },
      0
    )
    .to(
      aPathHelper,
      { rotation: -23, transformOrigin: "center center", duration: .5 },
      1.5
    )
    .to(
      aPathHelper,
      { rotation: 0, transformOrigin: "center center", duration: .5 },
      2.5
    );
}

// aPaths.forEach((path, index) => {
//   if (index !== 0)
//     aTl.to(aPaths[0], {
//       duration: 1,
//       morphSVG: path,
//     });
// });
// aTl
//   .to(aPaths[0], {
//     duration: 1,
//     morphSVG: aPaths[0],
//   })

let colorBorders = gsap.utils.toArray(".color-border");

console.log(colorBorders);

let borderTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 2,
});

colorBorders.forEach((border, index) => {
  let delay = index * 2;
  if (index > 0) {
    borderTl.to(colorBorders[index - 1], { opacity: 0, duration: 0 }, delay);
  }
  borderTl.to(border, { opacity: 1, duration: 0 }, delay);
});

let ntl = gsap
  .timeline({
    repeat: -1,
    repeatDelay: 3,
  })
  .to(nf, { y: "-120%", duration: 1.3 })
  .from(ns, { y: "105%", duration: 1.3 }, "<.1");

gsap.fromTo(
  i,
  { drawSVG: "0%" },
  {
    drawSVG: "100%",
    duration: 5,
    repeat: -1,
    // yoyo: true,
  }
);
// gsap.set(".char-i", { transformOrigin: "center center" });
// gsap.to(".char-i", {
//   rotationX: 540,
//   duration: 2,
//   ease: "back",
//   repeat: -1,
//   transformOrigin: "center center" // You may need to adjust this
// });



let mtl = gsap.timeline({
  repeat: -1,
});
mtl.set("#mask-circle", {
  transformOrigin: "50% 0%",
});

mtl.call(() => {
  gsap.set(".char-m-fill", { fill: "rgb(253, 188, 46)", duration: 0 });
});
mtl.to("#mask-circle", {
  duration: 2,
  r: 220,
  ease: "power2.out",
});
mtl.to(
  ".char-m",
  {
    fill: "rgb(253, 188, 46)",
    duration: 0,
  },
  ">"
);
mtl.call(() => {
  gsap.set(".char-m-fill", { fill: "white", duration: 0 });
});

mtl.fromTo(
  "#mask-circle",
  {
    r: 0,
  },
  {
    duration: 2,
    r: 220,
    ease: "power2.out",
  }
);

mtl.to(
  ".char-m",
  {
    fill: "white",
    duration: 0,
  },
  ">"
);
mtl.call(() => {
  gsap.set(".char-m-fill", { fill: "rgb(2, 122, 255)", duration: 0 });
});
mtl.fromTo(
  "#mask-circle",
  {
    r: 0,
  },
  {
    duration: 2,
    r: 220,
    ease: "power2.out",
  }
);

mtl.to(
  ".char-m",
  {
    fill: "rgb(2, 122, 255)",
    duration: 0,
  },
  ">"
);
mtl.call(() => {
  gsap.set(".char-m-fill", { fill: "rgb(255, 95, 87)", duration: 0 });
});
mtl.fromTo(
  "#mask-circle",
  {
    r: 0,
  },
  {
    duration: 2,
    r: 220,
    ease: "power2.out",
  }
);
