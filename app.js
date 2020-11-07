
function setupMobileNav() {
  /*
  let tl = gsap.timeline( {paused: true} );
  tl.set(nav, {display: "flex"});
  tl.to(nav, {opacity: 1});
  */
  let burger = document.querySelector(".burger");
  let nav = document.querySelector("nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    body.classList.toggle("open");
  });
  for (let link of nav.querySelectorAll("a")) {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      body.classList.remove("open");
    });
  }
}

function setupHome() {
  let about = document.querySelector("section#about");
  let aboutTextContent = about.querySelector(".text-content");
  let readMore = about.querySelector(".readmore");
  readMore.addEventListener("click", () => {
    aboutTextContent.classList.toggle("open");
  });

  for (let insuranceTitle of Array.from(document.querySelectorAll(".insurance-list-entry > .small"))) {
    let insuranceListEntry = insuranceTitle.parentElement;
    insuranceTitle.addEventListener("click", () => {
      insuranceListEntry.classList.toggle("open");
    });
  }

  // home
  gsap.from("section#home .content .view-content", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#home .view-content",
    }
  });
  gsap.from("section#about .view-content", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#about .view-content",
    },
  });
  gsap.from("section#services .view-content", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#services .view-content",
    },
  });
  gsap.from("section#insurance .content .insurance-list-entry", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 0.8,
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
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#frames .view-content",
    },
  });
  gsap.from("section#contactlenses .view-content", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#contactlenses .view-content",
    },
  });
  gsap.from("section#orthok .view-content", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#orthok .view-content",
    },
  });
  gsap.from("section#directions .view-content", {
    opacity: 0,
    transform: "translateY(20px)",
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "section#directions .view-content",
    },
  });
  gsap.from("section#end .btn-group > a", {
    opacity: 0,
    transform: "translateX(-20px)",
    duration: 0.5,
    ease: "power1.inOut",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "section#end .view-content",
    },
  });

}

function setupFrames() {

}

function setupContactlenses() {}


function main() {
  window.onload = () => {
    let body = document.querySelector("body");
    setupMobileNav();
    let pathArr = window.location.pathname.split("/");
    let page = pathArr[pathArr.length - 1];
    switch(page) {
      case "":
      case "index.html":
        setupHome();
        break;
      case "frames.html":
        setupFrames();
        break;
      case "contactlenses.html":
        setupContactlenses();
        break;
    }
    body.style.opacity = 1;
  };
}

main();
