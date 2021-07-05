
const isPerfectSquare  = n =>   n > 0 && Math.sqrt(n) % 1 === 0;

const isFibonacci = n => isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);

const printNotFibonacci = n => {
  let i = 1;  
  while(n > 0){
    if (!isFibonacci(i)){
      console.log(i);       
      n--;
    }
    i++; 
  }
}

printNotFibonacci(5)