const hamburger = document.querySelector('.hamburger')
const navLinks= document.querySelector('.navbar-links')

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('show')
})