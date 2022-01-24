var img1 = document.querySelector(".slideshow img:first-of-type");
var img2 = document.querySelector(".slideshow img:nth-of-type(2)");
var img3 = document.querySelector(".slideshow img:nth-of-type(3)");
var img4 = document.querySelector(".slideshow img:nth-of-type(4)");
var img5 = document.querySelector(".slideshow img:nth-of-type(5)");
var img6 = document.querySelector(".slideshow img:last-of-type");

var btn1 = document.querySelector(".btn button:nth-of-type(1)");
var btn2 = document.querySelector(".btn button:nth-of-type(2)");
var btn3 = document.querySelector(".btn button:nth-of-type(3)");
var btn4 = document.querySelector(".btn button:nth-of-type(4)");
var insert = document.querySelector(".slideshow");
var text = document.querySelector("aside h2");
var mesto = ["Boba u Švajcarskoj", "Boba u Austriji",
"Boba u Srbiji", "Boba u Crnoj Gori"];

function Promena() {
    img1.setAttribute("src", "slike/Gmail/boba2.jpg");
    img2.setAttribute("src", "slike/Gmail/boba3.jpg");
    img3.setAttribute("src", "slike/Gmail/boba4.jpg");
    img4.setAttribute("src", "slike/Gmail/boba5.jpg");
    img5.setAttribute("src", "slike/Gmail/boba6.jpg");
    img6.setAttribute("src", "slike/Gmail/boba7.jpg");
    text.innerHTML = mesto[0];
}
function Promena2() {
    img1.setAttribute("src", "slike/Gmail/boba12.jpg");
    img2.setAttribute("src", "slike/Gmail/boba13.jpg");
    img3.setAttribute("src", "slike/Gmail/boba14.jpg");
    img4.setAttribute("src", "slike/Gmail/boba15.jpg");
    img5.setAttribute("src", "slike/Gmail/boba16.jpg");
    img6.setAttribute("src", "slike/Gmail/boba17.jpg");
    text.innerHTML = mesto[1];
    insert.classList.toggle("fade");
}
function Promena3() {
    img1.setAttribute("src", "slike/Gmail/boba8.jpg");
    img2.setAttribute("src", "slike/Gmail/boba9.jpg");
    img3.setAttribute("src", "slike/Gmail/boba10.jpg");
    img4.setAttribute("src", "slike/Gmail/boba11.jpg");
    img5.setAttribute("src", "slike/Gmail/boba18.jpg");
    img6.setAttribute("src", "slike/Gmail/boba19.jpg");
    text.innerHTML = mesto[2];
    
        insert.classList.toggle("fade");
 
    
}
function Promena4() {
    img1.setAttribute("src", "slike/Gmail/boba20.jpg");
    img2.setAttribute("src", "slike/Gmail/boba21.jpg");
    img3.setAttribute("src", "slike/Gmail/boba22.jpg");
    img4.setAttribute("src", "slike/Gmail/boba23.jpg");
    img5.setAttribute("src", "slike/Gmail/boba24.jpg");
    img6.setAttribute("src", "slike/Gmail/boba25.jpg");
    text.innerHTML =  mesto[3];
     
    insert.classList.add("fade");
}
btn1.addEventListener("click", function(e) {
    e.preventDefault();
    Promena();
    insert.classList.remove("fade");
    void insert.offsetWidth;
    insert.classList.add("fade");
  });
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    Promena2();
    insert.classList.remove("fade");
    void insert.offsetWidth;
    insert.classList.add("fade");
  });
btn3.addEventListener("click", function(e) {
    e.preventDefault();
    Promena3();
    insert.classList.remove("fade");
    void insert.offsetWidth;
    insert.classList.add("fade");
  });
btn4.addEventListener("click", function(e) {
    e.preventDefault();
    Promena4();
    insert.classList.remove("fade");
    void insert.offsetWidth;
    insert.classList.add("fade");
  });

