gsap.registerPlugin(ScrollTrigger) ;

const productWrap = gsap.timeline({
    scrollTrigger : {
    trigger: '.product-wrap',
    start: 'top top',
    end : 'bottom 20%',
    toggleActions : 'play none none reverse',
    // scrub : true, 
    // markers: true,
    pin: true
    }
})
productWrap
    .from('.product-wrap .title-text',{xPercent : -200})
    .from('.product-wrap .swiper-navigation',{opacity : 0})
    .from('.product-wrap .more-btn',{opacity : 0})
    .from('.product-wrap .product-swiper ul',{opacity : 0})



