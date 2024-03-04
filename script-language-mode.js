const select = document.querySelector('select');
const allLanguage = ['en', 'de', 'ua'];
const langArr = {
    //nav bar
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
    }, //----------- Container Top 
    'topTextNummerOne': {
      'en' : `Hello, I'm Danylo`,
      'de' : 'Hallo, Ich bin Danylo',
      'ua' : 'Привіт мене звати Данило'
    },
    'topTetxNummerTwo': {
      'en' : 'I a Web-Development',
      'de' : 'Ich bin Webentwickler',
      'ua' : 'Я веб-розробник'
    }, //--------- Container About
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
    }, //-------------Container  Services
    'servicesWebDevelopment' : {
      'en' : 'Web Development',
      'de' : 'Web Entwicklung',
      'ua' : 'Веб-розробка'
    },
    'servicesWebDevelopmentText':{
      'en' : `I create virtual worlds from scratch. From dynamic websites to powerful web applications – your online success begins here.`,
      'de' : 'Ich erschaffe virtuelle Welten von Grund auf. Von dynamischen Websites bis hin zu leistungsstarken Webanwendungen – Ihr Online-Erfolg beginnt hier.',
      'ua' : 'Я створюю віртуальні світи з нуля. Від динамічних веб-сайтів до потужних веб-додатків - ваш успіх в Інтернеті починається тут.'
    },
    'servicesGraphicDevelopment' : {
      'en' : 'Graphic Development',
      'de' : 'Grafische Entwicklung',
      'ua' : 'Графічний розвиток'
    },
    'servicesGraphicDevelopmentText' : {
      'en' : 'I transform ideas into visual masterpieces. Graphic design, branding, and illustrations – each project becomes a unique work of art.',
      'de' : 'Ich verwandle Ideen in visuelle Meisterwerke. Grafikdesign, Branding und Illustrationen – jedes Projekt wird zu einem einzigartigen Kunstwerk.',
      'ua' : 'Я перетворюю ідеї на візуальні шедеври. Графічний дизайн, брендінг та ілюстрації - кожен проект стає унікальним твором мистецтва.'
    },
    'servicesConsultation' : {
      'en' : 'Consultation',
      'de' : 'Beratung',
      'ua' : 'Консультація'
    },
    'servicesGraphicDevelopmentText' : {
      'en' : 'My experience is your compass in the world of business and technology. Receive personalized consultations on web strategies, design, and effective utilization of online resources.',
      'de' : 'Meine Erfahrung ist Ihr Kompass in der Welt von Wirtschaft und Technologie. Erhalten Sie personalisierte Beratungen zu Webstrategien, Design und effektiver Nutzung von Online-Ressourcen.',
      'ua' : 'Мій досвід - це ваш компас у світі бізнесу та технологій. Отримуйте персоналізовані консультації з веб-стратегій, дизайну та ефективного використання онлайн-ресурсів.'
    }, //----------- Container Blog----------
    'blogTitelText' : {
      'en' : 'Step into the digital realm.',
      'de' : 'Betreten Sie die digitale Welt.',
      'ua' : 'Увійдіть у цифровий світ.'
    },
    'blogMainText' : {
      'en' : `Join me on the blog, where I share my journey through the realms of knowledge and technology. Discover captivating insights into programming, personal growth, and the boundless world of possibilities. Let's explore new horizons together!`,
      'de' : 'Begleiten Sie mich auf dem Blog, auf dem ich meine Reise durch die Bereiche des Wissens und der Technologie teile. Entdecken Sie fesselnde Einblicke in Programmierung, persönliches Wachstum und die grenzenlose Welt der Möglichkeiten. Lassen Sie uns gemeinsam neue Horizonte erkunden!',
      'ua' : 'Приєднуйтеся до мене на блозі, де я ділюся своєю подорожжю світом знань та технологій. Відкрийте захопливі інсайти у програмування, особистий розвиток та необмежений світ можливостей. Давайте разом вивчати нові горизонти!'
    },
    'KnowMore' : {
      'en' : 'Know more',
      'de' : 'Mehr erfahren',
      'ua' : 'Дізнайся більше'
    },
    'SubmitMessage' : {
      'en' : 'Submit Message',
      'de' : 'Nachricht senden',
      'ua' : 'Надіслати повідомлення'
    },
    'title' : {
      'en' : 'Danylo Kravets personal website',
      'de' : 'Danylo Kravets persönliche website',
      'ua' : 'Данило Кравець персональний вебсторінка'
    },
  
  
  };

  select.addEventListener('change', changeURLLanguage);
  
  function changeURLLanguage(){
    let lang = select.value; 
    location.href = window.location.pathname + '#' + lang;
    location.reload();
  }

  function changeLanguage (){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash)
    if(!allLanguage.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload(); 
    }
    select.value = hash; 
    document.querySelector('title').innerHTML = langArr['title'][hash];
    document.querySelector('.about').innerHTML = langArr['about'][hash];
    document.querySelector('.services').innerHTML = langArr['services'][hash];
    document.querySelector('.blog').innerHTML = langArr['blog'][hash];
    document.querySelector('.portfolio').innerHTML = langArr['portfolio'][hash];
    document.querySelector('.contacts').innerHTML = langArr['contacts'][hash];
    document.querySelector('.text-top1').innerHTML = langArr['topTextNummerOne'][hash];
    document.querySelector('.topTetxNummerTwo').innerHTML = langArr['topTetxNummerTwo'][hash];
    document.querySelector('.aboutTextBlockOneNummerOne').innerHTML = langArr['aboutTextBlockOneNummerOne'][hash];
    document.querySelector('.aboutTextBlockOneNummerTwo').innerHTML = langArr['aboutTextBlockOneNummerTwo'][hash];
    document.querySelector('.aboutTextBlockOneNummerThree').innerHTML = langArr['aboutTextBlockOneNummerThree'][hash];
    document.querySelector('.aboutTextBlockOneNummerFour').innerHTML = langArr['aboutTextBlockOneNummerFour'][hash];
    document.querySelector('.aboutTextBlockTwo').innerHTML = langArr['aboutTextBlockTwo'][hash];
    document.querySelector('.KnowMore').innerHTML = langArr['KnowMore'][hash];
    document.querySelector('.servicesWebDevelopment').innerHTML = langArr['servicesWebDevelopment'][hash];
    document.querySelector('.servicesWebDevelopmentText').innerHTML = langArr['servicesWebDevelopmentText'][hash];
    document.querySelector('.servicesGraphicDevelopment').innerHTML = langArr['servicesGraphicDevelopment'][hash];
    document.querySelector('.servicesGraphicDevelopmentText').innerHTML = langArr['servicesGraphicDevelopmentText'][hash];
    document.querySelector('.servicesConsultation').innerHTML = langArr['servicesConsultation'][hash];
    document.querySelector('.servicesGraphicDevelopmentText').innerHTML = langArr['servicesGraphicDevelopmentText'][hash];
    document.querySelector('.services-container').innerHTML = langArr['services'][hash];
  }

  changeLanguage()