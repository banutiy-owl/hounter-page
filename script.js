
const carousel = document.querySelector('.carousel');

carousel.addEventListener('scroll', () => {
  if (carousel.scrollLeft > 0) {
    carousel.style.marginLeft = '-4.8rem';
  } else {
    carousel.style.marginLeft = '0'; 
  }
});
