const aboutBtn = document.getElementById("about");
const homeBtn = document.getElementById("home");
const serviceBtn = document.getElementById("service");
const contactBtn = document.getElementById("contact");
let subNav = document.querySelector(".nav-displayer");
const navCard = document.querySelector(".nav-card");
let contentCard = document.querySelector(".content");
const aboutCont = document.getElementById("about-content");
const homeCont = document.getElementById("home-content");
const serviceCont = document.getElementById("service-content");
const contactCont = document.getElementById("contact-content");
const toggle = document.getElementById("toggle");
const nav = document.querySelector(".nav-bar");

toggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

function subNavChanger() {
  aboutBtn.addEventListener("click", function () {
    navCard.classList.toggle("changeCard");
    setTimeout(() => {
      subNav.innerText = "work";
    }, 900);
    setTimeout(() => {
      navCard.classList.remove("changeCard");
    }, 1500);
    if (document.getElementById("about-content").classList.contains("switch")) {
      document.getElementById("about-content").classList.remove("switch");
      document.getElementById("about-content").classList.add("reveal");
      document.getElementById("about-content").classList.add("appear");
      homeCont.classList.add("switch");
      homeCont.classList.remove("appear");
      serviceCont.classList.add("switch");
      serviceCont.classList.remove("appear", "reveal");
      contactCont.classList.add("switch");
      contactCont.classList.remove("appear");
    } else if (aboutCont.classList.contains("reveal")) {
      aboutCont.classList.add("reveal");
    }
    if (aboutCont.classList.contains("reveal")) {
      contentCard.classList.add("switch");
      contentCard.classList.remove("reveal");
    }
  });
  serviceBtn.addEventListener("click", function () {
    navCard.classList.toggle("changeCard");
    setTimeout(() => {
      subNav.innerText = "service";
    }, 900);
    setTimeout(() => {
      navCard.classList.remove("changeCard");
    }, 1500);
    if (serviceCont.classList.contains("reveal")) {
      serviceCont.classList.add("reveal");
    } else if (serviceCont.classList.contains("switch"));
    {
      serviceCont.classList.remove("switch");
      serviceCont.classList.add("reveal", "appear");
      aboutCont.classList.add("switch");
      homeCont.classList.add("switch");
      contactCont.classList.add("switch");
      homeCont.classList.remove("reveal", "appear");
      aboutCont.classList.remove("reveal", "appear");
      contactCont.classList.remove("reveal", "appear");
    }
    if (serviceCont.classList.contains("appear")) {
      aboutCont.classList.add("switch");
      homeCont.classList.add("switch");
    }
  });
  homeBtn.addEventListener("click", function () {
    navCard.classList.toggle("changeCard");
    setTimeout(() => {
      subNav.innerText = "home";
    }, 900);
    setTimeout(() => {
      navCard.classList.remove("changeCard");
    }, 1500);
    if (homeCont.classList.contains("reveal")) {
      homeCont.classList.add("reveal");
    } else if (homeCont.classList.contains("switch")) {
      homeCont.classList.remove("switch");
      homeCont.classList.add("reveal", "appear");
      aboutCont.classList.add("switch");
      serviceCont.classList.add("switch");
      contactCont.classList.add("switch");
      contactCont.classList.remove("appear", "reveal");
    }
    if (homeCont.classList.contains("reveal")) {
      homeCont.classList.add("reveal");
      aboutCont.classList.remove("reveal", "appear");
      serviceCont.classList.remove("reveal", "appear");
    }
    if (homeCont.classList.contains("appear")) {
      aboutCont.classList.add("switch");
      serviceCont.classList.add("switch");
    }
  });
  contactBtn.addEventListener("click", function () {
    navCard.classList.toggle("changeCard");
    setTimeout(() => {
      subNav.innerText = "contact";
    }, 900);
    setTimeout(() => {
      navCard.classList.remove("changeCard");
    }, 1500);
    if (contactCont.classList.contains("reveal")) {
      contactCont.classList.add("reveal");
    } else if (contactCont.classList.contains("switch"));
    {
      contactCont.classList.remove("switch");
      contactCont.classList.add("reveal", "appear");
      aboutCont.classList.add("switch");
      homeCont.classList.add("switch");
      serviceCont.classList.add("switch");
      homeCont.classList.remove("appear", "reveal");
      aboutCont.classList.remove("reveal", "appear");
      serviceCont.classList.remove("reveal", "appear");
    }
    if (contactCont.classList.contains("appear")) {
      aboutCont.classList.add("switch");
      homeCont.classList.add("switch");
      serviceCont.classList.add("switch");
    }
  });
}

subNavChanger();


const home = document.getElementById('home-nav');
const work = document.getElementById('work-nav');
const service = document.getElementById('service-nav');
const contact = document.getElementById('contact-nav');

function responsive() {
  
  home.addEventListener('click', function() {
    homeCont.classList.remove('switch');
    aboutCont.classList.add('switch');
    serviceCont.classList.add('switch');
    contactCont.classList.add('switch');
    subNav.innerText = "home";
  });
  work.addEventListener("click", function() {
    homeCont.classList.add('switch');
    aboutCont.classList.remove('switch');
    serviceCont.classList.add('switch');
    contactCont.classList.add('switch');
    subNav.innerText = 'work';
  });
  service.addEventListener('click', function() {
    homeCont.classList.add('switch');
    aboutCont.classList.add('switch');
    serviceCont.classList.remove('switch');
    contactCont.classList.add('switch');
    subNav.innerText = 'service';
  });
  contact.addEventListener('click', function() {
    homeCont.classList.add('switch');
    aboutCont.classList.add('switch');
    serviceCont.classList.add('switch');
    contactCont.classList.remove('switch');
    subNav.innerText = 'contact';
  });
}

responsive();
