const heroImage = document.querySelector('img');
const heroButton = document.querySelector('button');

heroButton.addEventListener('click', function() {
  heroImage.classList.toggle('active');
});

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick= () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector("#search-btn").onclick= () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');

}


window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}