/*
const searchBtn = document.querySelector('#search-btn');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(menuBtn)&&
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove('active');
        }
    });
});
*/

const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Sayfada herhangi bir yere tıklandığında menüyü kapatmak için
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && !e.target.closest('#menu-btn')) {
        navbar.classList.remove('active');
    }
});