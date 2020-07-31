'use strict'

window.onload = function () {

    const navItemCollection = document.querySelectorAll('.navbar-nav-first .nav-item')
    for (let elem of navItemCollection) {
        elem.addEventListener("click", navItemClassToggle)
    }
    

    function navItemClassToggle() {
        for (let elem of navItemCollection) {
            elem.classList.remove('navItem-active')
        }
        this.classList.add('navItem-active')
    }

    $(".main-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
    });

    setSliderHeight()
    window.addEventListener("resize", setSliderHeight)

    function setSliderHeight() {
        const slideCollection = document.querySelectorAll('.main-slider .owl-item')
        if (document.documentElement.clientHeight < 1280) {
            for (let item of slideCollection) {
                item.style.height = document.documentElement.clientHeight - 120 + 'px'
            }
        } else {
            for (let item of slideCollection) {
                item.style.height = 1280 + 'px'
            }
        }
    }

    window.addEventListener('scroll', function (e) {
        let logo = document.querySelector('.navbar-brand')

        if (pageYOffset > 120) {
            logo.style.width = 25 + 'px'
            logo.style.height = 25 + 'px'
        } else {
            logo.style.width = 65 + 'px'
            logo.style.height = 65 + 'px'

        }
    })

    $(".courses-slider").owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        lazyLoad: true,
        smartSpeed: 1000,
        nav: true,
        navText: [`<i class="fas fa-chevron-circle-left"></i>`, `<i class="fas fa-chevron-circle-right"></i>`],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    setCardHeight('.courses-slider .owl-item', '.card-courses')
    window.addEventListener("resize", () => setCardHeightAfterResize('.courses-slider .owl-item', '.card-courses'))

    function setCardHeight(slides, card) {
        const coursesCollection = document.querySelectorAll(card)
        const slidesCollection = document.querySelectorAll(slides)

        let maxHeight = 0


        for (let item of coursesCollection) {
            if (item.offsetHeight > maxHeight) {
                maxHeight = item.offsetHeight
            }
        }
        for (let item of coursesCollection) {
            item.style.height = maxHeight + 'px'
        }
        for (let item of slidesCollection) {
            item.style.height = maxHeight + 'px'
        }
    }

    function setCardHeightAfterResize(slides, card) {
        const owlcoursesCollection = document.querySelectorAll(slides)
        const cardCollection = document.querySelectorAll(card)

        for (let item of cardCollection) {
            item.style.height = 'auto'
        }

        for (let item of owlcoursesCollection) {
            item.style.height = 'auto'
        }

        setTimeout(function () {
            setCardHeight(slides, card)
            addDots
        }, 550)
    }

    $(".testimonials-slider").owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        lazyLoad: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        pagination: true,


        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    addDots()

    function addDots() {
        const btns = document.querySelectorAll('.testimonials button')
        for (let item of btns) {
            item.style.position = 'relative'
            item.innerHTML = '<i class="far fa-circle style="></i>'
            item.style.zIndex = 100
        }
    }



    setCardHeight('.testimonials-slider .owl-item', '.card-testimonials')
    window.addEventListener("resize", () => setCardHeightAfterResize('.testimonials-slider .owl-item', '.card-testimonials'))


    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();

    setMapHeight()
    window.addEventListener("resize", setMapHeight)

    function setMapHeight() {
        const mapFrame = document.querySelector('.mapFrame')
        if (document.documentElement.clientHeight < 600) {
            mapFrame.style.height = document.documentElement.clientHeight + 'px'
        } else {
            mapFrame.style.height = 600 + 'px'
        }
    }
}