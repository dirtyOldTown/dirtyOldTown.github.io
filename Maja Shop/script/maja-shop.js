const bars = document.querySelector(".mobile.bars");
const closeList = document.querySelector(".mobile.close");
const navList = document.querySelector("#nav ul");

bars.onclick = function() {
  navList.style.width = "70%";
  setTimeout(() => {
    closeList.style.display = "inline-block";
  }, 400);
}
closeList.onclick = function() {
  this.style.display = "none";
  navList.style.width = "";
}

const links = document.querySelectorAll(".scroll-into-view li a");

for (let link of links) {
  link.addEventListener("click", (event) => {
    let hashval = event.target.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, null, hashval);
    event.preventDefault();
    console.log(window.scrollY)
    backToList(target);
  });
}

function backToList(target) {
  let list = document.getElementById("presentation");
  let elem = document.createElement("span");
  let targetRect = target.getBoundingClientRect();
  elem.classList.add("up");
  elem.innerHTML = `<i class="fa-solid fa-circle-chevron-up"></i>`;
  elem.style.opacity = 1;
  elem.style.top = targetRect.bottom + scrollY + "px"
  setTimeout(() => {
    document.body.append(elem);
  }, 700);
  elem.addEventListener("click", (e) => {
    list.scrollIntoView({
      behavior: 'smooth'
    });
    history.pushState(null, null, document.querySelector("listRect"));
    e.preventDefault();
    setTimeout(() => {
      elem.remove()
    }, 500)
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY < 870)
   elem.remove();
  });
}





