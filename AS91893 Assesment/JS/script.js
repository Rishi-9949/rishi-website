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

  Fancybox.bind('[data-fancybox="gallery"]', {
    // You can customize the Fancybox options here
  });

  const contactForm = document.getElementById('contactForm');
  const submitMessage = document.getElementById('submitMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display the submit message
    submitMessage.innerHTML = `Thank you, ${name}! Your message has been submitted.`;

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });