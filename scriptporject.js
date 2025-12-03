  let contacts = [];




document.forms["ajoute_contact"].addEventListener("submit", (even) => {
    even.preventDefault();
  
    let form = even.target;
    let contact = {
        fullname: form.fullname.value,
        Email: form.email.value,
        telephone: form.telephone.value
    }
    contacts.push(contact)
    rendercard(contacts)


})

function rendercard(contacts) {

    let card = document.getElementById("contenaire_carte");
    card.innerHTML = "" 
    contacts.forEach(contact => {
                 
         

        let cardbody = `  
                     <div class=" card_item card-body pt-3">
                        <h5 class="card-title">${contact.fullname}</h5>
                        <p class="card-text">${contact.Email}</p>
                        <p class="card-text">${contact.telephone}</p>
                        <div>
                             <button class="btn delite_btn btn-danger">Delite</button>
                        <button class="btn_EDITE btn btn-primary">Edite</button>
                        </div>                      
                    </div> `
        card.innerHTML += cardbody
    })

    let btn_delete = document.querySelectorAll(".delite_btn").forEach((btn, index) => {
        btn.addEventListener('click', (E) => {
            Deletecard(index);
        })

    })

    let btn_EDITE = document.querySelectorAll(".btn_EDITE").forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            editelescard(index)
        })
    })

}

function Deletecard(index) {

    let card = document.querySelectorAll(".card_item");
    console.log(index);

    card[index].remove();
    console.log(card);

}


function sortalphabitik(contacts){
      console.log(contacts);
      
    contacts.sort((a,b)=>a.fullname.localeCompare(b.fullname))
    rendercard(contacts)
}


document.getElementById('sort').addEventListener("click",()=>{
   sortalphabitik();

})