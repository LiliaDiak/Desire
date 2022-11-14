$(function () {
    $('.top__slider').slick({
        dots:true,
        arrows:false,
        // fade:true,
    });
})

const menu1 = document.querySelector(".rightside-menu");
const menu = document.querySelector("body");
const menu2 = document.querySelector(".rightside-menu__close");
menu.addEventListener("click", show);
 function show(event){
     if(event.target.closest(".rightside-menu__close")){
         menu1.classList.add("rightside-menu--close")
        }
         if(event.target.closest(".header__btn")){
             if(menu1.classList.contains("rightside-menu--close")){
            menu1.classList.remove("rightside-menu--close")
        }
         }
}


const btn1 = document.querySelector(".gallery__button-1");
const btn2 = document.querySelector(".gallery__button-2");
const btn3 = document.querySelector(".gallery__button-3");
const btn4 = document.querySelector(".gallery__button-4");
const btn5 = document.querySelector(".gallery__button-5");
const inner_2 = document.querySelector(".gallery__inner-2");
const inner_1 = document.querySelector(".gallery__inner-1");
btn1.addEventListener("click", show_btn1);
    function show_btn1(event){
        if(event.target.closest(".gallery__button-1")){
            btn1.classList.add(".gallery__button-1-active");
            btn2.classList.remove(".gallery__button-2-active");
            btn3.classList.remove(".gallery__button-3-active");
            btn4.classList.remove(".gallery__button-4-active");
            btn5.classList.remove(".gallery__button-5-active");

        }
    }

    btn2.addEventListener("click", show_btn2);
    function show_btn2(event){
        if(event.target.closest(".gallery__button-2")){
            btn2.classList.add(".gallery__button-2-active")
            btn1.classList.remove(".gallery__button-1-active");
            btn3.classList.remove(".gallery__button-3-active");
            btn4.classList.remove(".gallery__button-4-active");
            btn5.classList.remove(".gallery__button-5-active");
        }
        if(btn2.classList.contains(".gallery__button-2-active")){
             inner_2.classList.add("gallery__inner-2__active");
             inner_1.classList.remove("gallery__inner-1__active");
        }
    }
  




