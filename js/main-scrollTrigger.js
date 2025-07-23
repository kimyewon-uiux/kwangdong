window.onload = function(){
gsap.registerPlugin(ScrollTrigger) ;
gsap.registerPlugin(ScrollToPlugin);



let sections = gsap.utils.toArray(".panel1");

function goToSection(i) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
    duration: 0.85
  });
}

ScrollTrigger.defaults({
  // markers: true
});

sections.forEach((eachPanel, i) => {
  // const mainAnim = gsap.timeline({ paused: true });

  ScrollTrigger.create({
    trigger: eachPanel,
    onEnter: () => goToSection(i)
  });

  ScrollTrigger.create({
    trigger: eachPanel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i)
  });
});














const productWrap = gsap.timeline({
    scrollTrigger : {
    trigger: '.product-wrap',
    start: '-=400 top',
    // end : '20% 20%',
    toggleActions : 'play none none reverse',
    // scrub : true, 
    // markers: true,
    // pin: true
    }
})
productWrap
    .from('.product-wrap .title-text',{xPercent : -200})
    .from('.product-wrap .swiper-navigation',{opacity : 0})
    .from('.product-wrap .more-btn',{opacity : 0})
    .from('.product-wrap .product-swiper ul',{opacity : 0})


// const rndWrap = gsap.timeline({
//     scrollTrigger : {
//     trigger: '.rnd-wrap',
//     start: 'top top',
//     end : 'bottom 20%',
//     toggleActions : 'play none none reverse',
//     // scrub : true, 
//     // markers: true,
//     pin: true
//     }
// })

// rndWrap
//     // .from('.rnd-wrap',{yPercent : +70})
//     .from('.rnd-wrap hgroup h2',{yPercent : -30, opacity : 0})
//     .from('.rnd-wrap hgroup p',{yPercent : -30, opacity : 0})
//     .from('.rnd-wrap .more-btn',{yPercent : -30, opacity : 0})
    


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


const historyBox1 = gsap.timeline({
    scrollTrigger : {
    trigger: '.history-wrap .box1',
    start: 'top top',
    // end : '20% 20%',
    toggleActions : 'play none none reverse',
    pin:true,
    scrub : 1,
    markers : true 
    }
})
historyBox1
    .from('.box1-txt',{ y : -500, duration : 5, opacity : 0,duration: 10})
    .to('.box1-txt .history-year',{x:-200, duration: 1})
    .to('.box1-txt .history-box-right',{x:200, duration: 1})
    .from('.box1 .history-img',{y:800, opacity : 0, duration: 5})

const historyBox2 = gsap.timeline({
    scrollTrigger : {
    trigger: '.history-wrap .box2',
    start: 'top top',
    // end : '20% 20%',
    toggleActions : 'play none none reverse',
    pin:true,
    scrub : 1, 
    }
})
historyBox2
    .from('.box2-txt',{ y : -500, duration : 5, opacity : 0})
    .to('.box2-txt .history-year',{x:-200, duration: 1})
    .to('.box2-txt .history-box-right',{x:200, duration: 1})
    .from('.box2 .history-img',{y:800, opacity : 0})

const historyBox3 = gsap.timeline({
    scrollTrigger : {
    trigger: '.history-wrap .box3',
    start: 'top top',
    // end : '20% 20%',
    toggleActions : 'play none none reverse',
    pin:true,
    scrub : 1, 
    }
})
historyBox3
    .from('.box3-txt',{ y : -500, duration : 5, opacity : 0})
    .to('.box3-txt .history-year',{x:-200, duration: 1})
    .to('.box3-txt .history-box-right',{x:200, duration: 1})
    .from('.box3 .history-img',{y:800, opacity : 0})

const historyBox4 = gsap.timeline({
    scrollTrigger : {
    trigger: '.history-wrap .box4',
    start: 'top top',
    // end : '20% 20%',
    toggleActions : 'play none none reverse',
    pin:true,
    scrub : 1, 
    }
})
historyBox4
    .from('.box4-txt',{ y : -500, duration : 5, opacity : 0})
    .to('.box4-txt .history-year',{x:-200, duration: 1})
    .to('.box4-txt .history-box-right',{x:200, duration: 1})
    .from('.box4 .history-img',{y:800, opacity : 0})













gsap.from('.media-wrap .title-text',{
   x : -1200, duration : .5,
    scrollTrigger : {
        trigger : '.media-wrap',
        start : '-=400 top',
        toggleActions : 'play none none reverse',
        // markers : true
    }
})
gsap.from('.media-wrap .more-btn',{
   x : 1000, duration : .5,
    scrollTrigger : {
        trigger : '.media-wrap',
        toggleActions : 'play none none reverse',
        start: '-=200 top',
    }
})
gsap.from('.media-wrap .media-contents',{
   y : 1000, duration : 1, scale : 0.1,
    scrollTrigger : {
        trigger : '.media-wrap',
        toggleActions : 'play none none reverse',
        start: '-=200 top',
    }
})




}