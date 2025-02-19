/*const featuredHouseListCards = document.querySelector('.featured-house__list');

  featuredHouseListCards.addEventListener('scroll', () => {
    if (featuredHouseListCards.scrollLeft > 0) {
      featuredHouseListCards.style.marginLeft = '0';
    } else {
      featuredHouseListCards.style.marginLeft = '10rem'; 
    }
  });

const carousel = document.querySelector('.carousel');

carousel.addEventListener('scroll', () => {
  if (carousel.scrollLeft > 0) {
    carousel.style.marginLeft = '-4.8rem';
  } else {
    carousel.style.marginLeft = '0'; 
  }
});

*/
const radioButtons = document.querySelectorAll('input[name="slider"]');
const slider = document.querySelector(".about__cards");

radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      slider.style.transition = "transform 0.5s ease-in-out";
      if (index === 0) {
        slider.style.transform = "translateX(0)";
      } else if (index === 1) {
        slider.style.transform = "translateX(-25%)";
      } else if (index === 2) {
        slider.style.transform = "translateX(-57%)";
      }
    }
  });
});

document
  .getElementById("more-articles-button")
  .addEventListener("click", function () {
    const hiddenCards = document.querySelectorAll(
      ".findout__cards .findout__card:nth-child(n+4)"
    );

    if (this.textContent === "More articles") {
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
  });

const cards = document.querySelectorAll(".findout__card");

cards.forEach((card) => {
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

document
  .querySelector(".tour-main-img-video")
  .addEventListener("click", function () {
    const video = document.querySelector(".main-video");
    video.style.display = "block";
    video.classList.add("main-video-checked");
    video.pause();
    video.currentTime = 0;
    video.play();
    document.querySelector(".close-button").style.display = "block";
  });

document.querySelector(".close-button").addEventListener("click", function () {
  const video = document.querySelector(".main-video");
  video.pause();
  video.currentTime = 0;
  video.style.display = "none";
  document.querySelector(".close-button").style.display = "none";
});



//------subscribe section

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
      emailInput.value="";
    } 
  });