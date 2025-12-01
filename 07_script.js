let numbr= [3,4,6,5,2,8,20]
console.log(numbr.sort((a, b) => b-a ));
console.log(numbr.sort((a, b) => a-b) );

console.log("================================");


let name =["mouad","ali","sara","hajar","hamza","ali"]
console.log(name.sort());

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
  console.log(etudiants.sort((a, b) => a.moyenne-b.moyenne));
