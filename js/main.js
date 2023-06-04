const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#btn-nav');
const navBtnImg = document.querySelector('#btn-nav-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
         navBtnImg.src = "./img/media/nav-close.svg"
    } else {
       navBtnImg.src = "./img/media/nav-open.svg" 
    }
}


AOS.init({
    // once: true
});
