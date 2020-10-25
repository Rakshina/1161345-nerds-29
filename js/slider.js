const slider = document.querySelector(".slider-wrapper");
const buttonFirst = document.querySelector(".first-slider");
const buttonSecond = document.querySelector(".second-slider");
const buttonThird = document.querySelector(".third-sleider");

buttonFirst.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider.classList.remove("site-wrapper-2");
  slider.classList.remove("site-wrapper-3");
  slider.classList.add("site-wrapper-1");
});

buttonSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider.classList.remove("site-wrapper-1");
  slider.classList.remove("slide-current");
  slider.classList.remove("site-wrapper-3");
  slider.classList.add("site-wrapper-2");
});

buttonThird.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider.classList.remove("site-wrapper-1");
  slider.classList.remove("slide-current");
  slider.classList.remove("site-wrapper-2");
  slider.classList.add("site-wrapper-3");
});
