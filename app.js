const body = document.querySelector("body");

function setupMobileNav() {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector("nav");

  // Mobile nav animation
  let burgerTl = gsap.timeline({paused: true});
  burgerTl.to(".line1", {transform: "translateY(50%)", duration: 0.2}, "translate");
  burgerTl.to(".line2", {transform: "translateY(-50%)", duration: 0.2}, "translate");
  burgerTl.to(".line1", {transform: "translateY(50%) rotate(45deg)", duration: 0.2}, "rotate");
  burgerTl.to(".line2", {transform: "translateY(-50%) rotate(-45deg)", duration: 0.2}, "rotate");

  let tl = gsap.timeline({paused: true});
  tl.to(nav, {display: "flex", duration: 0});
  tl.to(nav, {opacity: 1, duration: 0.2});
  tl.to("nav > a > div", {
    transform: "translateY(0)",
    duration: 0.2,
    stagger: {amount: 0.1},
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    body.classList.toggle("open");
    if (nav.classList.contains("open")) {
      burgerTl.restart();
      tl.restart();
    } else {
      burgerTl.reverse();
      tl.reverse();
    }
  });
}

function setupHome() {
  // Bio "Read more" button (mobile only)
  let about = document.querySelector("section#about");
  let aboutTextContent = about.querySelector(".text-content");
  let readMore = about.querySelector(".readmore");
  readMore.addEventListener("click", () => {
    aboutTextContent.classList.toggle("open");
  });

  // Insurance tappable dropdowns (mobile only)
  for (let insuranceTitle of Array.from(document.querySelectorAll(".insurance-list-entry > .small"))) {
    let insuranceListEntry = insuranceTitle.parentElement;
    insuranceTitle.addEventListener("click", () => {
      insuranceListEntry.classList.toggle("open");
    });
  }

  // Intro animations
  let viewAniDur = 0.6;
  gsap.from("section#home .content .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#home .view-content",
    }
  });
  gsap.from("section#about .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#about .view-content",
    },
  });
  gsap.from("section#services .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#services .view-content",
    },
  });
  gsap.from("section#insurance .content .insurance-list-entry", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    stagger: {
      amount: 0.8,
    },
    scrollTrigger: {
      trigger: "section#insurance",
      start: "30% bottom"
    },
  });
  gsap.from("section#frames .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#frames .view-content",
    },
  });
  gsap.from("section#contactlenses .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#contactlenses .view-content",
    },
  });
  gsap.from("section#orthok .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#orthok .view-content",
    },
  });
  gsap.from("section#directions .view-content", {
    opacity: 0,
    transform: "translateY(10px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#directions .view-content",
    },
  });
  gsap.from("section#end .btn-group > a", {
    opacity: 0,
    transform: "translateX(-20px)",
    duration: viewAniDur,
    ease: "power1.inOut",
    stagger: {
      amount: 0.3,
    },
    scrollTrigger: {
      trigger: "section#end .view-content",
    },
  });
}

function setupFrames() {
  // Intro
  gsap.from(".hoverbox", {
    opacity: 0,
    transform: "perspective(1000px) translateZ(-50px)",
    duration: 0.8,
    ease: "power2.out",
    stagger: {
      amount: 0.5,
    },
  });

  // Parallax hover effect
  let hoverboxArr = Array.from(document.querySelectorAll(".hoverbox"));
  for (let i = 0; i < hoverboxArr.length; i++) {
    let hoverbox = hoverboxArr[i];
    let img = hoverbox.querySelector("img");
    hoverbox.addEventListener("mousemove", e => {
      if (window.innerWidth < 820) {
        // Prevent parallax effect in mobile view.
        return;
      }
      let cx = hoverbox.offsetLeft + hoverbox.offsetWidth / 2;
      let cy = hoverbox.offsetTop + hoverbox.offsetHeight / 2;
      let dx = e.clientX - cx;
      let dy = e.clientY - cy;
      let rotyaxis = 10 * dx / hoverbox.offsetHeight;
      let rotxaxis = -5 * dy / hoverbox.offsetWidth;
      hoverbox.style.transform = `perspective(1000px)
                                  scale(1.05)
                                  rotateX(${rotxaxis}deg)
                                  rotateY(${rotyaxis}deg)`;
    });
    hoverbox.addEventListener("mouseleave", e => {
      hoverbox.style.transform = `perspective(1000px)
                                  scale(1)
                                  rotateX(0)
                                  rotateY(0)`;
    });
  }
}


function main() {
  window.onload = () => {
    setupMobileNav();
    let pathArr = window.location.pathname.split("/");
    let page = pathArr[pathArr.length - 1];
    switch (page) {
      case "":
      case "index.html":
        setupHome();
        break;
      case "frames.html":
        setupFrames();
        break;
    }
    body.style.opacity = 1;
  };
}

main();
