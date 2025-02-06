document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;
    
    const nav = document.querySelector('nav ul');
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.innerHTML = '&#9776;'; // Hamburger icon
    hamburgerBtn.classList.add('hamburger');
    
    hamburgerBtn.addEventListener('click', () => {
        nav.classList.toggle('visible');
        hamburgerBtn.innerHTML = nav.classList.contains('visible') ? '&times;' : '&#977