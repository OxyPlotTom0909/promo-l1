const translations = {
  zh: {
    htmlLang: "zh-Hant",
    documentTitle: "即刻旅行故事書",
    brand: "即刻旅行故事書",
    kicker: "AI 眼鏡旅行提案",
    title: "讓旅行說走就走",
    intro: "一副能即時說明眼前世界的 AI 眼鏡，讓展覽、建築與街區故事在旅途中自然展開。",
    page1Title: "旅行中的好奇心",
    page1Body:
      "我是一個喜歡到處旅遊的上班族，體驗各地文化與人事物，是我工作之餘最享受生活的時光。",
    page2Title: "總是差一點深入",
    page2Body:
      "但是到了每個景點，總覺得都是在走馬看花。每次都要在出發前做很多功課、上網查資料，才會知道眼前景點或人事物的關聯。這樣不但累，也總覺得沒有效率。",
    page3Title: "眼前就是導覽現場",
    page3Body:
      "如果可以配合 AI 眼鏡，將我看到的人、事、物，直接透過眼鏡顯示模擬場景影片與即時查詢到的說明，並即時講解，我就能立刻理解眼前的展覽、建築與景點。",
    page4Title: "更輕鬆自在的旅程",
    page4Body:
      "實現這樣的功能後，我在旅行中能更完整地體驗每一段旅程。想看展覽就看展覽，想逛老街就逛老街，旅行變得輕鬆、放鬆又自在。",
    page1Alt: "旅人準備展開城市探索",
    page2Alt: "旅途中查找景點資訊的情境",
    page3Alt: "AI 眼鏡即時顯示導覽資訊",
    page4Alt: "輕鬆自在享受文化旅行"
  },
  ja: {
    htmlLang: "ja",
    documentTitle: "すぐに旅立てるストーリーブック",
    brand: "すぐに旅立てるストーリーブック",
    kicker: "AI グラス旅行提案",
    title: "思い立ったら、すぐ旅へ",
    intro:
      "目の前の世界をその場で解説してくれる AI グラスが、展示、建築、街の物語を旅の中で自然に広げてくれる。",
    page1Title: "旅の中の好奇心",
    page1Body:
      "私はあちこち旅をするのが好きな会社員です。各地の文化、人々、出来事に触れる時間は、仕事の合間に人生を楽しむ大切なひとときです。",
    page2Title: "いつも少しだけ浅くなる",
    page2Body:
      "けれど、どの観光地へ行っても、ただ駆け足で眺めているだけのように感じます。出発前にたくさん下調べをしてネットで情報を探さないと、目の前の場所や人、物とのつながりがわかりません。その方法は疲れるうえに、いつも効率がよくないと感じていました。",
    page3Title: "目の前がそのままガイドになる",
    page3Body:
      "もし AI グラスを使って、見ている人、出来事、物に合わせて、シミュレーション映像やリアルタイム検索の説明をグラス上に表示し、その場で解説してくれたら、展示、建築、観光地の意味をすぐに理解できます。",
    page4Title: "もっと軽やかで自由な旅へ",
    page4Body:
      "この機能が実現すれば、旅の途中で一つひとつの体験をより深く味わえます。展示を見たいと思えば見に行き、古い街並みを歩きたいと思えば歩く。旅はもっと気軽で、リラックスできて、自由なものになります。",
    page1Alt: "街の探索を始める旅人",
    page2Alt: "旅先で観光情報を調べている場面",
    page3Alt: "AI グラスがリアルタイムのガイド情報を表示している場面",
    page4Alt: "文化の旅をリラックスして楽しむ場面"
  },
  en: {
    htmlLang: "en",
    documentTitle: "Instant Travel Storybook",
    brand: "Instant Travel Storybook",
    kicker: "AI Glasses Travel Concept",
    title: "Travel the Moment You Decide",
    intro:
      "AI glasses that explain the world in front of you can unfold the stories behind exhibitions, architecture, and neighborhoods as you travel.",
    page1Title: "Curiosity on the Road",
    page1Body:
      "I am an office worker who loves traveling. Experiencing local cultures, people, and places is how I enjoy life most outside of work.",
    page2Title: "Always Missing the Deeper Story",
    page2Body:
      "But whenever I arrive at a destination, I often feel like I am only skimming the surface. I have to study in advance and search online before I can understand how the sights, people, or objects in front of me are connected. It is tiring, and it never feels efficient.",
    page3Title: "A Guide Right Before My Eyes",
    page3Body:
      "With AI glasses, the people, places, and things I see could trigger simulated scene videos, real-time explanations, and instant narration directly through the lenses. I could understand exhibitions, buildings, and attractions as soon as I encounter them.",
    page4Title: "A Freer, Easier Journey",
    page4Body:
      "After making this possible, I can experience each trip more fully. If I want to see an exhibition, I can simply go. If I want to wander an old street, I can do that too. Travel becomes relaxed, flexible, and wonderfully easy.",
    page1Alt: "A traveler preparing to explore a city",
    page2Alt: "Looking up destination information during a trip",
    page3Alt: "AI glasses showing real-time guide information",
    page4Alt: "Enjoying cultural travel in a relaxed way"
  }
};

const languageButtons = document.querySelectorAll(".lang-button");
const textNodes = document.querySelectorAll("[data-i18n]");
const imageNodes = document.querySelectorAll("[data-i18n-alt]");
const track = document.querySelector(".book-track");
const pages = Array.from(document.querySelectorAll(".book-page"));
const navButtons = document.querySelectorAll(".nav-button");
const dots = document.querySelectorAll(".dot");
let activePage = 0;

function setLanguage(lang) {
  const current = translations[lang] || translations.zh;

  document.documentElement.lang = current.htmlLang;
  document.title = current.documentTitle;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = current[key];
  });

  imageNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;
    node.alt = current[key];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("storybook-language", lang);
}

function goToPage(pageIndex) {
  const nextPage = Math.max(0, Math.min(pageIndex, pages.length - 1));
  pages[nextPage].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  updatePageState(nextPage);
}

function updatePageState(pageIndex) {
  activePage = pageIndex;

  dots.forEach((dot, index) => {
    const isActive = index === activePage;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "page" : "false");
  });

  navButtons.forEach((button) => {
    const direction = button.dataset.direction;
    button.disabled = (direction === "prev" && activePage === 0) ||
      (direction === "next" && activePage === pages.length - 1);
  });
}

function syncPageFromScroll() {
  const pageWidth = track.clientWidth || window.innerWidth;
  updatePageState(Math.round(track.scrollLeft / pageWidth));
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    goToPage(activePage + (button.dataset.direction === "next" ? 1 : -1));
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => goToPage(Number(dot.dataset.page)));
});

track.addEventListener("scroll", () => {
  window.requestAnimationFrame(syncPageFromScroll);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    goToPage(activePage + 1);
  }

  if (event.key === "ArrowLeft") {
    goToPage(activePage - 1);
  }
});

window.addEventListener("resize", () => goToPage(activePage));

setLanguage(localStorage.getItem("storybook-language") || "zh");
updatePageState(0);
