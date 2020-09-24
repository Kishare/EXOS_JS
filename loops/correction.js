/* Exercice 1 */

    var ar = [1, 2, 3, 5, 8];
    for(var key in ar){
       for(var i = 0; i <= 10; i++) {
         var result = ar[key] * i
         console.log(i + " x " + ar[key] + " = " + result);
        }
    }

    var array = [1,2,3,5,8];
    var result = '\n';
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < 11; j++) {
            result += (array[i]*j) + ' ';
        }
        result += '\n'
    }


/* Exercice 2 */

    var multiplyList = document.createElement('ul');
    for(var i = 1; i <= 10; i++){
        var listElement = document.createElement('li');
        listElement.textContent = 5 + " x " + i + " = " + 5 * i;
        multiplyList.appendChild(listElement);
        document.querySelector('body').appendChild(multiplyList);
    }

/* Exercice 3 */

// Le moyen d'arrêter la boucle infinie est
// de kill le processus dans le terminal

// OU d'utiliser une condition si i
// prend une valeur définie, et d'utiliser break
// pour sortir du code

var i = 1
while(true) {
  console.log(5*i)
  i++
  if(i >= 10){
    break;
  }
}

/* Exercice 4 */

var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multi5 = table.map(function(x) {
    return x * 5;
});
console.log(multi5);

/* Exercice 5 */

    var obj = {
        'name': 42,
        'age': 42
    }

    var compute = 1;

    for (var key in obj){
        compute *= obj[key];
    }

    console.log(compute)

/* Exercice 6 */

    var nbr = [45, 86, 1, 4, -9];
    for (var i = 0; i < nbr.length; i++) {
        for (var j = 0; j < nbr.length; j++) {
            if (nbr[i] < nbr[j]) {
                var tmp = nbr[i];
                nbr[i] = nbr[j];
                nbr[j] = tmp;
                j = 0;
            }
        }
    }
    console.log(nbr);

/* Exercice 7 */


