const dataContent = document.getElementById("dataContent");
let count = 1;
let data = [
    {
        id: 1,
        firstname: "Tayeb",
        lastname: "SOUINI",
        email: "Tayeb@gmail.com"
    }
]


function afficherData(Item) {
    dataContent.innerHTML = " ";
    data.forEach(oneItem => {

        dataContent.innerHTML += `
             <tr>
                    <th scope="row">${oneItem.firstname}</th>
                    <td>${oneItem.lastname}</td>
                    <td>${oneItem.email}</td>
                    <td>
                        <button id="${oneItem.id}" class="btn_Delete btn btn-danger">Delete</button>
                        <button id="${oneItem.id}" class="btn btn-info">Update</button>
                    </td>
                </tr> 
    `


    })

    let btn_Delete = document.querySelectorAll(".btn_Delete")
    btn_Delete.forEach(btn => {

    })





}







document.forms["ajouter"].addEventListener("submit", (e) => {

    e.preventDefault();

    let form = e.target;


    let obj = {
        id: count++,
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value
    }

    data.push(obj)

    afficherData(data);
})


//======================================================================


document.forms["Search"].addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;
    let name =form.search.value

    console.log(name);
    let obj_name = data.filter(D=>D.firstname==name )
    console.log(obj_name);
    
    
})