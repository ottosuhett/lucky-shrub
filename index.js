const menu = document.querySelector('.menu-icon > span');
const items = document.querySelector('.items');

menu.addEventListener('click', () => {
    items.classList.toggle('show')
})
