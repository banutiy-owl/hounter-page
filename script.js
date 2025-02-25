//------start of header
const burgerMenu = document.getElementById("burgerMenu");
const headerBurgerMenu = document.querySelector(".header__dropdown-menu");

let isBurgerOpen = false;

burgerMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isBurgerOpen) {
    headerBurgerMenu.style.display = "none";
  } else {
    headerBurgerMenu.style.display = "block";
  }
  isBurgerOpen = !isBurgerOpen;
});

document.addEventListener("click", (e) => {
  if (!burgerMenu.contains(e.target) && !headerBurgerMenu.contains(e.target)) {
    if (isBurgerOpen) {
      headerBurgerMenu.style.display = "none";
      isBurgerOpen = false;
    }
  }
});

const links = document.querySelectorAll(".header__dropdown-item a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (isBurgerOpen) {
      headerBurgerMenu.style.display = "none";
      isBurgerOpen = false;
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1330) {
    headerBurgerMenu.style.display = "none";
    isBurgerOpen = false;
  }
});

//------end of header

//------start of featured house section
const featuredHouseSlider = document.querySelector(".featured-house__list");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

const scrollStep = 300;

arrowLeft.addEventListener("click", () => {
  featuredHouseSlider.scrollBy({
    left: -scrollStep,
    behavior: "smooth",
  });
});

arrowRight.addEventListener("click", () => {
  featuredHouseSlider.scrollBy({
    left: scrollStep,
    behavior: "smooth",
  });
});

const featuredHouseRadioButtons = document.querySelectorAll(
  'input[name="radioTypeHouses"]'
);
const featuredHouseCards = document.querySelectorAll(
  ".featured-house__list-card"
);

function filterFeaturedHouseCardsByType(selectedType) {
  featuredHouseCards.forEach((featuredHouseCard) => {
    const featuredHouseCardType = featuredHouseCard.getAttribute("data-type");
    if (featuredHouseCardType === selectedType || selectedType === "all") {
      featuredHouseCard.classList.add("visible");
    } else {
      featuredHouseCard.classList.remove("visible");
    }
  });
}

featuredHouseRadioButtons.forEach((featuredHouseRadio) => {
  featuredHouseRadio.addEventListener("change", function () {
    const selectedType = this.value;
    filterFeaturedHouseCardsByType(selectedType);
  });
});

filterFeaturedHouseCardsByType(
  document.querySelector('input[name="radioTypeHouses"]:checked').value
);

const featuredHouseSubtitle = document.querySelector(
  ".featured-house .subtitle"
);

function updateFeaturedHouseSubtitleClass() {
  if (window.innerWidth <= 624) {
    featuredHouseSubtitle.classList.remove("subtitle");
    featuredHouseSubtitle.classList.remove("u-margin-left-body");
    featuredHouseSubtitle.classList.add("subtitle-above");
  } else {
    featuredHouseSubtitle.classList.remove("subtitle-above");
    featuredHouseSubtitle.classList.add("u-margin-left-body");
    featuredHouseSubtitle.classList.add("subtitle");
  }
}

updateFeaturedHouseSubtitleClass();

window.addEventListener("resize", updateFeaturedHouseSubtitleClass);

//------end of featured house section

//------start of tour section

document
  .querySelector(".tour-main-img-video")
  .addEventListener("click", function () {
    const video = document.querySelector(".main-video");
    const image = document.querySelector(".tour-main-img-video");
    image.style.display = "none";

    video.style.display = "block";
    video.classList.add("main-video-checked");
    video.pause();
    video.currentTime = 0;
    video.play();
    document.querySelector(".close-button").style.display = "block";
  });

document.querySelector(".close-button").addEventListener("click", function () {
  const video = document.querySelector(".main-video");
  const image = document.querySelector(".tour-main-img-video");
  image.style.display = "flex";
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  document.querySelector(".close-button").style.display = "none";
});

const tourSubtitle = document.querySelector(".tour .subtitle");

function updateTourSubtitleClass() {
  if (window.innerWidth <= 876) {
    tourSubtitle.classList.remove("subtitle");
    tourSubtitle.classList.add("subtitle-above");
  } else {
    tourSubtitle.classList.remove("subtitle-above");
    tourSubtitle.classList.add("subtitle");
  }
}

updateTourSubtitleClass();

window.addEventListener("resize", updateTourSubtitleClass);

//------end of tour section

//------start of about section

const aboutDots = document.querySelectorAll('.about__dots input[type="radio"]');
const aboutSlider = document.querySelector(".about__slider");
const aboutCards = document.querySelectorAll(".about__card");
const aboutDotLabels = document.querySelectorAll(".about__dot");

const cardGap = 32;

aboutDots.forEach((dot, index) => {
  dot.addEventListener("change", () => {
    const cardWidth = aboutCards[index].offsetWidth;
    const offset = index * (cardWidth + cardGap);

    aboutSlider.scrollLeft = offset;
    aboutDotLabels.forEach((dotLabel) => dotLabel.classList.remove("active"));
    aboutDotLabels[index].classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSlider = document.querySelector(".about__slider");
  const aboutCards = document.querySelectorAll(".about__card");
  const aboutDotLabels = document.querySelectorAll(".about__dot");
  aboutDotLabels[0].classList.add("active");

  function updateDotsOnScroll() {
    const sliderWidth = aboutSlider.offsetWidth;
    const scrollLeft = aboutSlider.scrollLeft;

    for (let i = 0; i < aboutCards.length; i++) {
      const card = aboutCards[i];
      const cardOffsetLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;

      if (
        scrollLeft + sliderWidth >= cardOffsetLeft + cardWidth &&
        scrollLeft <= cardOffsetLeft
      ) {
        aboutDotLabels.forEach((dotLabel) =>
          dotLabel.classList.remove("active")
        );
        aboutDotLabels[i].classList.add("active");
        break;
      }
    }
  }

  aboutSlider.addEventListener("scroll", updateDotsOnScroll);

  updateDotsOnScroll();
});

let isDragging = false;
let startPosition = 0;
let scrollPosition = 0;

aboutSlider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPosition = e.clientX;
  scrollPosition = aboutSlider.scrollLeft;
  aboutSlider.style.cursor = "grabbing";
});

aboutSlider.addEventListener("touchstart", (e) => {
  isDragging = true;
  startPosition = e.touches[0].clientX;
  scrollPosition = aboutSlider.scrollLeft;
  aboutSlider.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const diff = e.clientX - startPosition;
  aboutSlider.scrollLeft = scrollPosition - diff;
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const diff = e.touches[0].clientX - startPosition;
  aboutSlider.scrollLeft = scrollPosition - diff;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  aboutSlider.style.cursor = "grab";
});

document.addEventListener("touchend", () => {
  isDragging = false;
  aboutSlider.style.cursor = "grab";
});

//------end of about section

//------start of findout section

let isMoreArticles = true;

document
  .getElementById("more-articles-button")
  .addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(
      ".findout__cards .findout__card:nth-child(n+4)"
    );

    if (isMoreArticles) {
      this.textContent = "Less articles";
      hiddenCards.forEach((card) => {
        card.style.display = "flex";
      });
    } else {
      this.textContent = "More articles";
      hiddenCards.forEach((card) => {
        card.style.display = "none";
      });
    }

    isMoreArticles = !isMoreArticles;
  });

const findoutCards = document.querySelectorAll(".findout__card");

findoutCards.forEach((card) => {
  card.addEventListener("click", function () {
    const title = card.querySelector(".findout__card-title").textContent;
    const ownerName = card.querySelector(
      ".owner-info-name-city h4"
    ).textContent;
    const ownerPhoto = card.querySelector(".findout__card-avatar").src;
    const imageUrl = card.querySelector(".findout__card-image").src;

    const mainCard = document.querySelector(".findout__card-main");

    mainCard.querySelector(".findout__card-main-title").textContent = title;
    mainCard.querySelector(".findout__card-owner-info h4").textContent =
      ownerName;
    mainCard.querySelector(".findout__card-main-image").src = imageUrl;
    mainCard.querySelector(".findout__card-main-avatar").src = ownerPhoto;
  });
});

//------end of findout section

//------start of subscribe section

const form = document.querySelector(".subscribe__form");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector(".btn--green__subscribe");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    emailInput.blur();
  }
});

emailInput.addEventListener("blur", function () {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(emailValue)) {
    form.style.border = "2px solid red";
    errorMessage.style.display = "block";
  } else {
    form.style.border = "none";
    errorMessage.style.display = "none";
  }
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(emailValue)) {
    alert("Welcome to Hounter!");
    emailInput.value = "";
  }
});

//-----end of subscribe section

//------start of joinform section

document.getElementById("dropdown-btn").addEventListener("click", function () {
  var dropdownContent = document.querySelector(
    ".joinform__form-dropdown-content"
  );
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

document
  .querySelectorAll(".joinform__form-dropdown-option")
  .forEach(function (option) {
    option.addEventListener("click", function () {
      var selectedValue = option.textContent;
      document.getElementById("dropdown-btn").textContent = selectedValue;
      document.querySelector(".joinform__form-dropdown-content").style.display =
        "none";
    });
  });

const messageInput = document.getElementById("message");
const messageCounter = document.getElementById("message-counter");

messageInput.addEventListener("input", function () {
  const currentLength = messageInput.value.length;
  messageCounter.textContent = `${currentLength}/500`;
});

//------end of joinform section
