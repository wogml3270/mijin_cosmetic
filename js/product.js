$(function(){
    const $prevBtn = $('.productBtn > .prevBtn');
    const $nextBtn = $('.productBtn > .nextBtn');

    const $Current = $('.productBtn > .current');
    let nowIdx = 0;

    $prevBtn.on('click', function(evt){
        evt.preventDefault();

        if(nowIdx > 0){
            nowIdx --;
        } else {
            nowIdx = 1;
        }

        $Current.text(nowIdx + 1);
    })

    $nextBtn.on('click', function(evt){
        evt.preventDefault();

        if(nowIdx < 1){
            nowIdx ++;
        } else {
            nowIdx = 0;
        }

        $Current.text(nowIdx + 1);
    })


})