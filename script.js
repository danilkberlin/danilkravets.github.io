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

// ----------------- Button Know More

const learnMoreButton = () =>{
  console.log('Hallo');
  learnMore.innerHTML = `
    <div class="">
      <div class="row py-4">
      <div class="col-md-6">
        <h1 class="main-text"></h1>
        <p>Welcome to my webpage! My name is Danylo Kravets, and 
        I present myself as a talented young individual with a lively 
        interest in the world and a commitment to continuous development. 
        Born in the cultural city of Kharkiv, Ukraine, I made the decision 
        to embark on a new stage of my life at the age of 17 by moving to the 
        renowned city of Berlin, Germany. Here, I not only immerse myself in learning 
        the German language but also discovered my passion for the world of programming. 
        Currently, I am actively studying and practicing programming, aiming to expand my 
        skills and reach new heights in this dynamic field. My determination and constant 
        pursuit of self-improvement make me a representative of the vibrant young generation, 
        ready for professional growth and exploring new horizons. Join me on this journey 
        through the world of knowledge and technology, where every day is a new opportunity 
        to achieve something amazing!</p>
      </div>
      <div class="col-md-6">
        <img  >
      </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>During my time in college, I embarked on the journey of learning programming languages. 
          Initially, I faced challenges, and despite numerous attempts and setbacks, I remained determined.
          Eventually, I made the decision to change my surroundings and relocated to Berlin. 
          In this new environment, I took the initiative to independently pursue and study programming 
          languages.
          </p>
          <p>Thank you for your interest in our services! I specialize in providing high-quality design 
            services, including design and web design development. My experience and professional approach
            allow me to cover a wide range of client needs, ensuring unique and effective solutions.
            I aim to ensure that each project reflects your uniqueness and achieves set goals. 
            Trust me, and I will create an individual design for you, combining creativity, 
            functionality, and visual impact.
          </p>
          <p>I started my journey in programming by learning HTML, CSS, and JavaScript for 
          frontend development, as well as Python and PHP for backend development. During my 
          internship at an innovative company, I gained valuable experience participating in 
          projects related to frontend development and backend service creation, significantly 
          enhancing my skills and depth of understanding in programming.</p>
        </div>
        <div class="col-12">
          <button onclick="closeLearnMore()">CloseLearnMore</button>
        </div>
      </div>
    </div>
    
  `;
}

const closeLearnMore = () =>{
  
}