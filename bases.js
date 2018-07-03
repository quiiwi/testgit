/*
commentaires
sur
plusieurs 
lignes
 */


// commentaire sur toute la ligne

/* 2 affichage */
document.write("mon premier message");
document.write("<h1>Les bases de JAVASCRIPT</h1>");
/* on peut mettre des balises HTML, elle sont interprétées et donc insérées dans le HTML */
/* toutes les instructions en JS se finissent par un ";". */
/* elle se suivent et sont effectuées les unes à la suite des autres, du HAUT vers le BAS du script. */
/* les boîtes de dialogue: */
// alert('Salut'); /* afficher un message */
// confirm('Etes-vous sûr?'); /* message avec bouton de contirmation "ok" ou "annuler" */
// prompt("Quel est votre code postal ?"); /* message avec un champ à remplir */
/* afficher dans la console : */
console.log("attention aux erreurs de syntaxes dans la console"); /* message écrit dans la console de débuggage (f12 + onglet console) */
/* variables - déclaration - affectation */
document.write("<h2> 3- Variables - Déclaration - Addectation</h2>");
/* Définition : une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. Cette donnée peut être de n'importe quel type/ chiffre, chaîne de caractères, balise HTML, etc. */
/* déclaration d'une variable : */
var maBoîte; /* le mot clé var permet de déclarer (= créer la variable nommée maBoîte.) */
/* règle de nommage des variables : charactères acceptés : a à z, A à Z, 0 à 9 (jamais au début), _(jamais au début ni à la fin).Premier mot en minuscule puis une majuscule à la 1er lettre de chaque autre mot: EX: maVariableAUnTresLongNom_01 */
/* affectation d'une variable */
maBoite = 10;/* on affecte une valeur à une variable avec le signe "=". maBoite contient donc 10 */
document.write(maBoite);/* on affiche le contenu de la variable en ne mettant pas quote autour de son nom. Affiche 10 */
var maBoite = 10; /* on peut déclarer et affecter une variable en même temps (bous retiendrons cette écriture) */
monAutreBoite = "Bonjour";/* cette écriture est possible (déclaration san le mot clé var), mais ce n'est âs conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "portée des variables"). */
document.write("<br>");
/* déclarer et affecter plusieurs variables en même temps : */
var prenom = "Sylvie",
    nom = "Robert",
    genre = "féminin";/* un seul var pour les déclarer tous... */

document.write(prenom);/* affiche sylvie */
document.write("<br>");
/* changer la valeur d'une variable : */
prenom = "Pierre";/* nous changeons la valeur initial "Sylvie" pour la remplacer par "Pierre" */
document.write(prenom);/* affiche pierre */
document.write("<br>");
prenom = nom;/* nous affectons la valeur de la variable nom à la variable prenom autrement on replace "Pierre" par "Robert" */
document.write(prenom);/* affiche robert */
document.write("<br>");
/* ajouter une valeur à la valeur déjà existante d'une variable : */
var fruit = "pomme";
fruit += "fraise";/* on ajoute la chaîne de charactères "fraise" à "pomme" déjà existante dans la variable fruit avec l'opérateur += (sans espace) */
document.write(fruit);/* affiche la variable fruit */
document.write("<br>");

/* utiliser prompt avec une variable : */
// var codePostale = prompt("Quel est votre code postal?");
// document.write(codePostale);

/* types de données */
document.write("<h2> types de données </h2>");
/* nous commençons par les 3 principaux types de données dits primitifs */
/* les types numériques appelés NUMBER */
var chiffre = 20; /* les numbers s'écrivent sans quotes ni guillemets */
/* tous les types numériques sont possibles : entiers, décimaux, positifs, négatifs... */
/* les types chaînes de caractères appelés STRING */
var text = "kilic";
var apostrophe ='il faut utiliser le caractère d\'échappement pour les apostrophes dans des quotes';/* alt gr+ 8 pour le caractère d'échappement */
/* Les quotes ou les guillements indiquent qu'il s'agit du type STRING */
var numero = "10"; ///* un chiffre dans des quotes ou des guillements est interprété comme une STRING */

/* le type booléen (ou boolean en anglais) */
/* le type booléen ne prend que 2 valeurs : true ou false */
var choix = true; /* s'écrit sans quote */

/* typeof permet de vérifier le type d'une variable */
document.write(typeof(chiffre)); //number
document.write("<br>");

document.write(typeof(text)); //string
document.write("<br>");

document.write(typeof(numero)); //string
document.write("<br>");

document.write(typeof(choix)); //boolean
document.write("<br>");

/* constante */
document.write("<h2>Constante</h2>");
/* définition : les constantes sont comme des variables dont la valeur ne peut pas être modifiée. Elles permettent de "protégér" cette valeur nécessaire au bon fonctionnement du script. */
const CHANGE_PAS = 'ma constante impossible à modifier';/* par convention entre développeurs on écrit les constantes en majuscules et avec un "_" si besoin. */
document.write(CHANGE_PAS);/* affiche le contenue de la constante */
document.write("<br>");
/* CHANGE_PAS = 'autre valeur'; */ /* erreur bloquante de type invalid assignment to const CHANGE_PAS */

/* concaténation */
document.write("<h2> Concaténation </h2>");
/* En JS, o fait suive des variables et des string avec le symbole "+". on parle de concaténation */
var prenom = "Bruce",
    nom = "Wayne";
document.write(prenom + " " + nom + " " + "est BATMAN" +"<br>"); /* concatène la variable prenom avec un espace avec la variable nom avec un espace avec un  string "est BATMAN" et enfin une balise <br> */
var personnage = (prenom + " " + nom + " " + "est un personnage" +"<br>");
document.write(personnage);
/* opérateurs arithmétiques */
document.write("<h2> Opérateur arthmétiques </h2>");
var resultat;
resultat = 10+5;/* addition */
resultat = 10-5; /* soustraction */
resultat = 10*5; /* multiplication */
resultat = 10/5; /* division */
resultat = 3%2; /* modulo = reste de la division entière. Si j'ai 3 billes réparties sur 2 personnes, il m'en reste 1 seule : 3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiffre est pair ou impaire, modulo de 10 si c'est une dizaine, ....) */

/* on peut appliquer les opérateurs aux variables : */
var chiffre1 = 10,
    chiffre2 = 5;
resultat = chiffre1 + chiffre2; /* résultat vaut 15 */

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; /* le résultat vaut 15 */
chiffre3 = chiffre3 + 5 /* le résultat vaut 20 mais cette syntaxe n'est pas conventionnellle. On utilise la syntaxe suivante : */
chiffre3 += 5; /* cette syntaxe fait la même chose que la précédente, mais c'est elle que l'on retiendra. chiffre3 vaut ici 25 */

/* fonctionne avec tous les opérateurs : +=, -=, *=, /= et %= */

/* Incrémenter et décrémenter : */
var i = 0;
i++; /* incrémenter i de +1, i vaut donc 1 */
i--; /* décrémenter i de -1, i vaut donc 0 */
/* i++ peut aussi s'écrire ++i à la différence près : i++ retourne la valeur de i AVANT d'effectuer l'opération, ++i retourne la valeur de i APRES avoir effectué l'opération*/
var x = 5;
var y = x++;/* y prend la valeur de 5 PUIS x passe à 6 */

document.write('y vaut ' + y + "<br>");/* 5 */
document.write('x vaut ' + x + "<br>" + "<hr>"); /* 6 */

x = 5;
var z = ++x; /* x passe à 6 PUIS z prend la valeur de 6 */
document.write('y vaut ' + z + "<br>");/* 5 */
document.write('x vaut ' + x + "<br>" + "<hr>"); /* 6 */

/* Exercice : */
/*  L'internaute a achté 0.8kg de pomme et 0.7kg de poires.
vous déclarez 4 variables, une qui contient "pommes", une qui contient "poires", une qui contient le poids des pommes et une qui contient le poids des poires.
puis vous affichez la phrases "Vous avez acheté des pommes et des poires pour un poids total de 1.5 kg" où les fruits et le poids total sont remplacés par les variables. */
var fruit1 = " Pommes ",
fruit2 = " Poires ",
poids1 = 0.8,
poids2 = 0.7;
document.write("Vous avez acheté des :"+ fruit1 + "et des" + fruit2 + "pour un poids total de : " + (poids1 + poids2) + " kg");

/* Conditions */
document.write("<h2> Conditions </h2>");
var a = 10,
    b = 5,
    c = 2;

/* La codition if / else */
if (a > b){
    /* si la condition est évaluée à true, on entre dans les accolades qui suivent : */
    document.write("a est suppérieur à b <br>");
} else{
    /* sinon... si la condition est évaluée à false, on exécute le else : */
    document.write("b est supérieur ou égal à a <br>");
}

/* if avec AND : */
if (a > b && b > c){
    /* Si a est supérieur à b ET que dans le même temps b est supérieur à c, on entre dans les accolades qui suivent */
    document.write("Ok pour les 2 conditions <br>")
}

/* if avec OR : */
if ( a == 9 || b > c ){
    /* si a est égal (==) à 9 OU alors que b est supérieur à c, on entre dans les accolades qui suivent : */
    document.write("Ok pour au moins une des deux conditions <br>");
}

/* if elseif else */
if (a == 8){
    /* si a vaut 8, on exécute ce qui suit */
    document.write("a est égal à 8 <br>");
}else if( a != 10){
    /* sinon si a est different de 10, on exécute ce qui suit */
    document.write("a est different de 10 <br>");
}else{
/* sinon, c'est que je ne suis tombé ni dans le if, ni dans le elseif, je me trouve donc dans ce else */
    document.write("les 2 conditions sont fasses <br>");
}

/* notes: jamais de () après un else. le else n'est pas obligatoire s'il est vide. En revanche, après un if il y a toujours une condition */

/* l'opérateur NOT : */
/* l'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelquechose de FALSE en TRUE. Il s'agit d'une négation. */

var test = 3 < 1;
console.log("test vaut : " + test); /* pour vérifier que test vaut false */
if (!test){
    /* le "!" es une négation qui inverse le sens du booléen : test seul valant false, !test vaut dpnc true. La condition finale étant donc évaluée à true, on entre dans les accolades: */
    document.write("On exécute ce code.... <br>");  
}
/* conclusion : les instructions d'une condition seront toujours exécutées qui si la condition renvoie TRUE. */

/* la comparaison avec le triple "===" */
var varA = 1,/* number */
    varB = "1";/* string */

if( varA == varB){
    /* varA et varB valent tous les deux 1 en valeur : la condition avec "==" est donc vraie. on execute les accolades qui suivent : */
    document.write("Egalité en valeur uniquement <br>");
} else{
    document.write("Différence en valeur uniquement <br>");
}

if( varA === varB){
    /* varA et varB valent tous les deux 1 en valeur mais sont 2 types differents : donc la condition est fausse */
    document.write("Egalité en valeur ET en type <br>");
} else{
    document.write("Différence en valeur OU en type <br>");
}

// -------------------------
// -------------------------
// -------Jour -2-----------
// -------------------------
// -------------------------

// Condition dite ternaire :
// La condition ternaire est une autre syntaxe de la condition if....else.

var voiture = "bmw";

var origine = (voiture === "bmw") ? "origine allemande <br>" : "autre origine <br>";
//  La condition ternaire s'écrit avec un "?" qui remplace le if, et un ":" qui remplace le else.
document.write(origine);

// ------------
// isNaN : is Not a Number
// NaN pour Not a Number est une valeur utilisée pour représenter une "quantité" qui n'est pas un nombre en JavaScript.

console.log(2 * "azerty");

// Les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisés pour tester si une valeur est Nan. Il faut utiliser isNan() :

var annee = "2018"; // string
if ( isNaN(annee) ) {
    /* condition fausse car "2018" après conversion est bien un number. On entre donc dans le else */
    document.write("Ce n'est pas un number après conversion <br>");
} else {
    document.write("C'est un number après conversion <br>");
}

// Le contaire :

var annee = "juin 2018"; // string
if ( isNaN(annee) ) {
    /* ici la condition est vraie. On entre donc ici : */
    document.write("Ce n'est pas un number après conversion <br>");
} else {
    document.write("C'est un number après conversion <br>");
}

// -----------
// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
Si la réponse est vide (On compare avec des quotes vides Sans espace), on affiche "Vous n'avez pas répondu."
Si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre."
Si la réponse est correcte, on affiche "Vous avez indiqué avoir X and." ou X est l'âge donnée par l'internaute.
*/
var annee = 2018

var ageDeL_Utilisateur =  1/* prompt("Vous avez quel âge ?"); */

if (ageDeL_Utilisateur == ''  ){

    document.write("Vous n'avez pas répondu.");

} else if ( isNaN (ageDeL_Utilisateur) ){

    document.write("Vous n'avez pas indiqué un nombre.");

} else {

    document.write("Vous êtes née en " + (annee - ageDeL_Utilisateur));

}

// --------------
// 9- Synthèse des opérateurs
// --------------
document.write("<h2> Synthèse des opérateurs </h2>");

// Pour tester des variables entre-elles :
/* 
    == pour égal en valeur
    !=pour différent de en valeur 

    === pour strictement égal en valeur ET en tyoe
    !== pour strictement différent en valeur OU en type

    > pour plus grand que
    < pour plus petit que
    >= pour supérieur ou égal
    <= pour inférieur ou égal
 */

// Les opérateur logiques :
/* 
    && pour AND
    || pour OR
    ! pourNOT (négation)

    Les opérations effectuées avec les opérateurs logique ne donnent que 2 résultats possibles : TRUE ou FALSE.

    Exemples :
        true && true => true
        true && false => false
        false && false => false

        true || true => true
        true || false => true
        false || true => false

        !TRUE => false
        !FALSE => true

*/

// ----------------
// 10- condition switch
// ----------------
document.write("<h2> Condition switch </h2>");

// La condition switch est une autre syntaxe pour écrire une condition if... elseif... else, lorsque l'on veut comparer une variable à une multitude de valeurs.

var couleur = "jaune";

switch (couleur){
    case "bleu" :/* chaque case représente une valeur que peut prendre la variable. Si couleur contient "bleu", on exécute le code qui suit ce case : */
        document.write("Vous aimez le bleu <br>");
    break;/* obligatoire pour quitter la condition une fois le case exécuté. */

    case "rouge" :
        document.write("Vous aimez le rouge <br>");
    break;

    case "vert" :
        document.write("Vous aimez le vert <br>");
    break;

    default:/* on tombe dans default (par défaut) si on entre dans aucun case précédent. */
        document.write("Vous n'aimez aucune de ces couleurs <br>");
    break;
}

// ----------------
// 11- les boucles
// ----------------
document.write("<h2> Les boucles </h2>")
/* Les boucles sont destinées à répéter des lignes de codes de façon automatique. */

/* While :  */
var i = 0; /* on initialise une variable à 0 pour compter le nombre de tourn de boucle */

while (i<=5){/* ici entre parenthèse se situe la condition d'entrée dans la boucle while. Elle signifie "tant que i est inférieur ou égal à 5" */
    document.write( i + "----");
    i++;/* on incrémente i de +1. On n'oublier pas d'incrémenter pour ne aps crée une boucle infinie */
}

// Exercise : sans modifier la condition de la boucle while précédente, vous la compléter pour ne pas afficher les "---" après le 5.
var i = 0;
while (i<=5){
    if(i<5){
        document.write(i + "----");
    } else  {
        document.write(i);
    }
    i++;
}