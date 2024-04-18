const nav_header=document.querySelector(".header");
const mob_nav=document.querySelector('.mobile-view-icon');
const toggleNavbar=() =>{
    nav_header.classList.toggle('active');
};
    
mob_nav.addEventListener('click', ()=>toggleNavbar());