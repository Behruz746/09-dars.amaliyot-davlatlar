const modeBtn = document.querySelector('.header__dark-mode');
const body = document.body;
const modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null; 

if(modeFromLocal) {
    body.classList.to('dark-mode');
}

modeBtn.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode');
    modeFromLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark'); 
});