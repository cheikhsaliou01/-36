// numbers = [6, 9, 21];
const solution = (numbers) => {
  //1. find bigger and smallest number in the array, and keep the index of the biggest number
  let bigger = Math.max(...numbers);
  let smaller = Math.min(...numbers);
  let index = numbers.findIndex((n) => n === bigger);

  //2. return the result if the result of the subtraction is positive or null
  if (smaller === bigger) {
    return numbers.reduce((a, c) => a + c);
  }

  //3.substract and replace
  numbers.splice(index, 1, bigger - smaller);

  return solution(numbers);
};
console.log(numbers);
