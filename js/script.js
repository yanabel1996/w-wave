let burger = document.querySelector('.burger');
let menuTop = document.querySelector('.header-top__nav');
let menuBottom = document.querySelector('.header-bottom__nav');
let menuLink = document.querySelectorAll('.header-top__item');
let menuBottomLink = document.querySelectorAll('.header-bottom__item');
let cross = document.querySelector('.cross')

burger.addEventListener('click',
    function () {
        menuTop.classList.toggle('header-top__nav--active');
        menuBottom.classList.toggle('header-bottom__nav--active');
        document.body.classList.toggle('stop-scroll');
    })

menuLink.forEach(function (el) {
    el.addEventListener('click', function () {
        menuTop.classList.remove('header-top__nav--active');
        menuBottom.classList.remove('header-bottom__nav--active');
        document.body.classList.remove('stop-scroll');
    })
})

cross.addEventListener('click',
    function () {
        menuTop.classList.toggle('header-top__nav--active');
        menuBottom.classList.toggle('header-bottom__nav--active');
    })

let btn = document.querySelectorAll('.header-top__btn');
let enter = document.querySelector('.header__back');
let crossEnter = document.querySelector('.enter__cross__btn');


btn.forEach(function (e) {
    e.addEventListener('click', function () {
        enter.classList.toggle('header__back--active');
        document.body.classList.toggle('stop-scroll');
    })

})

crossEnter.addEventListener('click',
    function () {
        enter.classList.toggle('header__back--active');
    })

let search = document.querySelector('.header-top__search');
let searchSecond = document.querySelector('.search-line');
let searchStroke = document.querySelector('.search__stroke');

search.addEventListener('click',
    function () {
        searchStroke.classList.toggle('search__stroke--active');
        document.body.classList.toggle('stop-scroll');
    })

searchSecond.addEventListener('click',
    function () {
        searchStroke.classList.toggle('search__stroke--active');
    })


let btnPlay = document.querySelectorAll('.header-bottom__play');

btnPlay.forEach(function(btn) {
    btn.addEventListener('click', () => {
    if(btn.classList.contains('header-bottom__play')) {
        btn.classList.remove('header-bottom__play');
    } else {
        btn.classList.add('header-bottom__play');
    }

    if(btn.classList.contains('header-bottom__play--active')) {
        btn.classList.remove('header-bottom__play--active');
    } else {
        btn.classList.add('header-bottom__play--active');
    }
});
})

let btnPodcast = document.querySelectorAll('.podcast__main__right');

btnPodcast.forEach(function(btn) {
    btn.addEventListener('click', () => {
    if(btn.classList.contains('podcast__main__right')) {
        btn.classList.remove('podcast__main__right');
    } else {
        btn.classList.add('podcast__main__right');
    }

    if(btn.classList.contains('podcast__main__right--active')) {
        btn.classList.remove('podcast__main__right--active');
    } else {
        btn.classList.add('podcast__main__right--active');
    }
});
})

let btnPlaylist = document.querySelectorAll('.playlist__play');

btnPlaylist.forEach(function(btn) {
    btn.addEventListener('click', () => {
    if(btn.classList.contains('playlist__play')) {
        btn.classList.remove('playlist__play');
    } else {
        btn.classList.add('playlist__play');
    }

    if(btn.classList.contains('playlist__play--active')) {
        btn.classList.remove('playlist__play--active');
    } else {
        btn.classList.add('playlist__play--active');
    }
});
})

const validation = new JustValidate('.header__enter');


validation
    .addField('#enterlog', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },
        {
            rule: 'minLength',
            value: 5,
        },
        {
            rule: 'maxLength',
            value: 20,
        },
    ])
    .addField('#enterpassword', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },
        {
            rule: 'password',
        },
    ]);


const validationAboutUs = new JustValidate('.aboutus__form');

validationAboutUs
    .addField('#aboutusname', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Ошибка'
        },
        {
            rule: 'maxLength',
            value: 20,
            errorMessage: 'Ошибка'
        },
    ])
    .addField('#aboutusemail', [
        {
            rule: 'required',
            errorMessage: 'Ошибка',
        },
        {
            rule: 'email',
            errorMessage: 'Ошибка',
        },


    ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
        alert('Заявка принята!Мы обязательно с Вами свяжемся.');
    });




let radio = document.querySelector('.radioplus');
let radioBtn = document.querySelector('.trigger__btn');
let plus = document.querySelector('.plus');
let spaceBtn = document.querySelector('.header-bottom__plus');

radioBtn.addEventListener('click',
    function () {
        radio.classList.toggle('radioplus--active');
        plus.classList.toggle('plus--active');
        spaceBtn.classList.toggle('header-bottom__plus--active');
    });


let podcastBtn = document.querySelector('.podcast__btn');
let podcastCards = document.querySelectorAll('.podcast__item');

podcastBtn.addEventListener('click', () => {
    podcastCards.forEach(el => { el.classList.add('podcast__item--visible') });
    podcastBtn.classList.add('podcast__btn--hidden');
})

const element = document.querySelector('.podcast__left-select');
const choices = new Choices(element, {
    searchEnabled: false,
});


new Accordion('.guests__left', {
    elementClass: 'guests__item',
    triggerClass: 'guests__btn',
    panelClass: 'guests__content',
    activeClass: 'guests__content--active',
    duration: 400,
    openOnInit: [0],
});


let guestsBtn = document.querySelectorAll('.guests__content-itembtn');
let guestsContent = document.querySelectorAll('.guests__right-item');


guestsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        guestsBtn.forEach(function (btn) {
            btn.classList.remove('guests__content-itembtn--active')
        });

        e.currentTarget.classList.add('guests__content-itembtn--active');

        guestsContent.forEach(function (element) {
            element.classList.remove('guests__right-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('guests__right-item--active');
    });
});



new SimpleBar(document.querySelector('.playlist__radiobtntwo'));

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slideClass: 'swiper-slide',
    wrapperClass: 'swiper-wrapper',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,
    spaceBetween: 30,

    breakpoints: {

        320: {
            slidesPerView: 2.31,
            spaceBetween: 20
        },

        641: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        769: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1025: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1261: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }

});

let arrowRight = document.querySelectorAll('.playlist__pages-right');
let arrowLeft = document.querySelectorAll('.playlist__pages-left');
let playlistTwo = document.querySelector('.playlist__listtwo');
let playlistOne = document.querySelector('.playlist__listone--passive');
let pageFirst = document.querySelector('.playlist__pages');
let pageSecond = document.querySelector('.playlist__pages-finish');

arrowRight.forEach(function (element) {
    element.addEventListener('click',
        function () {
            playlistTwo.classList.toggle('playlist__listtwo--active');
            playlistOne.classList.toggle('playlist__listone');
            pageFirst.classList.toggle('playlist__pages--passive');
            pageSecond.classList.toggle('playlist__pages-finish--active');
        })

});

arrowLeft.forEach(function (element) {
    element.addEventListener('click',
        function () {
            playlistTwo.classList.toggle('playlist__listtwo--active');
            playlistOne.classList.toggle('playlist__listone');
            pageFirst.classList.toggle('playlist__pages--passive');
            pageSecond.classList.toggle('playlist__pages-finish--active');
        })
});

