window.mockApiUrl = "https://5ff1a6e0db1158001748b364.mockapi.io/pets/";

window.removePet = (id) => {
  console.log(id); // remove the pet with given id
  fetch(`${window.mockApiUrl}${id}`, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((pet) => {
    window.location.reload();
    console.log(pet);
  }).catch((err) => {
    console.log(err);
  });
};

window.openPetDetail = (id) => {
  console.log(id); // show details of the pet with given id
  fetch(`${window.mockApiUrl}${id}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json()).then((pet) => {
    console.log(pet);
    let modalEl = document.getElementById('petModal');
    let petModal = new bootstrap.Modal(modalEl);
    modalEl.querySelector('#modalLabel').innerHTML = pet.name;
    modalEl.querySelector('.modal-body').innerHTML = `<p class="text-center">${pet.description}</p>
    <img class="w-25 mx-auto d-block" src="${pet.image}"/>
    `;
    petModal.show();
  }).catch((err) => {
    console.log(err);
  });
};


let ModalCont = `<div class="modal fade" id="petModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;


let newEl = document.createElement("div");
newEl.innerHTML = ModalCont;
document.body.appendChild(newEl);

