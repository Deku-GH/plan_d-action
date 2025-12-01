let numbr= [3,4,6,5,2,8]

let carre = numbr.map(n=> n*n)
console.log(carre);
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

let name = etudiants.map(name=> name.name)
console.log(name);
let nam = etudiants.map(name=>name.push({avti:true}))
console.log(nam);
