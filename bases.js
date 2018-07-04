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
document.write("<hr>");
// Exercise : sans modifier la condition de la boucle while précédente, vous la compléter pour ne pas afficher les "---" après le 5.
var i = 0;/* on n'oublie pas de réinitialiser i sinon il conserve la valeur 6 de la boucle précédente */

while (i<=5){

    if (i<5){

        document.write(i + "----");

    } else  {

        document.write(i);
    }
    i++;
}
document.write("<hr>");
var i=0;
while (i<=5){
    switch(i){
        case 0:
            document.write(i + "----");
        break;

        case 1:
            document.write(i + "----");
        break;

        case 2:
            document.write(i + "----");
        break;

        case 3:
            document.write(i + "----");
        break;

        case 4:
            document.write(i + "----");
        break;

        default:
        document.write(i);

    }
    i++;
}
document.write("<hr>");
var i = 0;
    if (i===0){
        document.write(i + "----");
        i++;

        if (i===1){
            document.write(i + "----");
            i++;

            if (i===2){
                document.write(i + "----");
                i++;

                if (i===3){
                    document.write(i + "----");
                    i++;

                    if (i===4){
                        document.write(i + "----");
                        i++;

                        if (i===5){
                            document.write(i);
                        }
                    }
                }
            }
        }
    }
document.write("<hr>");
// ----------------
// La boucle for :
// La boucle for est une autre syntaxe de la boucle while:
for(var i = 0; i<=5 ; i++){/* on met dans les () du for : initialisation de la variable suivi d'un ";" ouis la condition d'entrée dans la boucle suivie d'un ";" puis l'incrementation (ou décrementation...) Non suivie d'un ";" (l'incrementation se fait à la fin de la boucle !) */
    if (i<5){

        document.write(i + "----");

    } else  {

        document.write(i);
    }
}

document.write("<hr>");

// -------------------
// Exercice : afficher un menu déroulant avec les années de 1900 à 2020:
document.write("<select>");
    document.write("<option>1900</option>");
    document.write("<option>...</option>");
    document.write("<option>2020</option>");
document.write("</select>");

document.write("<hr>");

var foucheD_Annees = 1200

document.write("<select>");
    for(var i=0 ; i<=foucheD_Annees; i++){
        document.write("<option>" + (i + 1900));
        document.write("</option>");
    }
document.write("</select>");



document.write("<hr>");


document.write("<select>");
    for(var i=1900 ; i<=2020; i++){
        document.write("<option>" + i + "</option>");
    }
document.write("</select>" + "<hr>");



// IMPORTANT ---------!!!!!
// IMPORTANT ---------!!!!!
// IMPORTANT ---------!!!!!
// IMPORTANT ---------!!!!!
/* Alternative : */
var affichage = ''; /* pour contenir toutes les ablises HTML à venir */

affichage += "<select>";
    for(var i=1900 ; i<=2020; i++){
        affichage += "<option>" + i + "</option>";
    }
affichage += "</select>";

document.write(affichage);/* on affiche tout le string qui contient l'ensemble des balises du selecteur. */

// la boucle do....while existe aussi. Elle a la particularité de s'éxécuter au moins une fois (correspond au "do"), puis seulement à la fin on regarde la condition du while pour savoir si on retroune dans la boucle ou pas. Exeple d'utilisation : vous posez une question obligatoire à l'internaute ("do"), puis tant qu'il n'a pas correctement répondu ("while"), vous lui reposez la question.


// -------------------
// 12- Les fonctions utilisateur
// -------------------


document.write("<h2> Les fonctions utilisateurs </h2>");
// des fonctions sont des morceaux de codes encapsulés dans les accolades et portant in nom. Ellle sont appelées (par leur nom) quand on a besoin d'exécuter tout le code qui s'y trouve.Il est d'usage de faire des fonctions simples qui réalisent des actions unitaires.
// A chaque fois qu'on répète une action, voir s'il n'est pas possible de la mettre dans une foction : cela s'appelle factoriser son code.

// il existe 2 façon de déclarer une fonction en JS:
// 1° Avec le mot clé function:
function maFonction() {
    // ici tout votre code 
    document.write("<p>Nous avons une journée ensoleillée</p>");
}
// 2°Avec le mot clé var:
var maFonction2 = function (){
    // ici tout votre code
    document.write("<p> Nous avons une chaude journée</p>");
}

// Pour qu'une fonction s'exécute, il fait l'appeler :
maFonction(); //on appelle une foction en écrivant son nom suivi d'un paire de parenthèses
maFonction2(); //en appelant cette fonction, j'éxécute le code qui s'y trouve

// par convention nous déclarons toujours une fonction avant de l'exécuter.

// -------------
// Fonctions avec paramètres :
function direBonjour(prenom, nom){/* prenom et nom sont des paramètres de la fonction séoarés par une "," et qui attendent une valeur */
    document.write('<p> Bonjour ' + prenom + ' ' + nom + ", comment allez-vous ?" + '</p>');
}

direBonjour("Alice", "Dupon"); /* la valeur "alice" qui est en première position va être affectée au paramètre prenom, et la valeur "Dupon" (en seconde position) va être affectée au paramètrenom. ainsi la fonction direBonjour peut afficher un message personnalisé. */

// ------------

function d(param){
    document.write( param + "<hr>");
}

d("test de notre fonction");
d("yolo");
d(4+2);
d('<div class="test">Test de notre fonction</div>');

// ------------
// Préambule à l'exercice :
function meteo(saison){
    d("nous sommes en " + saison + '.'); /* nous avons la possibilité d'utiliser une autre fonction, ici d(), dans les instructions de cette fontion */
}

meteo("été");
meteo('printemps');

// Exercice : réécrivez la fonction précèdente dans une fonction exeMeteo, et complétez la pour qu'elle affiche "au printemps", "en été", "en automne" ou "en hiver". Dans cet exercice, vous ne modifiez pas le paramètre saison et vous n'en ajoutez pas.



function p(param){
    document.write('nous sommes ' + param  + '.' + '<br>')
}

function exeMeteo(saison){
    var x ='';

    if (saison === 'été' || saison === 'hiver' || saison === 'automn'){
        x = 'en ';
    } else {
        x = 'au ';
    }
    p(x + saison);
    
}

exeMeteo('été');
exeMeteo('hiver');
exeMeteo('automn');
exeMeteo('printemps');


// --------------
// Le mot clé "return" qui permet de sortir une valeur d'une fonction :

// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!

function somme(a ,b){
    var resultat = a + b;
    return resultat;/* return permet de SORTIR la valeur de resultat de la fonction : il retourne cette valeur à l'endroit où la fonction est appelée */
}

d(' La somme de 2 + 4 est égale à ' + somme(2 , 4));/* on récupère ici la valeur 6 de résultat grâce au return qui se trouve dans la fonction somme() */

// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!

function somme2(a ,b){
    return a + b;

}

d(' La somme de 2 + 4 est égale à ' + somme2(2 , 4));


// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!
// IMPORTANT-----------------------!!!

function somme3(a ,b){
    var resultat = a + b;
    d(' La somme de 2 + 4 est égale à ' + resultat);
}

somme3(2,4);


// --------------------------
// 13- La porté des variables
// --------------------------


document.write('<h2> La portée des variables </h2>');

/* Selon l'endroit et la façon dont une variable est déclarée, elle pourra être accessible partout dans le script ou uniquement dans une portion limitée du code des fonctions. On parle de portée des variables (scope en anglais).

-Une variable déclarée SANS le mot clé var (façon implicite): elle st accessible PARTOUT dans le script, y compris au sein des fonctions / elle est dite GLOBALE.

-Une variable déclarée AVEC le mot clé var (façon explicite): 
    -à l'éxtérieur d'une fonction elle sera GLOBALE, donc accessible partout dans le script, y compris au sein des fonctions
    -à l'intérieur d'une fonction elle sera LOCALE, donc accessible uniquement DANS cette fonction.

*/

var animal = 'loup';/* globale */
function jungle(){
    var animal = 'tigre';/* locale */
    return animal;
}
d(animal);/* loup car on est dans l'espace global et qu'on utilise la variable globale disponible qui vaut loup */
d(jungle());/* tigre  grâce au return qui se trouve à la fin de la fonction: il sort la valeur Tigre de la variable Locale à la fonction*/
d(animal);/* loup Loup pour les mêmes raisons que le premier*/

// ----------
d('<hr>');

var oiseau = 'Aigle'; /* global */
function ciel(){
    oiseau = 'Faucon'; /* global */
    return oiseau;
}
d(oiseau);/* aigle car on utilise la première variable globl disponible qui vaut Aigle */
d(ciel());/* faucon grâce au retaurn de la fonction. mais en exécutant celle-ci on a changé le contenu de la variable globale pour y mettre faucun! */
d(oiseau);/* en conséquence la variable oiseau contient désormais Faucon */


// ------------------
// 14- Les arrays
// ------------------


document.write('<h2> Les arrays </h2>');
/*  un array, ou tableau en français, est un objet qui contient plusieurs valeurs, appeléss items ou élément. chaque élément est accessible au moyen d'un indice (ou idnex) dont la numérotation commence à partir de 0. */

// Déclaration d'un array :
var monTableau =['Emilie','Magalie','Zakir','Elric',96];/* déclaration d'un array qui contient des string et un number(version conventionnelle la plus utilisée). Chaque élément à un indice : Emilie le 0, Magalie le 1, et ainsi de suite.*/

/* accéder à un élément de l'array : */
d(monTableau[0]); /* affiche l'élément de valeur Emilie. */

/* Remplacer la valeur "Elric" par la valeur "Alphonse" */
monTableau[3]= 'Alphonse'; /* on modifie la valeur positionnée à l'indice 3 pour y mettre Alphonse */

d(monTableau[3]);

/* Mesurer le nombre d'éléments d'un array : */
d(monTableau.length); /* affiche 5 correspondant aux nombres d'éléments du tableau */

/* Parcourir un array avec une boucle for ! */

for(var i= 0; i< monTableau.length; i++){
    d(monTableau[i]);/* la variable i prends succssivement les valeurs de 0 à 4 inclus. monTableau[i] permet donc de parcourir chaque indice du 0 au 4. */
}

// ----------
// Array multidimensionnel :
//Un array multidimensionnel est un tableau qui contient un ou plusieurs autres tableaux.

var deuxDimensions = [ 
     ['fraises', 'pommes', "bananes"],
     ['tomates','carottes','courgettes'] 
    ];

d(deuxDimensions[0][2]); /* pour accéder à la valeur "bananes", je vais d'abord à l'indice 0 du tableau deuxDimentions, puis à l'intérieur je vais à l'indice 2 */

document.write(deuxDimensions[0][2] + ' et des ' + deuxDimensions[1][1]); /* affiche banaes suivi de carottes */

// ---------------
// exercice : créer un  array avec les tailles S,M,L et XL. A l'aide d'une boucle for, afficher un menu déroulant avec les tailleds provenant de l'array, à l'intérieur.

document.write('<hr>');

var tailleVetement = ['S' , 'M' , 'L' , 'XL' ];


d("<select>");
    for(var y=0 ; y < tailleVetement.length; y++){
        d("<option>" + tailleVetement[y] + "</option>");
    }
d("</select>");

// ------------------------------------------------

var tailleVetement2 = ['S' , 'M' , 'L' , 'XL' ], affichages ='';

affichages += "<select>";
    for(var y=0 ; y < tailleVetement2.length; y++){
        affichages += "<option>" + tailleVetement2[y] + "</option>";
    }
affichages += "</select>";

d(affichages);

// --------
// -ajouter ou supprimer des valeurs au début ou à la fin d'un array:

tailleVetement2.push('XXL'); //ajoute "XXL" à la fin de l'array tailleVetement2
console.log(tailleVetement2);

tailleVetement2.unshift('XS');/* ajoute "XS" au début de l'array taillesVetement2 */
console.log(tailleVetement2);

/* le contraire de push, c'est pop */
tailleVetement2.pop();/* supprime le dernier élément de l'array tailleVetement2 */
console.log(tailleVetement2);

/* le contraire de unshift, c'est shif */
tailleVetement2.shift()/* supprime le premier élément de l'array tailleVetement2 */
console.log(tailleVetement2);


// ------------------
// 14- Les objets
// ------------------


document.write('<h2> Les objets </h2>');

/* Un objet est un ensemble de propriétés qui correspondent à l'association d'un nom et d'une valeur, cette valeur peut-être de n'importe quel type (string, number,booléen,arrar,objet...). 

De plus, la valeur de la propriété peut-être une fonction. Dans ce cas cette propriété s'appelle une méthode (il s'agit simplement d'une fonction dans un objet).

Les propriétés et les méthodes d'un objet s'appelle les "membre" de cet objet.

*/

/* création d'un objet */
var personnage = {
    nom : 'Tintin', /* paire "propriété : valeur" suivie d'une "," */
    animal : 'chien',
    amis : ['Haddock', 'Tournesol','Dupont & Dupond'],
    age : 35 /* par convention pas de "," au denrier élément  */
}; /* on termine bien l'instruction avec un ";" */

/* Accéder à la valeur d'une propriété d'un objet : */
d(personnage.nom); /* affiche Tintin. on accède à une propriété d'un objet en écrivant le nom de l'ibjet puis un "." puis la proriété.*/

d(personnage['nom']);/* affiche aussi Tintin. on peut aussi utiliser la notation entre []  pour accerder a une propriété d'une objet. */

// remplissage d'une propriété :
personnage.animal = 'Milou';
d(personnage.animal);
// ou encore :
personnage['animal'] = 'Milou';

// Pour afficher Tournesol :
d(personnage.amis[1]);/* pour accéder à "Tournesol", on va à la propriété "amis" de personnage avec un "." puis on va à l'indice [1] du tableau qui s'y trouve */
d(personnage['amis'][1]);/* de la même manière qu'avec Milou, je peux utiliser la notation entre [] pour accéder à la propriété "amis"  */

// --------------------
// création d'un objet avec une méthode :
var maVoiture = {
    marque : 'Mercedes',
    couleur : 'noire',
    motorisation : {
        energie : 'diesel',
        puissance : '110CV',
        garentie : true
    },
    afficherOrigine : function (){ /* afficherOrigine est une méthode de maVoiture */
        document.write('origine allemande <br>');
    }
};

/* on identifie les méthodes au mot clé function qui permet d'y mettre le code qu'elle doit exécuter (tout comme un fonction). */
d(maVoiture.marque); /* affiche Mercedes */
d(maVoiture.couleur); /* affiche noire */
maVoiture.afficherOrigine(); /* appel de la méthode afficherOrigine() de l'objet ma voiture écrite avec sa paire de (). Affiche "origine allemande" */
d(maVoiture.motorisation['energie']);
d(maVoiture.motorisation.energie); /* ces 2 syntaxes pour accéder à la propriété energie qui se situe dans la proriété motorisation de l'objet maVoiture. Affiche diesel */