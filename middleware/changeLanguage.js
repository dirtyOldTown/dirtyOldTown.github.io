import { message, email, submitBtn, langSrpski, langEnglish } from "../config/variables.js";

function toggleLanguage(data, srpski, english) {
  let language;
  let text;
  for (let item of data) {
    language = item.dataset.lang;
    text = item.dataset.item;
    if (language == "en") {
      item.innerHTML = srpski[text];
      email.setAttribute("placeholder", "Tvoja imejl adresa");
      message.setAttribute("placeholder", "Tvoja poruka");
      submitBtn.value = "Pošalji";
      item.dataset.lang = "sr";
      setLanguageStyle(langEnglish, langSrpski);
    } else {
        item.innerHTML = english[text];
        email.setAttribute("placeholder", "Your email");
        message.setAttribute("placeholder", "Your messsage");
        submitBtn.value = "Send";
        setLanguageStyle(langSrpski, langEnglish);
        item.dataset.lang = "en";
    }
  }
}

function setLanguageStyle(previousLang, currentLang) {
  previousLang.style.opacity = 0.7;
  currentLang.style.opacity = 1;
}

export { toggleLanguage }