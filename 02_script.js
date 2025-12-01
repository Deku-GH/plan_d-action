let fruits = ["Banana", "Orange", "Apple", "Mango"];


let chois = prompt( fruits + " \n1:Ajouter a la fin \n2:Ajouter a la début \n 3:Supprimer le premier\n4:Supprimer le dernier élément\nchoisi : ");
console.log(chois)



switch (chois) {

    case '1': fruits.push("banadora");
        console.log(fruits)

        break;
    case '2': fruits.shift("banadora");
        console.log(fruits)

        break;
    case '3': fruits.unshift("banadora");
        console.log(fruits)

        break;
    case '4': fruits.pop("banadora");
        console.log(fruits)

        break;

    default:
        break;


}

