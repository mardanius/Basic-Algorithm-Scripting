// Reverse a String
// Solution 1

function reverse(str) {
  newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverse("Hola"));

// Solution 2

function reverse2(str) {
  return str.split("").reverse().join("");
}
console.log(reverse2("Hola"));

/*===========
Factorization
===========*/

function factorialize(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }
  return fac;
}

console.log(factorialize(5));

/*===============================
Find the Longest Word in a String
================================*/

function findLongestWordLength(str) {
  let comparador = 0;
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      contador = 0;
    } else {
      contador = contador + 1;
    }

    if (contador > comparador) {
      comparador = contador;
    }
  }

  return comparador;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);
console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology"
  )
);
