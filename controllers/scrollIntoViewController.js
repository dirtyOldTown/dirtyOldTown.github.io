function scrollIntoView(anchorLinks) {
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
}

export { scrollIntoView }