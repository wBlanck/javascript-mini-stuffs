let apiQuotes = [];

// Get Quotes from API
async function getQuotes() {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    quote.textContent = apiQuotes[randomNum()].text;
    author.textContent = apiQuotes[randomNum()].author;
  } catch (error) {
    // Catch error here
    console.log(error)
  }
}

// On load
getQuotes();


// Generate random num
let randomNum = function() {
  return Math.floor((Math.random() * 1643) + 1);
}

// Quote Elements
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');

// new quote
let generateQuote = function() {
  quote.textContent = apiQuotes[randomNum()].text;
  author.textContent = apiQuotes[randomNum()].author;
}

// Generate new quote on click
newQuote.onclick = generateQuote;