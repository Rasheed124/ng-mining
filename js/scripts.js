/*!
 * Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Initialize Swiper with fade transition
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // When slide changes, update the active thumbnail
  on: {
    slideChange: function () {
      updateActiveThumbnail(swiper.realIndex); // swiper.realIndex gives the correct index
    },
  },
});

function changeSlide(index) {
  swiper.slideToLoop(index); // Navigate to the correct slide
  updateActiveThumbnail(index); // Update active thumbnail
}

function updateActiveThumbnail(index) {
  // Remove 'active' class from all thumbnails
  document.querySelectorAll(".thumbnail-img").forEach((img) => img.classList.remove("active"));
  
  // Add 'active' class to the correct thumbnail
  document.querySelectorAll(".thumbnail-img")[index].classList.add("active");
}