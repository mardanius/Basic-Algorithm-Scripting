// Reverse a String
// Solution 1

function reverse(str){
    newString = "";
    for (let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}
console.log(reverse('Hola'));

// Solution 2

function reverse2(str){
    return str.split("").reverse().join("");
}
console.log(reverse2('Hola'));

/*===========
Factorization
===========*/

function factorialize(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++){
      fac = fac * i;
    }
    return fac;
  }
  
  console.log(factorialize(5));
