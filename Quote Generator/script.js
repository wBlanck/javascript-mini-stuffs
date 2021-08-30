let apiQuotes = [];

// Get Quotes from API
async function getQuotes() {
  loading();
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    quote.textContent = apiQuotes[randomNum()].text;
    author.textContent = apiQuotes[randomNum()].author;
    completeLoading();
  } catch (error) {
    // Catch error here
    console.log(error)
  }
}



// Generate random num
let randomNum = function() {
  return Math.floor((Math.random() * apiQuotes.length) + 1);
}

// Elements
const quote = document.getElementById('quote');
const quoteContainer = document.getElementById('quote-container');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading 
function completeLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// new quote
let generateQuote = function() {
  loading();
  const newQuote = apiQuotes[randomNum()];
  
  if(newQuote.text.length > 120){
    quote.classList.add('long-quote');
  } else {
    quote.classList.remove('long-quote');
  }

  quote.textContent = newQuote.text;
  author.textContent = newQuote.author;

  completeLoading();
}

// Generate new quote on click
newQuote.onclick = generateQuote;


// On load
getQuotes();
