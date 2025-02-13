
  const featuredHouseListCards = document.querySelector('.featured-house__list');

  featuredHouseListCards.addEventListener('scroll', () => {
    if (featuredHouseListCards.scrollLeft > 0) {
      featuredHouseListCards.style.marginLeft = '0';
    } else {
      featuredHouseListCards.style.marginLeft = '10rem'; 
    }
  });
