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