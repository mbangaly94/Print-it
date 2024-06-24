const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");

let currentIndex = 0;
const numberOfSlide = slides.length;

updateCaroussel(currentIndex);
createDots();
updateDot();

arrowLeft.addEventListener("click", function () {
  if (currentIndex === 0) {
    currentIndex = numberOfSlide - 1;
  } else {
    currentIndex--;
  }
  updateCaroussel(currentIndex);
});

arrowRight.addEventListener("click", function () {
  if (currentIndex === numberOfSlide - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCaroussel(currentIndex);
});

function createDots() {
  for (let i = 0; i < numberOfSlide; i++) {
    const dot = document.createElement("div");
    dots.appendChild(dot);
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("dot_selected");
    }
  }
}

function updateDot() {
  const listPoints = document.querySelectorAll(".dot");
  for (let index = 0; index < listPoints.length; index++) {
    const dot = listPoints[index];
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  }
}

function updateCaroussel(currentIndex) {
  const element = slides[currentIndex];
  bannerImg.setAttribute("src", "./assets/images/slideshow/" + element.image);
  bannerText.innerHTML = element.tagLine;
  updateDot();
}
