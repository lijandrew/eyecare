let body = document.querySelector("body");

function setupHome() {
  for (let insuranceTitle of Array.from(document.querySelectorAll(".insurance-list-entry .title"))) {
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
