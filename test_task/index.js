let modalBg = document.querySelector('.modal');
let openModalBtn = document.querySelectorAll('.start_btn');

openModalBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modalBg.classList.add('active');
    })
});

document.addEventListener('click', (e) => {
    if (e.target == modalBg) {
        modalBg.classList.remove('active');
    }
});