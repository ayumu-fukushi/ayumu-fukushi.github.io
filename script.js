async function setLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const texts = await response.json();

  document.getElementById("title").textContent = texts.title;
  document.getElementById("intro").textContent = texts.intro;
  document.getElementById("profile").textContent = texts.profile;

  document.documentElement.lang = lang;

  localStorage.setItem("language", lang);
}

const savedLanguage = localStorage.getItem("language") || "ja";
setLanguage(savedLanguage);
