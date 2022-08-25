$(function(){
    const $mainRight = $(".main_content01_right > div > img");

    // $mainRight.on('click', function(){
    //     alert('클릭되었습니다.');
    // })

    const $scrollTop = $('')

    let nowIdx = 0;

    $(window).scroll(function(){
        $mainRight.each(function(i){
            
            let rightElement = $(this).offset().top = $(this).outerHeight();
            let bottomWin = $(window).scrollTop() + $(window).height();

            if( bottomWin > rightElement){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
        })
    })

})