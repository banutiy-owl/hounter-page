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

    hiddenCards.forEach((card) => {
      if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    if (this.textContent === "More articles") {
      this.textContent = "Less articles";
    } else {
      this.textContent = "More articles";
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
