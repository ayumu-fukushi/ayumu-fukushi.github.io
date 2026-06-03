async function setLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const texts = await response.json();

  document.documentElement.lang = lang;

  document.getElementById("site-title").textContent = texts.siteTitle;

  document.getElementById("nav-home").textContent = texts.nav.home;
  document.getElementById("nav-cv").textContent = texts.nav.cv;
  document.getElementById("nav-papers").textContent = texts.nav.papers;
  document.getElementById("nav-talks").textContent = texts.nav.talks;
  document.getElementById("nav-notes").textContent = texts.nav.notes;

  document.getElementById("home-title").textContent = texts.home.title;
  document.getElementById("home-text").textContent = texts.home.text;

  document.getElementById("cv-title").textContent = texts.cv.title;
  document.getElementById("cv-text").textContent = texts.cv.text;

  document.getElementById("papers-title").textContent = texts.papers.title;
  setList("papers-list", texts.papers.items);

  document.getElementById("talks-title").textContent = texts.talks.title;
  setList("talks-list", texts.talks.items);

  document.getElementById("notes-title").textContent = texts.notes.title;
  setList("notes-list", texts.notes.items);

  localStorage.setItem("language", lang);
}

function setList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

const savedLanguage = localStorage.getItem("language") || "ja";
setLanguage(savedLanguage);
