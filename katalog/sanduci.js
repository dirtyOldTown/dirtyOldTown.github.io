const nazad = document.querySelector(".nazad");
nazad.addEventListener("click", () => {
  history.back()
});
nazad.addEventListener("mouseover", () => {
  nazad.style.color = "#A9A9A9"
});
nazad.addEventListener("mouseout", () => {
  nazad.style.color = "silver"
});