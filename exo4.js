// Sujet 
// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest. Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.

// Exercice 4
// Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).


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

getSun2([3, 7, 8, 3, 6, 1]);
getSun2([1, 4, 5, 8]);