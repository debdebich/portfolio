let classLink = '.main-link'
const btns = document.querySelectorAll('.menu__btn a');
const burgerLines = document.querySelector('.lines__dt')
const burgerLinesHide = document.querySelector('.lines')
const burgerMenu = document.querySelector('.burger')
const burgerBtns = document.querySelectorAll('.burger__btns a')

window.onscroll = function(){
    let h = document.documentElement.clientHeight;

    if (window.scrollY >= h*4) classLink = '.feedback-link';
    else if (window.scrollY >= h*3) classLink = '.projects-link';
    else if (window.scrollY >= h*2) classLink = '.skills-link';
    else if (window.scrollY >= h) classLink = '.about-link';
    else classLink = '.main-link';

    let activeBtn = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classLink);
    if (!newActiveBtn.classList.contains('active')) {
        newActiveBtn.classList.add('active');
        activeBtn.classList.remove('active');
    };
};


for (let btn of btns){
    btn.addEventListener('click', function(event){
        let activeBtn = document.querySelector('.active');
        btn.classList.add('active');
        activeBtn.classList.remove('active');
    });
};



burgerLines.addEventListener('click', function(event){
    burgerMenu.style.display = 'flex';
});


burgerLinesHide.addEventListener('click', function(event){
    burgerMenu.style.display = 'none';
});


for (let burgBtn of burgerBtns){
    burgBtn.addEventListener('click', function(event){
    burgerMenu.style.display = 'none';
    });
};