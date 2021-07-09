// DOM - Document Object Model References
const btn = document.querySelector(".btn");
const quote = document.querySelector("#item-2");

// Fetch API
const getQuote = () => {
  quote.innerHTML = "Loading Your Quote...";
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
    })
    .catch((error) => alert(error));
};

btn.addEventListener("click", getQuote);
