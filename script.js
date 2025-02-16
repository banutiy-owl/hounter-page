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
