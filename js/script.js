$(document).ready(function(){
    // onload page
    $('#main_header').load('main_header.html');
    $('#sub_header').load('sub_header.html');
    $('#skincare_menu').load('skincare_menu.html');
    $('#footer').load('footer.html');

    function clickBtnSlide(){
        $('.slide_btn_num span').click(function(){
            let slide_id = $(this).attr('data-name');

            $('.slide_btn_num span').removeClass('slide');
            $('.main_slide').removeClass('slide');

            $(this).addClass('slide');
            $('#' + slide_id).addClass('slide');
        });
    }

    let now = 0; // 첫번째 index 값
    let img = 3; // 마지막 index 값
    let interval = 5000; // 5초의 시간

    $('.main_slide').eq(0).siblings().hide();

    setInterval(nextFadeSlide, interval);

    function nextFadeSlide(){
        if (now == img){
            $('.slide_btn_num span').eq(now).removeClass('slide');
            $('.slide_btn_num span').eq(0).addClass('slide');
            $('.main_slide').eq(now).fadeOut(1000);
            $('.main_slide').eq(0).fadeIn(1000);

            now = 0;
        } 
        else{
            $('.slide_btn_num span').eq(now + 1).addClass('slide');
            $('.slide_btn_num span').eq(now).removeClass('slide');
            $('.main_slide').eq(now).fadeOut(1000);
            $('.main_slide').eq(now + 1).fadeIn(1000);

            now++;
        }
    }
    function prevFadeSlide(){
        if (now == img){
            $('.slide_btn_num span').eq(now).addClass('slide');
            $('.slide_btn_num span').eq(3).removeClass('slide');
            $('.main_slide').eq(now).fadeIn(1000);
            $('.main_slide').eq(3).fadeOut(1000);

            now = 3;
        } 
        else{
            $('.slide_btn_num span').eq(now + 1).removeClass('slide');
            $('.slide_btn_num span').eq(now).addClass('slide');
            $('.main_slide').eq(now).fadeIn(1000);
            $('.main_slide').eq(now + 1).fadeOut(1000);

            now--;
        }
    }

    $('.prev').click(function(){
        prevFadeSlide();
    });
    $('.next').click(function(){
        nextFadeSlide();
    });

    // product menu mobile
    let productMenu = $('.sales > article');
    let toggleMobileBtn = $('.product_mobile_btn');
    let pline = $('.pline');
    let maskline = $('.maskline');
    let xbtn = $('.xbtn');
  
    toggleMobileBtn.click(function(){
      productMenu.animate({'left': '0'});
    });
    xbtn.click(function(){
      productMenu.animate({'left': '-182px'});
    });
    pline.click(function(){
      productMenu.animate({'left': '-182px'});
    });
    maskline.click(function(){
      productMenu.animate({'left': '-182px'});
    });

});

// swiper script

var swiper = new Swiper(".mySwiper01", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 1,
    breakpoints: { //반응형 조건 속성
      640: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 3,
      },
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
        delay: 3000,
    },
    speed: 500,
  });

var swiper = new Swiper(".mySwiper02", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 1, //위 slidesPerview 여백
    breakpoints: { //반응형 조건 속성
      640: { //640 이상일 경우
        slidesPerView: 1, //레이아웃 2열
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
      900: { //900 이상일 경우
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 1,
      },
    },
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
});
