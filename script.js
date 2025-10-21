// Lists of your desktop and mobile PNGs
const desktopImages = [
  "intro-desktop.png",
  "bio-desktop.png",
  "1-desktop.png",
  "2-desktop.png",
  "3-desktop.png"
];

const mobileImages = [
  "intro-mobile.png",
  "bio-mobile.png",
  "1-mobile.png",
  "2-mobile.png",
  "3-mobile.png"
];

// Choose desktop or mobile set based on screen width
let isMobile = window.innerWidth <= 768;
let images = isMobile ? mobileImages : desktopImages;
let index = 0;

const screen = document.getElementById("screen");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Update the image source
function updateImage() {
  screen.src = images[index];
}

// Next button
next.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateImage();
});

// Back button
prev.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateImage();
});

// Optional: update automatically if screen is resized
window.addEventListener("resize", () => {
  const newIsMobile = window.innerWidth <= 768;
  if (newIsMobile !== isMobile) {
    isMobile = newIsMobile;
    images = isMobile ? mobileImages : desktopImages;
    index = 0;
    updateImage();
  }
});
