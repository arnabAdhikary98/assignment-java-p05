function isPrime(num, div=2){
    // using recursive approach
   if(num <= 1){
       return false;
   }
   if(div > Math.sqrt(num)){
       return true;
   }
   if(num % div === 0){
       return false;
   } 
   else{
       return isPrime(num, div + 1);
   }
}

console.log(isPrime(5))
console.log(isPrime(13))
console.log(isPrime(24))