'use strict'
// BurgerMenu
const burger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation')
const navigationClose = document.querySelector('.navigation__close')

burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active')
})

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active')
})

// Music
const mute = document.querySelector('.mute__checkbox')
const audio = new Audio('audio/waterTower.mp3')

try {
    const checkMute = () => {
        if (mute.checked) {
            audio.play().catch(() => {
                mute.checked = false
            })
        } else {
            audio.pause()
        }
    }

    mute.addEventListener('change', checkMute)

    checkMute()
} catch {
    console.log('На этой странице нет музыки')
}

// Sliders
try {
    const sliderThumbs = new Swiper('.slider-thumbs', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        loopedSlides: 4
    })

    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex)
    })

    const sliderMain = new Swiper('.slider-main', {
        loop: true,
        loopedSlides: 4
    })

    sliderThumbs.controller.control = sliderMain
    sliderMain.controller.control = sliderThumbs

    const videos = document.querySelectorAll('video')

    sliderMain.on('slideChange', () => {
        for (let i = 0; i < videos.length; i++) {
            videos[i].pause()
        }
    })

    const pagination = document.querySelector('.pagination')
    const paginationButton = document.querySelector('.pagination__arrow')

    paginationButton.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active')
    })

} catch {
    console.log('На этой странице нет слайдера')
}
