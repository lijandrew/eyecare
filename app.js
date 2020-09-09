let body = document.querySelector("body");


function setupHome() {
  let readMore = document.querySelector("#read-more");
  let span1 = document.querySelector("section#about p span:nth-child(1)");
  let span2 = document.querySelector("section#about p span:nth-child(2)");
  readMore.addEventListener("click", () => {
    span1.classList.toggle("shown");
    span2.classList.toggle("shown");
    if (span2.classList.contains("shown")) {
      readMore.textContent = "read less";
    } else {
      readMore.textContent = "read more";
    }
  });
}


function main() {
  window.onload = () => {
    setupHome();
    body.style.opacity = 1;
  };
}

main();
