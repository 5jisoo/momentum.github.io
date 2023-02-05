const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. \nGood programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "First, solve the problem.\nThen, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: "In order to be irreplaceable, one must always be different",
    author: "Coco Chanel",
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann",
  },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, \nrather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
  },
  {
    quote: "Code is like humor. \nWhen you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    quote:
      "Optimism is an occupational hazard of programming: \nfeedback is the treatment.",
    author: "Kent Beck",
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quote.classList.add("quote");
author.innerText = todaysQuote.author;
author.classList.add("author");
