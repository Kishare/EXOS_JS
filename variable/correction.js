'use strict';

/**
 * Exercice 1
 */
 // My digital School Forever

/**
 * Exercice 2
 */
 // My Digital School
 // forever every day


/* Exercice 3 */

var string = '42';
var number = 42;
var float = 42.0;
var boolean = true;
var array = [42];
var date = new Date(4241, 12, 24, 42, 42);
var object = {'42': 42};
var und = undefined;
var und2;
var empty = null;

// console.log(string, number, float, boolean, array, date, object, und, und2, empty);

/* Exercice 4 */

var my42count = 'quarante-deux'.length;

// console.log(my42count);

/* Exercice 5 */

var value = 0;
var check = value || 42;

// console.log(check);

/* Exercice 6 */

var myArray42 = ['q', 'u', 'a', 'r', 'a', 'n', 't', 'e', '-', 'd', 'e', 'u', 'x'];

// console.log(myArray42);

/* Exercice 7 */

var myArray42Len = myArray42.length;

// console.log(myArray42Len);

/* Exercice 8 */

//  console.log(myArray42.join('') + "La grande réponse sur la vie, l'univers, et le reste !");
// var string = 'bonjour le monde';
// console.log(string.split(' '))

/* Exercice 9 */

var rand = Math.floor((Math.random() * (42)) + 1) === 42;
// console.log(rand);
// console.log(rand === 42);

/* Exercice 10 */

var my42Type = [typeof string, typeof number, typeof function() {}, typeof {}, typeof []];

// console.log(my42Type);

/* Exercice 11 */

var compute42 = 7 * 6;
// var compute43 = 7 - 6;
// var compute44 = 7 / 6;
// var compute45 = 7 + 6;
// var compute46 = 7 % 6;

// console.log(typeof compute42.toString());
// console.log(String(compute42));
console.log(String(compute42), compute42.toString());

/* Exercice 12 */

var myVar = 42424242;
var regex = /42/gi;
myVar2 = myVar.replace(regex, 'quarante-deux');
console.log(myVar2);

/* Exercice 13 */

var a = 24;
var b = 42;
var c = a;
 a = b;
 b = c;