//Задание 1. Поиск всех уникальных значений в массиве

let numbers1 = [1, 2, 4, 2, 4, 4, 5]; //ответ [1,2,4,5]
let numbers2 = [1, 2, 3, 4, 5]; //ответ [1,2,3,4,5]
let numbers3 = [1, -2, -2, 3, 4, -5, -6, -5]; //ответ [1,2,3,4,5]

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let unique = numbers3.filter(onlyUnique);
console.log(unique);
