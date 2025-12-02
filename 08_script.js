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

let list = etudiants.filter(etudiant=> etudiant.moyenne!==10)
console.log(list)




const  etudiant = [
    {
        age :22,
        moyenne  :15,
        name : "mouad"
    }
   ,
   {
    age :25,
        moyenne  :11,
        name : "saad"
    }
   ,{
         age :34,
        moyenne  :10,
        name : "mohammed"
    }
   ,
]
let man = etudiant.map(p=> p.age+1)
console.log(man);

