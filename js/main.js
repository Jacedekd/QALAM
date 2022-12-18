const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        300: {
          slidesPerView: 1,
          spaceBetween:10
        },
        // when window width is >= 480px
        910: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        // when window width is >= 640px
        1290: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
      }
    // when window width is >= 640px
    

});

document.querySelectorAll('.nav_a').forEach((elem) => {

    elem.onmouseenter =
        elem.onmouseleave = (e) => {

            const tolerance = 10

            const left = 0
            const right = elem.clientWidth

            let x = e.pageX - elem.offsetLeft

            if (x - tolerance < left) x = left
            if (x + tolerance > right) x = right

            elem.style.setProperty('--x', `${x}px`)

        }

})


let hamburger = document.querySelector(".hamburger");
let background = document.querySelector(".background");
let nav__hamburger = document.querySelector(".nav__hamburger");
let body = document.querySelector("body");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("is-active");
    background.classList.toggle("is-active");
    nav__hamburger.classList.toggle("is-active");
    body.classList.toggle("is-active");

});
