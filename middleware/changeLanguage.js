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
      langEnglish.style.opacity = "0.7";
      langSrpski.style.opacity = "1";
      item.dataset.lang = "sr";
    } else {
        item.innerHTML = english[text];
        email.setAttribute("placeholder", "Your email");
        message.setAttribute("placeholder", "Your messsage");
        submitBtn.value = "Send";
        langEnglish.style.opacity = "1";
        langSrpski.style.opacity = "0.7";
        item.dataset.lang = "en";
    }
  }
}

export { toggleLanguage }