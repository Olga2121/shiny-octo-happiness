import '../scss/style.scss';
('user strict')

const sandwichMenu = document.querySelector('#header__button');
const contenerAside = document.querySelector('.contener__aside');
const asideHeaderButton = document.querySelector('.aside__header__button');

const iconButton = document.querySelector('.icon-middle__button-two');
const modalWindow = document.querySelector('.modal-window');

const modalTwo = document.querySelector('.modal-window__cross-button');
const messageAside = document.querySelector('.aside__footer__button-message');
const hoverActive = document.querySelector('.hover')

const messageTel = document.querySelector('.aside__footer__button-phone');
const modalTel = document.querySelector('.modal-tel');

const messageTelCros = document.querySelector('.modal-tel__cross-button');
const messageTelTwo = document.querySelector('.icon-middle__button');

let articleTextButton = document.querySelector('.article__text__button');
let textBlock = document.querySelector('.tex');


//Swiper
let swiperNav = new Swiper('.nav', {})

let swiper = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

let mySwiper = new Swiper('.swiper2', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

let mSwiper = new Swiper('.swiper3', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

//меню боковое

sandwichMenu.addEventListener('click', function(e) {
    e.preventDefault()
    sandwichMenu.classList.toggle('active')
    contenerAside.classList.toggle('active')
})

asideHeaderButton.addEventListener('click', function(e) {
    e.preventDefault()
    asideHeaderButton.classList.toggle('active')
    contenerAside.classList.toggle('active')
})

// по клику открывается форма

iconButton.addEventListener('click', function(e) {
    e.preventDefault()
    iconButton.classList.toggle('active')
    modalWindow.classList.toggle('active')
    contenerAside.classList.remove("active")
    hoverActive.classList.toggle('gactive')




})

modalTwo.addEventListener('click', function(e) {
    e.preventDefault()
    modalTwo.classList.toggle('active')
    modalWindow.classList.toggle('active')
    hoverActive.classList.remove('gactive')



})

messageAside.addEventListener('click', function(e) {
    e.preventDefault()
    messageAside.classList.toggle('active')
    modalWindow.classList.toggle('active')
    contenerAside.classList.remove("active")
    modalTel.classList.remove('active')
    hoverActive.classList.toggle('gactive')




})

// по клику открывается звонок

messageTel.addEventListener('click', function(e) {
    e.preventDefault()
    messageTel.classList.toggle('active')
    modalTel.classList.toggle('active')
    contenerAside.classList.remove("active")
    modalWindow.classList.remove('active')
    hoverActive.classList.toggle('gactive')


})

messageTelCros.addEventListener('click', function(e) {
    e.preventDefault()
    messageTelCros.classList.toggle('active')
    modalTel.classList.toggle('active')
    hoverActive.classList.remove('gactive')

})

messageTelTwo.addEventListener('click', function(e) {
    e.preventDefault()
    messageTelTwo.classList.toggle('active')
    modalTel.classList.toggle('active')
    contenerAside.classList.remove("active")
    hoverActive.classList.toggle('gactive')


})

//открывает текст в начале


articleTextButton.addEventListener('click', function(e) {
    e.preventDefault()
    articleTextButton.classList.toggle('text-block')
    textBlock.classList.toggle('text-block')
})

//открывает первый свайпер
let buttonSwiperOne = document.querySelector('.but');
let liBut = document.querySelector('.li-but');

buttonSwiperOne.addEventListener('click', function(e) {
    e.preventDefault()
    buttonSwiperOne.classList.toggle('active__Swiper')
    liBut.classList.toggle('active__Swiper')
})


//открывает второй свайпер
let liButtonTwo = document.querySelector('.li-button-two');
let buttonSwiperTwo = document.querySelector('.but-two')

buttonSwiperTwo.addEventListener('click', function(e) {
    e.preventDefault()
    buttonSwiperTwo.classList.toggle('active_Swipers')
    liButtonTwo.classList.toggle('active_Swipers')

})
