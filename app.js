const open_btn = document.querySelector(".mobile-open")
const close_btn = document.querySelector(".close-icon")
const menu = document.querySelector(".mobile-menu")


open_btn.addEventListener("click",function(event){
    if (menu.style.display === "none" ){
        menu.style.display = "block"
    }else {
        menu.style.display = "none"
    }
})

close_btn.addEventListener("click",function(event){
    if (menu.style.display === "block" ){
        menu.style.display = "none"
    }else {
        menu.style.display = "block"
    }
})
