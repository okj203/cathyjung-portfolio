'use strict';

// dark style is applied to header when scrolled down
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
})

// home content becomes transparent when scrolled down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// arrow-up button disappears when the page is scrolled to the top
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY < homeHeight / 2) {
        arrow.style.opacity = 0;
    } else {
        arrow.style.opacity = 1;
    }
})

// navbar toggle button click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

// close the navbar menu automatically when clicked
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
})
