'use strict';

/* Exercice 1 */

    var toMultiply = [1, 2, 3, 5, 8];

    for(var key in toMultiply){
        for(var i = 1; i <= 10; i++){
            var result = toMultiply[key] * i;
            console.log(result)
        }
    }

/* Exercice 2 */

    var multiplyList = document.createElement('ul');

    for(var i = 1; i <= 10; i++){
        var listElement = document.createElement('li');
        var multiplyElement = listElement.innerHTML = 5 + " x " + i + " = " + 5 * i;
        document.querySelector('body').appendChild(multiplyList).appendChild(listElement);
    }

/* Exercice 3 */

        while(false){
            for(var i = 1; i <= 10; i++){
                var result = 5 * i;
                console.log(result)
            }
        }
    
/* Exercice 4 */

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var multipliedArray = array.map(x => x * 5);
    console.log(multipliedArray)

/* Exercice 5 */

    var object = {
        name: '42',
        age: '42'
    }

    for(var key in object){
        var keyResult = object.name * object.age;
        console.log(keyResult)
    }

/* Exercice 6 */

    var nbr = [5, 4, 3, 2, 1];

    var sortNbr = nbr.sort();
    console.log(sortNbr)

/* Exercice 7 */
