const anagrammes = (stringA, stringB) => {
  //  * stringA est égale à stringB si et seulement s'ils partagent les mêmes
  //  * caractères alphabétiques dans la même quantité.
  //  * La case n'est pas pris en compte
  
  const regex = /([A-Za-z])\w+/g;

  const mot1 = stringA.split("").sort().join("").toLowerCase().match((regex) || []).join("");
  const mot2 = stringB.split("").sort().join("").toLowerCase().match((regex) || []).join("");

  return mot1 === mot2;

  // anagrammes('rail safety', 'fairy tales') === true
  // anagrammes('!RAIL SAFETY!', 'fairy tales') === true
  // anagrammes('Hi there', 'Bye there') === false

};


class Stack {
//  * Créer une structure d'empilement. La structure doit être
//  * une classe contenant les méthodes :
//  *  - `push`: pour ajouter un élément au bout de l'empilement,
//  *  - `pop` pour retirer le dernier élément et le retourner;
//  *  - et `peek` pour récupérer le premeier élément.
//  *
//  * Exemples :
//  *
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// s.pop(); // returns 3
// s.pop(); // returns 2
// s.peek(); // returns 1
constructor(){
  this.tab = [];
}
push(x){
  this.tab[this.tab.length] = x;
}
pop(){
  const last = this.tab[this.tab.length -1];
  this.tab.length = this.tab.length- 1;
  return last;
}
peek(){
  return this.tab[this.tab.length -1];
}
};


const fizzBuzz = (n) => {
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et 
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */
    for(let i = 1; i<= n; i++){
      if(i%15 == 0){
        console.log("fizzbuzz")
      }
      else if(i%3==0){
        console.log("fizz")
      }
     else if(i%5 == 0){
        console.log("buzz")
      }
      else{
        console.log(i);
      }
    }
};

const spirale = (n) => {
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */
let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
let counter = 1;
let startCol = 0;
let endCol = n - 1;
let startRow = 0;
let endRow = n - 1;
while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
        result[startRow][i] = counter;
        counter++;
    }
    startRow++;
    for (let j = startRow; j <= endRow; j++) {
        result[j][endCol] = counter;
        counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
        result[endRow][i] = counter;
        counter++;
    }

    endRow--;
    for (let i = endRow; i >= startRow; i--) {
        result[i][startCol] = counter;
        counter++;
    }

    startCol++;

}

return result;
};


const puissance4 = (grid) => {
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */

 
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}
