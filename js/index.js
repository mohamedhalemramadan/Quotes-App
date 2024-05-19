var arrayOfQuotes = [
  {
    'author': ' ― Oscar Wilde',
    'quote': ' Be yourself; everyone else is already taken.. '
  },
  {
    'author': ' ― Marilyn Monroe',
    'quote': ' I am selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you can not handle me at my worst, then you sure as hell do not deserve me at my best. '
  },
  {
    'author': ' ― Frank Zappa',
    'quote': ' So many books, so little time. '
  },
  {
    'author': ' ― Albert Einstein',
    'quote': ' Two things are infinite: the universe and human stupidity; and I am not sure about the universe. '
  },
  {
    'author': ' ― Marcus Tullius Cicero',
    'quote': ' A room without books is like a body without a soul. '
  },
  {
    'author': ' ― Bernard M. Baruch',
    'quote': ' Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind. '
  },
  {
    'author': ' ― Mae West',
    'quote': ' You only live once, but if you do it right, once is enough. '
  },
];
var previousNumber = -1;

function generateQuote() {
  var randomNmber
  do {
    randomNmber = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (randomNmber === previousNumber);
  previousNumber = randomNmber;
  var selectedQuote = arrayOfQuotes[randomNmber];


  document.getElementById('quoteFirstOutput').innerHTML = `\"${arrayOfQuotes[randomNmber].quote}\"`;
  document.getElementById('quoteSecondOutput').innerHTML = `\"${arrayOfQuotes[randomNmber].author}\"`;

}





