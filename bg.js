const body = document.querySelector("body");

const IMG_NUMBER = 12;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
    return number = Math.floor(Math.random() * IMG_NUMBER);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();