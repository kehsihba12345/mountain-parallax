// Initialize Variables

// variables for mountain background
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain_behind = document.getElementById("mountain_behind");
let mountain_front = document.getElementById("mountain_front");

// variable for home screen text
let text = document.getElementById("text");
let btn = document.getElementById("btn");

// const variable for header
const header = document.querySelector("header");

// initializing home as active navigation option
const contents = document.querySelectorAll("section");
const navContents = document.querySelectorAll("header li a");

window.addEventListener("scroll", function () {
  // setting parallax effect as per the y axis bar value
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";
  mountain_behind.style.top = value * 0.5 + "px";
  mountain_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 3.7 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});

// nav color change and navigation change on section change
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let homeIntersection = false;
    if(entry.target.id === contents[0].id){
      if(window.scrollY != 0){
        homeIntersection = true;
      } else {
        homeIntersection = false;
      }
    }
    if (entry.isIntersecting && !homeIntersection) {
      if (entry.target.id !== contents[0].id) {
        header.style.background = "#1c0522";
      } else {
        header.style.removeProperty("background");
      }

      // section on nav selection
      navContents.forEach((nav) => {
        nav.classList.remove("active");
        if (entry.target.className === nav.id) {
          nav.classList.add("active");
        }
      });
    }
  });
});

contents.forEach((content) => {
  navObserver.observe(content);
});

function logoOrHomeClicked() {
  navContents.forEach((nav) => {
    nav.classList.remove("active");
  });
  document.getElementById("home").classList.add("active");
  header.style.removeProperty("background");
  window.scrollTo(0,0);
}
