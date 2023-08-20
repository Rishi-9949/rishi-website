const heroImage = document.querySelector('img');
const heroButton = document.querySelector('button');

heroButton.addEventListener('click', function() {
  heroImage.classList.toggle('active');
});

// remove class active on scroll window 
window.onscroll = () => { 
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    cartItems.classList.remove("active");
};

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

function submitForm() {
    // Get the selected file name
    const selectedFileName = document.getElementById("selectedFileName").innerHTML;
    const card = document.getElementById("card");
  
    card.style.display = "block";
  
    // Create a new message to be displayed
    const message = `
      <div class="success">
        <i class="fas fa-check-circle success-icon"></i>
        <span>Form sent successfully!</span>
        <br />
      </div>
    `;
  
    // Remove all the form elements from the DOM
    const formElements = document.querySelectorAll("input, label, button");
    for (const formElement of formElements) {
      formElement.remove();
    }
  
    // Display the success message
    const successMessageElement = document.getElementById("successMessage");
    successMessageElement.innerHTML = message;
    successMessageElement.style.display = "block";
  }
  
  function updateSelectedFile(inputId) {
    const selectedFileIcon = document.getElementById(`selectedFileIcon${inputId}`);
    selectedFileIcon.style.display = "inline-block";
  }
  
  function resetForm() {
    const selectedFileIconProofOfID = document.getElementById("selectedFileIconproofOfID");
    const selectedFileIconProofOfAddress = document.getElementById("selectedFileIconproofOfAddress");
    const nameInput = document.getElementById("name");
    const addressInput = document.getElementById("address");
    const proofOfIDInput = document.getElementById("proofOfID");
    const proofOfAddressInput = document.getElementById("proofOfAddress");
  
    selectedFileIconProofOfID.style.display = "none";
    selectedFileIconProofOfAddress.style.display = "none";
    nameInput.value = "";
    addressInput.value = "";
    proofOfIDInput.value = "";
    proofOfAddressInput.value = "";
  }
  
  function updateSelectedFile(inputId) {
    const selectedFileIcon = document.getElementById(`selectedFileIcon${inputId}`);
    const inputElement = document.getElementById(inputId);
  
    if (inputElement.files.length > 0) {
      selectedFileIcon.style.display = "inline-block";
    } else {
      selectedFileIcon.style.display = "none";
    }
  }
  
  
  document.getElementById("submitBtn").addEventListener("click", function() {
    window.location.href = "pages/thankyou.html"; // Relative path to your "Thank You" page
  });
  