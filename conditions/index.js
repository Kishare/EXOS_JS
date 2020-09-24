'use strict';

/* Exercice 1 */

alert('Seuls les adultes peuvent rentrer dans le nightclub.');
var age = prompt("Quel âge avez-vous?")

if (age < 18){
    alert("Vous ne pouvez pas entrer, vous n'êtes pas majeur. Vous avez " + age + " ans.");
}else if(age >= 18 && age < 42){
    alert("Vous pouvez enter. Vous êtes majeur, vous avez " + age + " ans. Amusez-vous bien!");
}else{
    alert("Votre expérience et maturité ont immédiatement conquis la direction de la boîte. Vous devenez le patron de la boîte.");
}

/* Exercice 2 */

var rand = Math.floor(Math.random() * (30 - 1) + 1);
if(rand >= 0 && rand <= 10){
    console.log('Cool')
}else if(rand >= 11 && rand <= 20){
    console.log('Tepid')
}else{
    console.log('Warm')
}

/* Exercice 3 */

var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
var d = new Date();
var jour = tab_jour[d.getDay()]

switch(jour){

    case 'Lundi':
    console.log('Nous sommes lundi');
    break;

    case 'Mardi':
    console.log('Nous sommes mardi')
    break;

    case 'Mercredi':
    console.log('Nous sommes mercredi')
    break;

    case 'Jeudi':
    console.log('Nous sommes jeudi')
    break;

    case 'Vendredi':
    console.log('Nous sommes vendredi')
    break;

    case 'Samedi':
    console.log('Nous sommes samedi')
    break;

    case 'Dimanche':
    console.log('Nous sommes dimanche')
    break;
}

/* Exercice 4 */

var choice = prompt("Vous êtes un aventurier vagabondant dans le Donjon des Ténèbres, appelé ainsi car personne n'en est jamais revenu. En allant de plus en plus dans les abysses, vous apercevez une arme étincelante. Que faites-vous? (prendre, ou partir)")

if(choice === 'prendre'){
   var choice = prompt("Bravo. Vous venez d'obtenir l'arme ultime, EXCALIBUR!! En avançant plus profondément dans la pénombre vous apercevez une gigantesque porte. Cela semble être la voie vers le seigneur Démon... Que faites-vous? (ouvrir, fuir)")
    if(choice === 'ouvrir'){
        alert('Vous ouvrez la porte et apercevez le démon. Ni une, ni deux, vous lui foncez dessus avec votre épée légendaire, Excalibur, et le tranchez en deux. La lumière se remplit et le monde est sauvé. Bravo!');
    }else if(choice === 'fuir'){
            alert('Vous vous faites lamentablement tuer par un diablotin qui obtient un bonus de puissance contre les fuyards. Le monde est détruit par votre faute. Dommage!')
    }
}else if(choice === 'partir'){
    var choice2 = prompt("Par méfiance, vous préférez passer outre l'objet. En avançant plus profondément dans la pénombre vous apercevez une gigantesque porte. Cela semble être la voie vers le seigneur Démon... Que faites-vous? (ouvrir, fuir)")
     if(choice2 === 'ouvrir'){
        alert("Vous ouvrez la porte, malheureusement vous n'êtes pas équipé de l'épée légendaire, Excalibur, la seule arme pouvant vaincre le seigneur Démon. Ce dernier se rue sur vous et vous désintègre. Vous avez failli à votre mission... Dommage!")
    }else if(choice2 === 'fuir'){
        alert("Le démon ressent votre présence et ouvre la porte de lui-même. N'étant pas protégé par l'aura de lumière d'Excalibur, il décide de vous posséder et de s'accaper votre énergie et force vitale. Partageant désormais le corps du seigneur Démon, vous acquérez une connaissance quasi infinie avez en tête la grande réponse sur la vie, l’univers et le reste !")
    }
}

/* Exercice 5 */

/* Exercice 6 */

var myVar = 0;
var check = myVar || 42;

/* Exercice 7 */