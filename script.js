let hamburger = document.getElementById('hamburger')
let cancel = document.getElementById('cancel')
let navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
    navLinks.style.right = '0px'
    hamburger.style.visibility = 'hidden'
})
cancel.addEventListener('click', () => {
    navLinks.style.right = '-62vw'
    hamburger.style.visibility = 'visible'
})
