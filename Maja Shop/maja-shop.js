const bars = document.querySelector(".mobile.bars");
const closeList = document.querySelector(".mobile.close");
const navList = document.querySelector("#nav ul");

bars.onclick = function() {
  navList.style.width = "50%";
  setTimeout(() => {
    closeList.style.display = "inline-block";
  }, 400);
}
closeList.onclick = function() {
  this.style.display = "none";
  navList.style.width = 0;
  setTimeout(() => {
    location.reload()
  }, 400);
}