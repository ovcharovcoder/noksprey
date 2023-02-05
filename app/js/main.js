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

//WOW
new WOW().init();
