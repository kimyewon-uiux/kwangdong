const headerGnb = document.querySelector('#gnb')
const header = document.querySelector('header')

headerGnb.addEventListener('mouseenter', function() {
   header.classList.add('scroll')
})
headerGnb.addEventListener('mouseleave', function() {
   header.classList.remove('scroll')
})

// 
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
// 








// header **********************************************
// 공통
document.addEventListener('mousedown',(event)=>{
  
   if(!langList.contains(event.target)){
       langList.classList.remove('active');
   }
   if(!familySite.contains(event.target)){
       familySiteList.classList.remove('active');
       familySite.classList.remove('active');
   }
   

})

// langwrap **********
const langBtn = document.querySelector('.lang-wrap button')
const langList = document.querySelector('.lang-wrap ul')

langBtn.addEventListener('click',()=>{
   langList.classList.toggle('active');
   familySite.classList.toggle('active');
})

// allmenu **********

const allmenuOpenBtn = document.querySelector('.allmenu-wrap .allmenu-open')
const allmenuCloseBtn = document.querySelector('.allmenu-wrap .allmenu-popup button')
const allmenu = document.querySelector('.allmenu-wrap .allmenu-popup')

allmenuOpenBtn.addEventListener('click', ()=>{
   allmenu.style.display = 'flex';
})
allmenuCloseBtn.addEventListener('click', ()=>{
   allmenu.style.display = 'none';
})


// main Visual *******************************************************
// const progressCircle = document.querySelector(".progress-circle .border");
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const mainStopBtn= document.querySelector('.swiper-controls-wrap .btn-stop')
const mainPlayBtn= document.querySelector('.swiper-controls-wrap .btn-play')

const mainSwiper = new Swiper('.main-swiper', {
   autoplay : {
      delay : 5000
    },
   loop :true,
   navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    
   pagination : {
      el: '.my-pagination',
      type: 'custom',
      renderCustom: function (swiper ,current, total) {
         return `<span class="">${current} </span>
         <span class=""> / ${total}</span>
         `;
      }
   },

   on: {
         
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
        autoplay: { 
         timeLeft(s, time, progress) { //프로그래스바를 다시 시작하기 위한 콜백함수
             resetProgressBar();
         }
        }
        
      }

});


function resetProgressBar() {
    progressCircle.style.animation = 'none';
    progressCircle.offsetHeight; 
    //style 프로퍼티가 반복되면서 animation 속성이 무시되는 것을 방지
    progressCircle.style.animation = 'progress 3s linear forwards';
}

mainPlayBtn.addEventListener('click', () => {
    swiper.autoplay.start();
    mainStopBtn.style.display = 'block';
    mainPlayBtn.style.display = 'none';
    resetProgressBar();
});

mainStopBtn.addEventListener('click', () => {
    swiper.autoplay.stop();
    mainStopBtn.style.display = 'none';
    mainPlayBtn.style.display = 'block';
    progressCircle.style.animation = 'none';
});

// footer **********************************************

const familySite = document.querySelector('.familysite')
const familySiteBtn = document.querySelector('.familysite button')
const familySiteList = document.querySelector('.familysite .familysite-list')

familySiteBtn.addEventListener('click',()=>{
   familySiteList.classList.toggle('active');
   familySite.classList.toggle('active');

})


// Product ***********************************************************

const productSwiper = new Swiper(".product-swiper", {
   autoplay : {
     delay : 4000
   },
   loop : true,
   slidesPerView: 'auto',
   centeredSlides : true,
   
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
 });


// RND**
const rndBgBox = document.querySelector('.rnd-wrap .bgimg img')
// const rndLiArray = Array.from(document.querySelectorAll('rnd-contents li'));
const rndLi = document.querySelectorAll('.rnd-contents li');
const rndLiImg = document.querySelectorAll('.rnd-contents li img');
const rndLiLink = document.querySelectorAll('.rnd-contents li a');

rndLiImg.forEach(tab => {
   tab.addEventListener('mouseenter',() => {
       //클릭이벤트가 발생한 탭
       rndBgBox.src = tab.src;
   })
})
// rndLiLink.forEach(tab2 => {
//     tab2.addEventListener('mouseenter',() =>{
//         rndLiLink.css('color','red')
//     })
// })
