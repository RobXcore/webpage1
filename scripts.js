"use strict";

const toggleButton = document.querySelector(".toggle-button");
const navbar = document.querySelector(".rabvan");
const navbarLinks = document.querySelector(".navbar-links");
const navbarUl = document.querySelector(".nav-list");
const bgVertical = document.querySelector(".section1bg2");
const bgHorizontal = document.querySelector(".section1bg");
const btnInfo = document.querySelector(".nav1");
const allSections = document.querySelectorAll(".section");
const section1 = document.querySelector(".section__1");
const section2 = document.querySelector(".section__2");
const section3 = document.querySelector(".section__3");
const section4 = document.querySelector("#contact");
const btnContacto = document.querySelector(".nav4");
const header = document.querySelector(".header");
const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});

navbarUl.addEventListener("click", function () {
  navbarLinks.classList.remove("active");
});
const showImage = function () {
  if (viewportWidth > 569) {
    bgVertical.classList.add("hidden");
  } else if (viewportWidth < 569) {
    bgHorizontal.classList.add("hidden");
    bgVertical.classList.remove("hidden");
  }
};
showImage();
let currentSlide = 0;
const slides = document.querySelectorAll(".edils");
const dots = document.querySelectorAll(".tod");
const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".nextt").addEventListener("click", next);

document.querySelector(".prevv").addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});
document
  .querySelector("#contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";
  });

btnInfo.addEventListener("click", function (e) {
  e.preventDefault();
  section2.scrollIntoView({
    behavior: "smooth",
  });
});

btnContacto.addEventListener("click", function (e) {
  e.preventDefault();
  section4.scrollIntoView({
    behavior: "smooth",
  });
});

//// Sticky navbar////
const options = {
  root: null,
  threshold: [0.8],
  rootMargin: "0px 0px 0px 0px",
};
const options2 = {
  root: null,
  threshold: 0.8,
  rootMargin: "0px 0px 0px 0px",
};
const showNavbar = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navbar.classList.add("sticky");
      console.log(entry);
    } else {
      navbar.classList.remove("sticky");
    }
  });
};
const observer = new IntersectionObserver(showNavbar, options);
const observer2 = new IntersectionObserver(showNavbar, options2);

console.log(section3);
observer.observe(section2);
observer2.observe(section4);
