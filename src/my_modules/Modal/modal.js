const openModalBtn = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

openModalBtn.forEach((openModal) => {
  openModal.addEventListener("click", () => {
    modal.classList.remove("hide");
    modalContainer.classList.remove("hide");
  });
});

closeModal.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("hide");
  },800);
  modalContainer.classList.add("hide");
});

modal.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("hide");
  },800);
  modalContainer.classList.add("hide");
});


/*
    html template
*/

/*
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modal Design</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerpolicy="no-referrer" />
</head>

<body>

  <div class="buttons-container"> <button class="open-modal">Open Modal</button> <button class="open-modal">Open Modal</button> <button class="open-modal">Open Modal</button> </div>
  <div class="modal hide">
    <div class="modal-container hide">
      <div class="modal-header">
        <h2>This is a Modal</h2> <button class="close-modal"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci saepe quae doloremque, facere corrupti non inventore hic iure omnis harum magnam laboriosam fuga deleniti ipsam quam itaque soluta suscipit provident? Illum nesciunt tenetur ab laboriosam nisi vel nihil vero ullam, quas distinctio in quisquam quod fugit tempore quibusdam, deserunt eligendi.</p>
        <button>Read More</button>
      </div>
    </div>
  </div>
  
</body>

</html>

*/