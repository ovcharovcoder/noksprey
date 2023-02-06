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
new WOW().init();
