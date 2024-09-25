// JavaScript Document
console.log("hi");

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Dit is de javascript voor de light mode//
let lightmode = localStorage.getItem('darkmode')
const dropDown = document.getElementById('dropdown')


