let body = document.querySelector("body");

function setupMobileNav() {
  let burger = document.querySelector("#burger");
  let nav = document.querySelector("nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("mobile-nav-open");
  })
}

function setupHome() {
  let readMore = document.querySelector("#read-more");
  let readMoreSpan = readMore.querySelector("span");
  let span1 = document.querySelector("section#about p span:nth-child(1)");
  let span2 = document.querySelector("section#about p span:nth-child(2)");
  readMore.addEventListener("click", () => {
    span1.classList.toggle("shown");
    span2.classList.toggle("shown");
    readMore.classList.toggle("shown");
    if (span2.classList.contains("shown")) {
      readMoreSpan.textContent = "read less";
    } else {
      readMoreSpan.textContent = "read more";
    }
  });
}

function main() {
  window.onload = () => {
    setupMobileNav();
    setupHome();
    body.style.opacity = 1;
  };
}

main();
