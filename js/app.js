const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.navbarItems');

const toggle = () => {
    enlaces.classList.toggle('activado');
}

ham.addEventListener('click', toggle);