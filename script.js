const picArray = [
  "./assets/images/crows.jpg",
  "./assets/images/leaves.jpg",
  "./assets/images/skyscraper.jpg",
];

let randomPicture = document.querySelector(".wrapper");

let randomIndex = Math.floor(Math.random() * picArray.length);
randomPicture.style.backgroundImage = `url(${picArray[randomIndex]})`;
