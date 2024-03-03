// ------------- All finden 
const panels = document.querySelectorAll(".panel");
const learnMore = document.querySelector('#learn-more');

// --------------- toggle Open 
function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);

// ----------------- Language

const langArr = {
  'about': {
    'en' : 'About',
    'de' : 'Über',
    'ua' : 'Про мене'
  },
  'services': {
    'en' : 'Services',
    'de' : 'Dienstleistungen',
    'ua' : 'Послуги'
  },
  'blog': {
    'en' : 'Blog',
    'de' : 'Blog',
    'ua' : 'Блог'
  },
  'portfolio': {
    'en' : 'Portfolio',
    'de' : 'Portfolio',
    'ua' : 'Портфоліо'
  },
  'contacts': {
    'en' : 'Contacts',
    'de' : 'Kontakte',
    'ua' : 'Контакти'
  },
  'language': {
    'en' : 'Language',
    'de' : 'Sprache',
    'ua' : 'Мови'
  },
  'topTextNummerOne': {
    'en' : `Hello, I'm Danylo`,
    'de' : 'Hallo, Ich bin Danylo',
    'ua' : 'Привіт мене звати Данило'
  },
  'topTetxNummerTwo': {
    'en' : 'I a Web-Development',
    'de' : 'Ich bin Webentwickler',
    'ua' : 'Я веб-розробник'
  },
  'topTetxNummerTwo': {
    'en' : 'I a Web-Development',
    'de' : 'Ich bin Webentwickler',
    'ua' : 'Я веб-розробник'
  },
  'aboutTextBlockOneNummerOne': {
    'en' : `Hello, I'm`,
    'de' : 'Hallo, Ich bin',
    'ua' : 'Привіт, Я'
  },
  'aboutTextBlockOneNummerTwo': {
    'en' : 'Danylo Kravets',
    'de' : 'Danylo Kravets',
    'ua' : 'Данило Кравець'
  },
  'aboutTextBlockOneNummerThree': {
    'en' : `I'm a`,
    'de' : 'Ich bin',
    'ua' : 'Я'
  },
  'aboutTextBlockOneNummerFour': {
    'en' : 'Web & Graphic Designer',
    'de' : 'Web & Grafik Entwickler',
    'ua' : 'Розробник веб-сайтів і графіки'
  },
  'aboutTextBlockTwo' : {
    'en' : `Welcome! I'm Danylo Kravets, a young individual from Kharkiv who moved to Berlin for new challenges. Here, I not only learn German but also explore my passion for programming. My goal is to enhance my skills in this exciting field. Join me on this journey through the world of knowledge and technology, where every day is a new opportunity to achieve something amazing!`,
    'de' : `Willkommen! Ich bin Danylo Kravets, ein junger Mensch aus Kharkiv, der nach Berlin gezogen ist, um neuen Herausforderungen zu begegnen. Hier lerne ich nicht nur Deutsch, sondern erkunde auch meine Leidenschaft fürs Programmieren. Mein Ziel ist es, meine Fähigkeiten in diesem spannenden Bereich zu verbessern. Begleite mich auf dieser Reise durch die Welt des Wissens und der Technologie, wo jeder Tag eine neue Gelegenheit ist, etwas Erstaunliches zu erreichen!`,
    'ua' : `Ласкаво просимо! Я - Данило Кравець, молода особа з Харкова, яка переїхала до Берліна для нових викликів. Тут я не лише вивчаю німецьку мову, але й розвиваю свою пристрасть до програмування. Моєю метою є покращення своїх навичок в цій захоплюючій сфері. Приєднуйтесь до мене на цьому шляху через світ знань та технологій, де кожен день - це нова можливість досягти чогось дивовижного!`
  },
  'aboutTetxBlockButton': {
    'en' : 'LEARN MORE',
    'de' : 'LERNEN MEHR',
    'ua' : 'Дізнавайся більше'
  },
  

}