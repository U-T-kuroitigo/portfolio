let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector(".slides");
  const imageSize = slides.clientWidth;
  console.log(imageSize);
  const totalSlides = document.querySelectorAll(".slides img").length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * imageSize; // 画像の幅に合わせる
  slides.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
