
/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "That's what she said.",
    source: "Michael Scott",
    year: 2005,
    tag: "humor"
  },
  {
    quote: "I am Beyoncé, always.",
    source: "Michael Scott",
    citation: "The Office, Season 5",
    year: 2009
  },
  {
    quote: "I am running away from my responsibilities. And it was a completely logical decision.",
    source: "Michael Scott",
    citation: "The Office, Season 4",
    year: 2007
  },
  {
    quote: "I’m an early bird and a night owl. So I’m wise and I have worms.",
    source: "Michael Scott",
    citation: "The Office, Season 2",
    year: 2005
  },
  {
    quote: "I don’t care what they say about me. I just want to eat.",
    source: "Pam Beesly",
    citation: "The Office, Season 3",
    year: 2007
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  //go back and do more javafunctionsss
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex]
}
//  console.log(getRandomQuote());


/***
 * `printQuote` function
***/

function printQuote() {

  const randomQuote = getRandomQuote();
  //paragraph formatting
  let htmlString = `
<p class="quote"> ${randomQuote.quote}</p>
<p class="source">${randomQuote.source} `
  //citation
  if (randomQuote.citation) {
    htmlString += ` <span class="citation">${randomQuote.citation}</span>`;
  }
  //year
  if (randomQuote.year) {
    htmlString += ` <span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    htmlString += ` <span class="year">${randomQuote.tag}</span>`;
  }
  //close
  htmlString += `</p>`;
  //idk what this is?
  document.getElementById('quote-box').innerHTML = htmlString;

}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);