// Dodeljivanje varijabli za element "img" (sličice)
var img1 = document.querySelector(".slideshow img:first-of-type");
var img2 = document.querySelector(".slideshow img:nth-of-type(2)");
var img3 = document.querySelector(".slideshow img:nth-of-type(3)");
var img4 = document.querySelector(".slideshow img:nth-of-type(4)");
var img5 = document.querySelector(".slideshow img:nth-of-type(5)");
var img6 = document.querySelector(".slideshow img:last-of-type");

// Dodeljivanje varijabli za element "button"
var btn1 = document.querySelector(".btn button:nth-of-type(1)");
var btn2 = document.querySelector(".btn button:nth-of-type(2)");
var btn3 = document.querySelector(".btn button:nth-of-type(3)");
var btn4 = document.querySelector(".btn button:nth-of-type(4)");
var insert = document.querySelector(".slideshow");

// Dodeljivanje varijable za element "h3" i [niza] za naslove teksta
var text = document.querySelector("aside h3");
var mesto = ["Boba u Švajcarskoj", "Boba u Austriji",
"Boba u Srbiji", "Boba u Crnoj Gori"];

// [Nizovi] za sličice
var img = [img1, img2, img3, img4, img5, img6];
var Sektor1 = ["slike/Gmail/boba2.jpg","slike/Gmail/boba3.jpg","slike/Gmail/boba4.jpg",
  "slike/Gmail/boba5.jpg","slike/Gmail/boba6.jpg","slike/Gmail/boba7.jpg"];
var Sektor2 = ["slike/Gmail/boba8.jpg","slike/Gmail/boba9.jpg","slike/Gmail/boba10.jpg",
  "slike/Gmail/boba11.jpg","slike/Gmail/boba12.jpg","slike/Gmail/boba13.jpg"];
var Sektor3 = ["slike/Gmail/boba14.jpg","slike/Gmail/boba15.jpg","slike/Gmail/boba16.jpg",
  "slike/Gmail/boba17.jpg","slike/Gmail/boba18.jpg","slike/Gmail/boba19.jpg"];
var Sektor4 = ["slike/Gmail/boba20.jpg","slike/Gmail/boba21.jpg","slike/Gmail/boba22.jpg",
    "slike/Gmail/boba23.jpg","slike/Gmail/boba24.jpg","slike/Gmail/boba25.jpg"];

// Set *funkcija koje menjaju atribut 'src', elementa "img"
// Set *funkcija menja naslove 
var sektori = [Sektor1, Sektor2, Sektor2, Sektor3, Sektor4];
  
