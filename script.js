const totalImages = 100; // Update this to your number of images
let shuffledImages = [];
let currentIndex = 0;

// Shuffle images on first load
function shuffleImages() {
  shuffledImages = Array.from({ length: totalImages }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5);
  currentIndex = 0;
}

function showNextImage() {
  if (currentIndex >= shuffledImages.length) {
    shuffleImages(); // Reshuffle after all images shown
  }
  const imageNumber = shuffledImages[currentIndex];
  currentIndex++;
  document.querySelector("#imageDisplay").src = `images/image${imageNumber}.jpg`;
}

// On click "welcome"
document.querySelector(".centered-text").addEventListener("click", () => {
  document.querySelector(".black-background").style.display = "none";
  document.querySelector(".image-container").style.display = "block";
  shuffleImages();
  showNextImage();
});

// On click image
document.querySelector("#imageDisplay").addEventListener("click", () => {
  showNextImage();
});
