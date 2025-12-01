let name =["mouad","ali","sara","hajar","hamza","ali"]
let last_indx =name.lastIndexOf("ali");
let indx =name.indexOf("ali");
 

console.log(name.includes("mouad"));

console.log(indx);
console.log(last_indx);

//=========================================
console.log("================================");


let num= [23,64,76,25,12,98]

let pair =num.find(Pair=> Pair%2==0)
console.log(pair);


let pair_index =num.findIndex(Pair=> Pair%2==0)

console.log(pair_index);

//
console.log("================================");

const joueurs= [
    {
        id :7,
        name : "vini"
    }
    ,
    {
        id :2,
        name : "ramos"
    }
     ,
    {
        id :11,
        name : "rodrigo"
    } ,
    {
        id :9,
        name : "renaldo"
    }
]
let joueur  =joueurs.find(joueur => joueur.id==9)
console.log(joueur.name );
