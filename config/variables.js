
let message = document.getElementById("message");
let email = document.getElementById("email");
let submitBtn = document.getElementById("submit-btn");
let anchorLinks = document.querySelectorAll("a[href^='#']");
let toggleLanguageBtn = document.getElementById("toggleLanguage");
let dataLanguage = document.querySelectorAll("[data-lang]");
let langSrpski = document.querySelector(".lang-srpski");
let langEnglish = document.querySelector(".lang-english");

export { 
  message, 
  email, 
  submitBtn, 
  anchorLinks, 
  toggleLanguageBtn, 
  dataLanguage,
  langSrpski,
  langEnglish
}