'use strict';

/* Exercice 1 */

function myPutStr(str){
    if(typeof str === 'number'){
        return "et pourquoi pas 42?";
    }return str;
    console.log(myPutStr(200))
    console.log(myPutStr('bangbang'))
}

/* Exercice 2 */

function computeSurfaceM2(i, j){
    return i * j + " m2"
}

/* Exercice 3 */

function createMyButton(){
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'CLICK';
    button.setAttribute('onClick', 'detectMyAgeByNight()')
    document.querySelector('body').appendChild(button);
}

function detectMyAgeByNight(){
    var age = prompt("Quel âge avez-vous?")
    if (age < 18){
        alert("Vous ne pouvez pas entrer, vous n'êtes pas majeur. Vous avez " + age + " ans.");
    }else if(age >= 18 && age < 42){
        alert("Vous pouvez enter. Vous êtes majeur, vous avez " + age + "ans. Amusez-vous bien!");
    }else{
        alert("Votre expérience et maturité ont immédiatement conquis la direction de la boîte. Vous devenez le patron de la boîte.");
    }
}

/* Exercice 4 */

function matrixGenerator(){
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    var tblBody = document.createElement('tbody');

    for(var i = 0; i < 3; i++ ){
        var row = document.createElement('tr');
        for(var j = 0; j < 3; j++){
            var rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            console.log(rand);
            var cell = document.createElement('td');
            var cellText = document.createTextNode(rand);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute('border', '2')
}

/* Exercice 5 */

function refresh(){
    var t = 1000;
    setTimeout('showDate()', t)
}

function showDate(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; } 
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.querySelector('body').innerHTML = time;
    refresh();
}

/* Exercice 6 */

function calculateFibonacci(){
    
}