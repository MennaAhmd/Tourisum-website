let navbarDiv=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
    if(document.body.scrollTop>40 || document.documentElement.scrollTop>40){
        navbarDiv.classList.add("navbar-cng");
    }else{
        navbarDiv.classList.remove("navbar-cng");
    }
});

const navbarCpllapseDiv=document.getElementById("navbar-collapse");
const navbarShowBtn=document.getElementById("navbar-show-btn");
const navbarCloseBtn=document.getElementById("navbar-close-btn");

// show navbar
navbarShowBtn.addEventListener("click",()=>{
    navbarCpllapseDiv.classList.add("navbar-collapse-rmw")
});

// hide side bar
navbarCloseBtn.addEventListener("click",()=>{
    navbarCpllapseDiv.classList.remove("navbar-collapse-rmw")
});

document.addEventListener("click",(e)=>{
    if(e.target.id!="navbar-collapse" && e.target.id!="navbar-show-btn" && e.target.parentElement.id!="navbar-show-btn"){
        navbarCpllapseDiv.classList.remove("navbar-collapse-rmw");
    }
});
// stop transition and animation window resizing 
let resizeTimer;
window.addEventListener("resize", ()=>{
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});
// finally DONE