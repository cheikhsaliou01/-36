// Определить количество нечетных чисел в массиве
let numbers = [1, 2, 3, 1, 5, 6];
// let odds = numbers.filter((num) => num % 2 === 1);
// console.log(odds);

let odds = [];
for (let num of numbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds);
