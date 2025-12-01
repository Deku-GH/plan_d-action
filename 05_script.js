let numbr= [23,24,26,25,22,28]

let nu = numbr.filter(num => num>24)
console.log(nu);


console.log("================================");

const  etudiants = [
    {
        moyenne  :15,
        name : "mouad"
    }
   ,
   {
        moyenne  :11,
        name : "saad"
    }
   ,{
        moyenne  :10,
        name : "mohammed"
    }
   ,
]

let moyenne_12 = etudiants.filter(etudiant => etudiant.moyenne >= 12)
console.log(moyenne_12);




const  joueurs = [
    {
        position  :"AMF",
        name : "mouad"
    }
   ,
   {
        postion  :'LWR',
        name : "saad"
    }
   ,{
        position  :'LB',
        name : "mohammed"
    }
   ,
]


let AMF = joueurs.filter(joueur =>joueur. position == "AMF")
console.log(AMF);