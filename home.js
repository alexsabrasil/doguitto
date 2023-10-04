let slideIndex = 0;
showSlides();

function plusDivs(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("dog-slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}


const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
});