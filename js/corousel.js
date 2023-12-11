let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");

  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide) => {
      slide.classList.remove("actives");
    });

    slides[index].classList.add("actives");
    currentIndex = index;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Додавання обробників подій для кнопок кожного слайда
  document.getElementById("nextBtn1").addEventListener("click", nextSlide);
  document.getElementById("prevBtn1").addEventListener("click", prevSlide);

  document.getElementById("nextBtn2").addEventListener("click", nextSlide);
  document.getElementById("prevBtn2").addEventListener("click", prevSlide);

  document.getElementById("nextBtn3").addEventListener("click", nextSlide);
  document.getElementById("prevBtn3").addEventListener("click", prevSlide);
});
