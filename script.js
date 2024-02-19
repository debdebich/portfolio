// window.onscroll = function(){
//     const h = document.documentElement.clientHeight;
//     console.log(h);
// };


const btns = document.querySelectorAll('.menu__btn a');

for (let btn of btns){
    btn.addEventListener('click', function(event){
        let activeBtn = document.querySelector('.active')
        btn.classList.add('active')
        activeBtn.classList.remove('active')
    })
}