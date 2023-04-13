const mobileBtn = document.querySelector('.mobile-button');
const mobileIcon = document.querySelector('.mobile-button__icon');
const mobileNavigation = document.querySelector('.mobile-nav');
const wrapper = document.querySelector('.header__mobile');

const mobileNav = () => {
    mobileBtn.addEventListener('click', () => {
        wrapper.classList.toggle('active');
        mobileIcon.classList.toggle('mobile-button__icon_active');
        mobileNavigation.classList.toggle('mobile-nav_active');
        document.body.classList.toggle('no-scroll');
    })
}

export default mobileNav;