const loginBtn = document.querySelectorAll('.js-login');
const closeBtn = document.querySelectorAll('.close');
const popup = document.querySelector('.popup');
const background = document.querySelector('.popup-wrapper');

const login = () => {
    loginBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault;
            background.classList.add('active');
            popup.classList.add('active');
        })
    })
    
    closeBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault;
            background.classList.remove('active');
            popup.classList.remove('active');
        })
    })
}

export default login;

