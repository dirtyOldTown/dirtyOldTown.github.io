let anchorLinks = document.querySelectorAll("a[href^='#']");

for (let item of anchorLinks) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
    history.pushState(null, null, hashval);
  });
}

let heroSection = document.getElementById("hero-section");

let srpski = {
  "welcome": "Dobro došli na",
  "my-repos-button": "Moji repositorijumi",
  "my-project-button": "Moji projekti"
};
let data = document.querySelectorAll("[data-lang-english]");

function changeLanguage() {
  for (let item of data) {
    let name = item.getAttribute("data-lang-english");
    if (item.dataset.langEnglish == name) {
     let match = item.textContent.match(/[A-Za-z ]*\b/);
     for (let key in srpski) {
      if (key == name) {
        item.textContent = srpski[name]
      }
     }
    }
  }
}
changeLanguage()
