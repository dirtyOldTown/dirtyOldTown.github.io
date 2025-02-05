function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, attributes = {}) {
  attributes = {
    path: "/"
  };

  let updateCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let attributeKey in attributes) {
    updateCookie += "; " + attributeKey;
    let attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updateCookie += "=" + attributeValue;
    }
  }
  document.cookie = updateCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1
  });
}

export { getCookie, setCookie, deleteCookie }