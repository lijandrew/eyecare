let body = document.querySelector("body");
let about = document.querySelector("section#about");

function setupHome() {
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
}

function main() {
  window.onload = () => {
    // setupMobileNav();
    setupHome();
    body.style.opacity = 1;
  };
}

main();
