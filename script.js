

// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Scroll Section Active Links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
    }
  });

  // Sticky Navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', scrollPosition > 100);

  // Remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'top' });


// Store scroll position in local storage before refreshing the page

window.onbeforeunload = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  };
  
  // Restore scroll position after the page reloads
  window.onload = () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      localStorage.removeItem('scrollPosition');
    }
  };
  

  $(document).ready(function(){
    $('#btn-rm').click(function(){
        $('#exta-p').toggle(1000)
    })
  })

   
  




