const navBtn = document.querySelector('.bars-btn');
const nav = document.querySelector('.nav-mobile');
const items = document.querySelectorAll('.item');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
// const navTop = document.querySelector('nav');

const openNav = () => {

    if(nav.classList.toggle('active')){
        open.style.display="none";
        close.style.display="block";
    }else {
        open.style.display="block";
        close.style.display="none";
    }
    
    items.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active');
            open.style.display="block";
            close.style.display="none";
        })
    })
}

navBtn.addEventListener('click', openNav);