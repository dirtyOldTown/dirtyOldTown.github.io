import { srpski, english } from "./config/dictionaries.js";
import { toggleLanguage } from "./middleware/changeLanguage.js";
import { scrollIntoView } from "./controllers/scrollIntoViewController.js";
import { anchorLinks, toggleLanguageBtn, dataLanguage } from "./config/variables.js";

// Scroll into view controller
scrollIntoView(anchorLinks);

// Toggle language

let toggleButton = document.getElementById("toggle-language");
toggleButton.addEventListener("click", () => {
  toggleLanguage(dataLanguage, srpski, english);
toggleButton.classList.toggle("toggle")
});


//TEST
