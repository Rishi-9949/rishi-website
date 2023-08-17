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


$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var headphonesColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });
  
