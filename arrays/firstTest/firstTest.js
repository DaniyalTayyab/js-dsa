const englishCode = "en-US";
const spanishCode = "es-ES";

function getAboutUsLink(language) {
  switch(language) {
    case englishCode.toLowerCase():
      return '/about-us';
    case spanishCode.toLowerCase():
      return 'acerca-de';
  }
  return '';
}

getAboutUsLink(englishCode);

module.exports = getAboutUsLink;
