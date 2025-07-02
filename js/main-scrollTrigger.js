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


const rndWrap = gsap.timeline({
    scrollTrigger : {
    trigger: '.rnd-wrap',
    start: 'top top',
    end : 'bottom 20%',
    toggleActions : 'play none none reverse',
    // scrub : true, 
    // markers: true,
    pin: true
    }
})

rndWrap
    .from('.rnd-wrap',{yPercent : +70})
    .from('.rnd-wrap hgroup h2',{yPercent : -30, opacity : 0})
    .from('.rnd-wrap hgroup p',{yPercent : -30, opacity : 0})
    .from('.rnd-wrap .more-btn',{yPercent : -30, opacity : 0})
    


const historyWrap = gsap.timeline({
    duration: 2,
    scrollTrigger : {
    trigger: '.history-wrap',
    start: 'top top',
    end : 'bottom 20%',
    toggleActions : 'play none none reverse',
    // scrub : true, 
    markers: true,
    pin: true
    }
})

historyWrap
    .from('.history-wrap .box1',{yPercent : +70,opacity : 0})
    .to('.history-wrap .box1',{yPercent : -10,background:'#F0F0F0'})
    .from('.history-wrap .box2',{yPercent : +70,opacity : 0})
    .to('.history-wrap .box1',{yPercent : -20,background:'#F0F0F0'})
    .to('.history-wrap .box2',{yPercent : -10,background:'#FDFDFD'})
    .from('.history-wrap .box3',{yPercent : +70,opacity : 0})
    .to('.history-wrap .box1',{yPercent : -30,background:'#EBEBEB'})
    .to('.history-wrap .box2',{yPercent : -20,background:'#F0F0F0'})
    .to('.history-wrap .box3',{yPercent : -10,background:'#FDFDFD'})
    .from('.history-wrap .box4',{yPercent : +70,opacity : 0})