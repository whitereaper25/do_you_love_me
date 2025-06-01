const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Fix selector
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Move No button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // Height instead of width
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block"; // More reliable
    gifResult.play().catch(err => console.log(err)); // Catch autoplay errors
  }, 3000);
});
