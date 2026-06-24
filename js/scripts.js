//menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

//función abrir menú hamburguesa
function openMenu() {
    navMobile.classList.add('open');
    requestAnimationFrame(() => navMobile.classList.add('visible'));
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
}

//función cerrar menú hamburguesa
function closeMenu() {
    navMobile.classList.remove('visible');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
    navMobile.addEventListener('transitionend', () => navMobile.classList.remove('open'), { once: true });
}

hamburger.addEventListener('click', () => {
    navMobile.classList.contains('open') ? closeMenu() : openMenu();
});

document.querySelectorAll('.nav-m-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});