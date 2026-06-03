async function setLanguage(lang) {
  const page = document.body.dataset.page;

  const commonResponse = await fetch(`lang/${lang}/common.json`);
  const pageResponse = await fetch(`lang/${lang}/${page}.json`);

  const common = await commonResponse.json();
  const content = await pageResponse.json();

  document.documentElement.lang = lang;

  document.getElementById("site-title").textContent = common.siteTitle;

  document.getElementById("nav-home").textContent = common.nav.home;
  document.getElementById("nav-cv").textContent = common.nav.cv;
  document.getElementById("nav-papers").textContent = common.nav.papers;
  document.getElementById("nav-talks").textContent = common.nav.talks;
  document.getElementById("nav-notes").textContent = common.nav.notes;

  document.getElementById("page-title").textContent = content.title;
  const body = Array.isArray(content.body)
    ? content.body.join("\n")
    : content.body ?? "";

  document.getElementById("page-content").innerHTML = body;

  localStorage.setItem("language", lang);
}

const savedLanguage = localStorage.getItem("language") || "ja";
setLanguage(savedLanguage);
