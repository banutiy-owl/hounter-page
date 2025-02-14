  const featuredHouseListCards = document.querySelector('.featured-house__list');

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

