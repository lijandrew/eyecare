
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
  let readMore = about.querySelector("section#about .light-btn");
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
  gsap.from("section#home .view-content", {
    opacity: 0,
    transform: "translateY(-30px)",
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // about
  gsap.timeline({scrollTrigger: {markers: true, start: "10% bottom", trigger: "section#about"}})
      .from("section#about .text-content", {
        opacity: 0,
        transform: "translateX(30px)",
        duration: 0.8,
        ease: "power1.out",
      }, "1")
      .from("section#about .view-content", {
        opacity: 0,
        transform: "translateX(-30px)",
        duration: 0.8,
        ease: "power1.out",
      }, "1");
}

function setupFrames() {

}

function setupContactlenses() {}


function main() {
  let body = document.querySelector("body");
  window.onload = () => {
    setupMobileNav();
    switch(window.location.pathname) {
      case "/":
      case "/index.html":
        setupHome();
        break;
      case "/frames.html":
        setupFrames();
        break;
      case "/contactlenses.html":
        setupContactlenses();
        break;
    }
    body.style.opacity = 1;
  };
}

main();
