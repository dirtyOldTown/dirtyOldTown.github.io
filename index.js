
let sources = [
  "https://en.js.cx/images-load/1.jpg",
  "https://en.js.cx/images-load/2.jpg",
  "https://en.js.cx/images-load/3.jpg"
];

let images = [];
function preload() {
   for (let i = 0; i < arguments.length; i++) {
     images[i] = new Image();
     images[i].src = preload.arguments[i];
     images[i].setAttribute("loading", "lazy");
   }
}

preload("slike/auto-glavni.png",
"slike/auto2.png",
"slike/favicon-footer.png")