var user = 'Logan';
var salutation = 'Don\'t take our word for it, ';
var greetingOne = salutation + user +'!';
var greetingTwo = 'Here are the latest Scarab reviews.';
var greetingOneEl = document.getElementById('greetingOne');
var greetingTwoEl = document.getElementById('greetingTwo');

greetingOneEl.textContent = greetingOne;
greetingTwoEl.textContent = greetingTwo;

var price = 20,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);