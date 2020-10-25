const feedback = document.querySelector(".button-contacts");
const feedbackPopup = document.querySelector(".modal-feedback");
const close = document.querySelector(".modal-close");
const namePopup = feedbackPopup.querySelector("[name=name]");
const formPopup = feedbackPopup.querySelector(".feedback-form");
const name = feedbackPopup.querySelector("[name=name]");
const email = feedbackPopup.querySelector("[name=email]");
const isStorageSupport = true;
let storage = "";

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  namePopup.focus();
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

formPopup.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.remove("modal-error");
  } else {
    localStorage.setItem("name", name.value);
  }
});

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});
