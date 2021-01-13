// Sujet 1
// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

const arr1Subject1 = [10, 15, 3, 7];
const num1 = 17;
const arr2Subject1 = [1, 8, 10, 21];
const num2 = 19;

// Sujet 2
// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

const arr1Subject2 = [3, 7, 8, 3, 6, 1];
const arr2Subject2 = [1, 4, 5, 8];



// Exercice 1
// Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const checkSum = (array, num) => {
    let numbers = [...array]

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === num) return true;
        }
        return false
    }
}
console.log("========== Exo1 ==========");
console.log(checkSum(arr1Subject1, num1));
console.log(checkSum(arr2Subject1, num2));
console.log("");


// Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const getSun = (array) => {
    let buildings = [...array];
    let count = 1;
    for (let i = 0; i < buildings.length - 2; i++) {
        let hasView = true
        for (let j = i + 1; j < buildings.length - i; j++) {
            if (buildings[i] <= buildings[j]) hasView = false;
        }
        hasView ? count++ : null
    }
    console.log(count);
}
console.log("========== Exo2 ==========");
getSun(arr1Subject2);
getSun(arr2Subject2);
console.log("");



// Exercice 3
// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const checkSum2 = (array, num) => {
    let numbers = [...array];

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i]
        let searchingValue = num - currentNum
        if (numbers.filter(num => numbers.indexOf(num) !== i).includes(searchingValue)) return true;
    }
    return false
}
console.log("========== Exo3 ==========");
console.log(checkSum2(arr1Subject1, num1));
console.log(checkSum2(arr2Subject1, num2));
console.log("");


// Exercice 4
// Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

// Exercice 6
// Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.
// Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?


const getSun2 = (array) => {
    let buildings = [...array];
    let count = 1
    let j = buildings[buildings.length - 1];

    for (let i = buildings.length - 2; i >= 0; i--) {
        if (buildings[i] < j) {
            count;
        } else {
            j = buildings[i];
            count++
        }
    }
    console.log(count);
}
console.log("========== Exo4 & 6 ==========");
getSun2(arr1Subject2);
getSun2(arr2Subject2);
console.log("");


// Exercice 5
// Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.
// Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?

const checkSum3 = (array, num) => {
    let numbers = [...array];
    let count = 0;
    let searchValues = new Set();
    searchValues.add(num - numbers[0]);
    for (let i = 1, length = numbers.length; i < length; i++) {
        count++;
        let searchVal = num - numbers[i];
        if (searchValues.has(numbers[i])) {
            return true;
        } else {
            searchValues.add(searchVal);
        }
    }
    return false;
};
console.log("========== Exo5 ==========");
console.log(checkSum3(arr1Subject1, num1));
console.log(checkSum3(arr2Subject1, num2));