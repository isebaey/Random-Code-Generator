let quotes = [
  `“Be yourself; everyone else is already taken."`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  `“The only way to do great work is to love what you do.”`,
  `“The greatest glory in living lies not in never falling, but in rising every time we fall.”`,
  `“Life is what happens when you're busy making other plans.”`,
  `“Get busy living or get busy dying.”`,
  `“The future belongs to those who believe in the beauty of their dreams.”`,
  `“It is our choices, Harry, that show what we truly are, far more than our abilities.”`,
  `“In three words I can sum up everything I've learned about life: it goes on.”`,
];

let others = [
  `― Oscar Wilde`,
  `― Marilyn Monroe`,
  `― Albert Einstein`,
  `― Steve Jobs`,
  `― Nelson Mandela`,
  `― John Lennon`,
  `― Stephen King`,
  `― Eleanor Roosevelt`,
  `― J.K. Rowling`,
  `― Robert Frost`,
];

let qouteBtn = document.getElementById("new-quote");
qouteBtn.addEventListener("click", getRndQuote);

function getRndQuote() {
  var finalNumber = Math.floor(Math.random() * 10) + 1;
  if (finalNumber === 1) {
    document.getElementById("quote").innerHTML = quotes[0];
    document.getElementById("other").innerHTML = others[0];
  } else if (finalNumber === 2) {
    document.getElementById("quote").innerHTML = quotes[1];
    document.getElementById("other").innerHTML = others[1];
  } else if (finalNumber === 3) {
    document.getElementById("quote").innerHTML = quotes[2];
    document.getElementById("other").innerHTML = others[2];
  } else if (finalNumber === 4) {
    document.getElementById("quote").innerHTML = quotes[3];
    document.getElementById("other").innerHTML = others[3];
  } else if (finalNumber === 5) {
    document.getElementById("quote").innerHTML = quotes[4];
    document.getElementById("other").innerHTML = others[4];
  } else if (finalNumber === 6) {
    document.getElementById("quote").innerHTML = quotes[5];
    document.getElementById("other").innerHTML = others[5];
  } else if (finalNumber === 7) {
    document.getElementById("quote").innerHTML = quotes[6];
    document.getElementById("other").innerHTML = others[6];
  } else if (finalNumber === 8) {
    document.getElementById("quote").innerHTML = quotes[7];
    document.getElementById("other").innerHTML = others[7];
  } else if (finalNumber === 9) {
    document.getElementById("quote").innerHTML = quotes[8];
    document.getElementById("other").innerHTML = others[8];
  } else if (finalNumber === 10) {
    document.getElementById("quote").innerHTML = quotes[9];
    document.getElementById("other").innerHTML = others[9];
  } else {
    document.getElementById("quote").innerHTML = "error loading data";
    document.getElementById("other").innerHTML = "error loading data";
  }
}
