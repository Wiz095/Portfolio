 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const logo = document.getElementById('logotxt');
var navbar = document.getElementsByClassName('nav')




//event triggered if user touches the hamburger

let burgerStatus = 'closed';

window.onscroll = function () {
    detectScroll()
};

let screenWidth = window.matchMedia("(max-width: 768px)");

hamburger.addEventListener('click', () => {
    burger()
});

navLinks.addEventListener('click', () => {
    if (burgerStatus === 'open') {
        burger()
    }
});

function burger() {
    navLinks.classList.toggle('open');

    //burger animation
    hamburger.classList.toggle('toggle');

    //links animation
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease-out forwards ${index / 5}s`;
        }
    });

    burgerStatus = 'opened';
}

// Scroll Events

const navCont = document.querySelector('.nav');

function detectScroll() {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navCont.classList.add('nav-up');
    } else {
        navCont.classList.remove('nav-up');
    }

    if (window.pageYOffset > 0) {
        navCont.classList.add('scrolled')
      } else {
        navCont.classList.remove('scrolled')
      }

      if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
}

// if (screenWidth.matches) {
//     logo.innerText = "WG."
// } else {
//     logo.innerText = "Wisman Guevara."
// }

