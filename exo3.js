// Sujet 
// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.

// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

// Exercice 3
// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const checkSum2 = (array, num) => {
    let numbers = [...array]

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i]
        let searchingValue = num - currentNum
        if (numbers.filter(num => num !== currentNum).includes(searchingValue)) return true;
        return false;
    }
    return false
}

console.log(checkSum2([10, 15, 3, 7], 17));
console.log(checkSum2([1, 8, 10, 21], 19));