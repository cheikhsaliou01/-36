let values = [5, 11, 12, 13, 10];
//change this to match the rules of card game
let suits = [5, "jack", "queen", "king", 10];

const cards = [];

for (let s = 0; s < suits.length; s++) {
  for (let v = 0; v < values.length; v++) {
    let value = values[v];
    let suit = suits[s];
    cards.push({ value, suit });
  }
}
function card(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
    }
  }
}
console.log(cards);
