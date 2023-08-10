// Smooth scrolling when clicking on navigation links
const navLinks = document.querySelectorAll('#top-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const yOffset = -100; // Adjust this value to fine-tune the scroll position
    const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
