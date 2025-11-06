// Toggle menu di mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Efek sederhana scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#ff4d94';
  } else {
    header.style.backgroundColor = '#ff66a3';
  }
});
