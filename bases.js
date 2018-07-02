/*
commentaires
sur
plusieurs 
lignes
 */


// commentaire sur toute la ligne

/* 2 affichage */
// document.write("mon premier message");
// document.write("<h1>Les bases de JAVASCRIPT</h1>");
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
var numera = "10"; ///* un chiffre dans des quotes ou des guillements est interprété comme une STRING */

/* le type booléen (ou boolean en anglais) */
/* le type booléen ne prend que 2 valeurs : true ou false */
var choix = true; /* s'écrit sans quote */

