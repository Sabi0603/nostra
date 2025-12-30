
// CAROUSEL 
const carouselLeftBtn = document.getElementById("carouselLeftBtn");
const carouselRightBtn = document.getElementById("carouselRightBtn");
const carouselTrack = document.getElementById("carouselTrack");
const carouselSlide = document.querySelectorAll(".carousel-slide");
const carousel = document.getElementById("carousel");

let index = 0;
let autoSlide;
const total = carouselSlide.length;

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${index * 100}%)`;
}

carouselRightBtn.addEventListener("click", () => {
    index++;
    if (index >= total) index = 0;
    updateCarousel();
});

carouselLeftBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = total - 1;
    updateCarousel();
});

function startAutoSlide() {
    autoSlide = setInterval(() => {
        index++;
        if (index >= total) index = 0;
        updateCarousel();
    }, 2000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

startAutoSlide();

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

// BRAND
const wrapper = document.getElementById("brandWrapper");
const track = document.getElementById("brandTrack");

let scrollSpeed = 1;

function autoScroll() {
  wrapper.scrollLeft += scrollSpeed;

  if (wrapper.scrollLeft >= track.scrollWidth - wrapper.clientWidth) {
    wrapper.scrollLeft = 0;
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();
