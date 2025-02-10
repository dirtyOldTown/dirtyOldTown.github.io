import { srpski, english } from "./config/dictionaries.js";
import { toggleLanguage } from "./middleware/changeLanguage.js";
import { scrollIntoView } from "./controllers/scrollIntoViewController.js";
import { anchorLinks, toggleLanguageBtn, dataLanguage } from "./config/variables.js";

// Scroll into view controller
scrollIntoView(anchorLinks);

// Toggle language
toggleLanguageBtn.addEventListener("click", function() {
  toggleLanguage(dataLanguage, srpski, english);
  this.classList.toggle("toggle");
});


