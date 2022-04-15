const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.lists');
const close_btn = document.querySelector('.close-btn');
// NAV

hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active-for-nav');
      });

close_btn.addEventListener('click', () => {
      navLinks.classList.remove('active-for-nav');
      });

// NAV






