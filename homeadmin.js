const sideMenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#closebtn");
const toggler= document.querySelector(".toggler")


//show menu
menubtn.addEventListener('click',()=>{
    sideMenu.style.display= "block";
})

//hide menu
closebtn.addEventListener('click',()=>{
    sideMenu.style.display= "none";
})

//change theme

toggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables')

    toggler.querySelector('span').classList.toggle('active');
})