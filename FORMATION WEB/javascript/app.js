const prenom = "gustave";

console.log(prenom);

let age =20;

console.log(age);

const long = 10;
const large = 6;

const surface = long * large
const addition = long + large
const soustration = long - large
const division = long / large

console.log(surface)
console.log(addition)
console.log(soustration)
console.log(division)

const chaine ="je viens "

console.log(typeof(chaine))

const achat= 1000;
const vente= 2000;
const benefice= vente - achat;

console.log("prix d'achat est " + achat)
console.log("prix de vente est " + vente)
console.log("votre benefice est " + benefice)


const phrase = "je ne viendrai plus en retard"
const tableau = ["gustave","benjamin","roland"]

let compteur= 0

while(compteur <10){
    console.log(phrase);
    compteur++
}


const table_ = [10, 5, 9, 12, 15, 19, 20]
for(compteur = 0;compteur<tableau.length;compteur++)
{console.log("l'eleve "+compteur+ "a obtenu "+table_[compteur]+"points")}


const tab = [10, 155,20,30,]
console.log(tableau) 

// declarer un objet

const user ={
    prenom:"benjamin",
    age:20,
    sexe:"masculin",
    email:"benjamin@gmail.com",
    phone:"+243818535763",
}


console.log(user.prenom,user.sexe,user.email,user.phone);
// mont(montant) pource(pourcentage)et la regle qui est 100
function pourcentage(mont,pource,regle){
    pourcentage =(mont*pource/regle)
    return pourcentage
}
console.log(pourcentage(1000,10,100));

if(pourcentage<50){
    return console.log("echouer");
}else{
    return console.log("reussit");
    
}







    

         






