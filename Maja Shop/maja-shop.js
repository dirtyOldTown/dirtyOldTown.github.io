const bars = document.querySelector(".mobile.bars");
const closeList = document.querySelector(".mobile.close");
const navList = document.querySelector("#nav ul");

bars.onclick = function() {
  navList.style.width = "50%";
  closeList.style.opacity = 1;
}
closeList.onclick = function() {
  this.style.opacity = 0;
  navList.style.width = 0;
  setTimeout(() => {
    location.reload()
  }, 400);
}