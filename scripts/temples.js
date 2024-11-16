// Update footer year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu Toggle
const navMenu = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;';
document.querySelector('header').prepend(hamburger);

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.classList.add('hidden');
