//Parallax img

let bg1 = document.querySelector("#parallaxImg1");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg1.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
});

let bg2 = document.querySelector("#parallaxImg2");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg2.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
});

let bg3 = document.querySelector("#parallaxImg3");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg3.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
});

let bg4 = document.querySelector("#parallaxImg4");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg4.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
});

let bg5 = document.querySelector("#parallaxImg5");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg5.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
});

let bg6 = document.querySelector("#parallaxImg6");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg6.style.transform = "translate(-" + x * 8 + "px, -" + y * 8 + "px)";
});

//WOW
var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 40, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// Burger menu
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");
mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
