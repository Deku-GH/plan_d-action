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

function rendercard() {

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
                          <button type="button" class="btn_edite btn btn-primary w-100" data-bs-toggle="modal"
                     data-bs-target="#btn_edite" >edite</button>
                        </div>                      
                    </div> `
        card.innerHTML += cardbody
    })

    let btn_delete = document.querySelectorAll(".delite_btn").forEach((btn, deleteindex) => {
        btn.addEventListener('click', (E) => {
            Deletecard(deleteindex);
        })

    })

    let btn_EDITE = document.querySelectorAll(".btn_edite").forEach((btn, editindex) => {
        btn.addEventListener("click", (e) => {
            console.log("hi you here");
            
            editelescard(editindex)
        })
    })

}

function Deletecard(index) {

    let card = document.querySelectorAll(".card_item");
    console.log(index);

    card[index].remove();
    console.log(card);

}


function sortalphabitik(contacts) {
    console.log(contacts);

    contacts.sort((a, b) => a.fullname.localeCompare(b.fullname))
    rendercard()
}


document.getElementById('sort').addEventListener("click", () => {
    sortalphabitik();

})


function  editelescard(index){
    let card =contacts[index];
    console.log(card);
    

    document.forms["btn_edite"].fullname.value= card.fullname
    document.forms["btn_edite"].email.value= card.Email
    document.forms["btn_edite"].telephone.value= card.telephone



document.forms["btn_edite"].addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.target;

    contacts[index] = {
        fullname: form.fullname.value,
        email: form.email.value,
        telephone: form.telephone.value
    };

    rendercard();
});
}

