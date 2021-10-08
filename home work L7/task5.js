const arr = [0, 10, 12, 3, -30, 425];
let st1 = arr.sort((a, b) => a - b);
console.log('В порядке возрастания: ', st1);
let st2 = arr.sort((a, b) => b - a);
console.log('В порядке убывания: ', st2);