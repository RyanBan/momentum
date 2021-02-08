const quoteContainer = document.querySelector(".quote");

function showQuote(data){
  const span = document.createElement("span");
  const quote = data.quotes[0].text;
  const author = data.quotes[0].author;
  span.innerText = `"${quote}" -${author}`;
  quoteContainer.appendChild(span);
}

function getQuotes() {
fetch(`https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    showQuote(data);
  });
}

function init() {
    getQuotes();
}

init();
