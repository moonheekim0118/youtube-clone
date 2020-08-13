const mainMenuBtn = document.getElementById('toggle');
const navMenuBtn = document.getElementById('nav-toggle')
const navContainer=document.querySelector('nav');
const body= document.querySelector('body');
mainMenuBtn.addEventListener('click', ()=>{
    navContainer.classList.add('show');
    body.classList.add('nav-show');
})

navMenuBtn.addEventListener('click', ()=>{
    navContainer.classList.remove('show');
    body.classList.remove('nav-show');
})

// nav bar 밖에 (nav 영역) 클릭하면 창닫기
window.addEventListener('click',(e)=>{
    if(e.target === navContainer){
        navContainer.classList.remove('show')
        body.classList.remove('nav-show');
    }
})