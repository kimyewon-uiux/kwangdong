window.onload = function(){
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
    


// const historyWrap = gsap.timeline({
//     duration: 2,
//     scrollTrigger : {
//     trigger: '.history-wrap',
//     start: 'top top',
//     end : 'bottom 20%',
//     toggleActions : 'play none none reverse',
//     // scrub : true, 
//     markers: true,
//     pin: true
//     }
// })

// historyWrap
//     .from('.history-wrap .box1',{yPercent : +70,opacity : 0})
//     .to('.history-wrap .box1',{yPercent : -10,background:'#F0F0F0'})
//     .from('.history-wrap .box2',{yPercent : +70,opacity : 0})
//     .to('.history-wrap .box1',{yPercent : -20,background:'#F0F0F0'})
//     .to('.history-wrap .box2',{yPercent : -10,background:'#FDFDFD'})
//     .from('.history-wrap .box3',{yPercent : +70,opacity : 0})
//     .to('.history-wrap .box1',{yPercent : -30,background:'#EBEBEB'})
//     .to('.history-wrap .box2',{yPercent : -20,background:'#F0F0F0'})
//     .to('.history-wrap .box3',{yPercent : -10,background:'#FDFDFD'})
//     .from('.history-wrap .box4',{yPercent : +70,opacity : 0})

gsap.from('.history-wrap',{
   
    scrollTrigger : {
        trigger : '.history-wrap',
        start : '0% 0%',
        end : 'bottom 0%',
        // pin : true,
        // markers : true
    }
})



gsap.utils.toArray('.history-contents .history-box').forEach((selector) =>{
    gsap.timeline({
        scrollTrigger :{
            trigger : selector,
            start : '0% 30%',
            end : '0% 0%',
            scrub : 1,
            // markers: true
        }
    })
    // .from(selector, {opacity : '0'}, 0)
    .to(selector, {transform : 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter : 'brightness(0.9)'} , 0)
})



gsap.from('.media-wrap .title-text',{
   x : -1000, duration : 1,
    scrollTrigger : {
        trigger : '.media-wrap .title-text',
        start : '-=600% top',
        toggleActions : 'play none none reverse',
        markers : true
    }
})
gsap.from('.media-wrap .more-btn',{
   x : 1000, duration : 1,
    scrollTrigger : {
        trigger : '.media-wrap .title-text',
        toggleActions : 'play none none reverse',
        start : '-=600% top',
    }
})
gsap.from('.media-wrap .media-contents',{
   y : 1000, duration : 2, scale : 0.1,
    scrollTrigger : {
        trigger : '.media-wrap .title-text',
        toggleActions : 'play none none reverse',
        start : '-=600% top',
    }
})




}