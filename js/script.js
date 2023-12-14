let quotes = [
  `“Be yourself; everyone else is already taken."`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  `“The only way to do great work is to love what you do.”`,
  `“The greatest glory in living lies not in never falling, but in rising every time we fall.”`,
  `“Life is what happens when you're busy making other plans.”`,
  `“Get busy living or get busy dying.”`,
  `““The greatest (struggle/striving) is to battle your own soul, to fight the evil within yourself.”`,
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
  `― Prophet Muhammad`,
  `― J.K. Rowling`,
  `― Robert Frost`,
];

let qouteBtn = document.getElementById("new-quote");
qouteBtn.addEventListener("click", handleButtonClick);

lastQuoteIndex = -1;

function handleButtonClick() {
  getRndQuote();
  changeColor();
  changOtherImage();
}

var qouteNumber;
function getRndQuote() {
  do {
    qouteNumber = Math.floor(Math.random() * 10);
  } while (qouteNumber === lastQuoteIndex);

  lastQuoteIndex = qouteNumber;

  document.getElementById("quote").innerHTML = quotes[qouteNumber];
  document.getElementById("other").innerHTML = others[qouteNumber];
}

function changeColor() {
  // Generate a random color (you can replace this logic with your own color generation)
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Update the --main-color CSS variable with the new color
  document.documentElement.style.setProperty("--main-color", randomColor);
}

function changOtherImage() {
  var imagePath = `image/${qouteNumber}.jpg`;
  document.getElementById("other-image").setAttribute("src", imagePath);
}
