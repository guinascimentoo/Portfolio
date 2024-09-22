const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

button.addEventListener('click', function(){
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
});