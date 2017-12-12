(function() {
  document.querySelector(".secondary-content__quotes .next").addEventListener("click", nextSlide);
  document.querySelector(".secondary-content__quotes .prev").addEventListener("click", previousSlide);
  
  var slides = document.getElementsByClassName("media-list__item");
  var slideIndex = 0;
  showSlides();

  function nextSlide() {
    setSlide(slideIndex + 1);
  }

  function previousSlide() {
    setSlide(slideIndex - 1);
  }

  function setSlide(n) {
    if (n < 0) {
      slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
      slideIndex = 0;
    } else {
      slideIndex = n;
    }
    
    showSlides();
  }

  function showSlides() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.add("u--hidden");
    }
    slides[slideIndex].classList.remove("u--hidden");
  }
})();