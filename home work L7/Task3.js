function fib(n) {
  let a = 1;
      b = 1;
      for (let i = 1; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fibd(start, number) {
      let arr = [];
      for(let i = 0; i < number; i++){
          arr.push(fib(start + i));
      }
      return arr;
}

console.log(fibd(5, 5));