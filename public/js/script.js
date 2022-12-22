let menu = document.querySelector('#menu-button');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');

// Скрипт для меню навигации
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Скрипты для формы входа в систему
document.querySelector('#login-button').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
};

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
};

// Скрипты для формы регистрации в системе
document.querySelector('#registration-button').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
    document
        .querySelector('.registration-form-container')
        .classList.toggle('active');
};

document.querySelector('#close-registration-form').onclick = () => {
    document
        .querySelector('.registration-form-container')
        .classList.remove('active');
};

document.querySelector('#back-to-login').onclick = () => {
    document
        .querySelector('.registration-form-container')
        .classList.remove('active');
    document.querySelector('.login-form-container').classList.toggle('active');
};

window.onscroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

window.onload = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

// Parallax эффект на главной
document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach((elm) => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
};

document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach((elm) => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
};

// Скрипт Swiper
var swiper = new Swiper('.vehicles-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        798: {
            slidesPerView: 2,
        },
        1056: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper('.featured-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        798: {
            slidesPerView: 2,
        },
        1056: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        798: {
            slidesPerView: 2,
        },
        1056: {
            slidesPerView: 3,
        },
    },
});
