const nav = document.querySelector(".navigation");
const menuItems = document.querySelectorAll(".menu-items")
const hamBurger = document.querySelector(".hamburger");
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close-btn");


function toggleMenu(){

if(nav.classList.contains("showMenu")){
    nav.classList.remove("showMenu");
    closeBtn.style.display = 'none';
    burger.style.display = 'block';
    
}else{
    nav.classList.add("showMenu");
    closeBtn.style.display = 'block';
    burger.style.display = 'none';
}


}





hamBurger.addEventListener("click", toggleMenu);

