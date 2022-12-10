// Initialize Variables

// variables for mountain background
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_behind = document.getElementById('mountain_behind');
let mountain_front = document.getElementById('mountain_front');

// variable for home screen text
let text = document.getElementById('text');
let btn = document.getElementById('btn');

// variable for header
let header = document.querySelector('header');

// initializing home as active navigation option
let home = document.getElementById('home').classList.add("active");

// variable for nav bar
const navBar = document.querySelectorAll("header a");

const LOGO_ACTIVE = "logo active";

// setting nav options active
navBar.forEach(element => {
    element.addEventListener("click", function(){
        // removing active attribute from all class
        navBar.forEach(nav => nav.classList.remove("active"));
        // adding active attribute to this class
        this.classList.add("active");

        // clicking on logo will activate home
        if(this.className.match("logo active")){
            document.getElementById('home').classList.add("active");
        }
    })
})

window.addEventListener('scroll', function(){
    // setting parallax effect as per the y axis bar value
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountain_behind.style.top = value * 0.5 + 'px';
    mountain_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})