let numbr = new Array(1, 3, 5, 7, 9)
console.log(numbr);

console.log("for");
for (let i = 0; i < numbr.length; i++) {
    console.log(numbr[i]);
}

console.log("wihle");
let i = 0;
while (i < numbr.length) {
    console.log(numbr[i]);
    i++;
}


//la somme de tableau
let sum = 0;
numbr.forEach(num => {
    sum += num;
})
console.log("la somme de tableau et :" + sum);


//Afficher les noms de plus de 5 lettres
console.log("Afficher les noms de plus de 5 lettres");

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(fruit => {
    if (fruit.length == 5) {
        console.log(fruit);

    }
})