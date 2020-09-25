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

var store = {
    tShirt : {
        sizes: ['XS','S','M','L','XL','XXL'],
        prices: [10, 11, 12, 13, 14, 15]
    },
    dress : {
        sizes: ['XS','S','M','L','XL','XXL'],
        prices: [10, 11, 12, 13, 14, 15]
    }
}
var storeKeys = Object.keys(store)
var results = {}
storeKeys.forEach(function(nameProduct) {
    var product = store[nameProduct]
    product.sizes.forEach(function(size, index) {
        var price = product.prices[index]
        var tva = (price*20/100) + price
        var item = {[size]: [price, [tva]]}
        if (!results[nameProduct]) {
            results[nameProduct] = []
        }
        results[nameProduct].push(item)
    })
})
console.log(results);

// Exercice 8

'use strict';
var input = document.createElement('select')
var years = (new Date().getFullYear() - 1980)
for (var i = 0; i <= years; i += 1) {
    var option = document.createElement('option')
    option.value = i
    option.textContent = (1980 + i)
    input.appendChild(option)
}
document.body.appendChild(input)
