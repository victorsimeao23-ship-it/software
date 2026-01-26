/* Animação dos cards ao entrar na tela */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
},{ threshold: 0.3 });

cards.forEach(card => observer.observe(card));

// Logo reage ao scroll
const header = document.querySelector('.header');
const logo = document.querySelector('.logo-text');

window.addEventListener('scroll', () => {
  if(window.scrollY > 40){
    header.classList.add('scrolled');
    logo.classList.add('logo-scroll');
  } else {
    header.classList.remove('scrolled');
    logo.classList.remove('logo-scroll');
  }
});



