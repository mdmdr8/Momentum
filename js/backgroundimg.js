const images = [
  "albert.jpg",
  "jobs.jpg",
  "musk.jpg",
  "light.jpg",
  "apple.webp",
  "universe.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
