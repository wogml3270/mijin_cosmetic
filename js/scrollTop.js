// page top button

$(window).scroll(function(){
    let top = $('.page_top');
    if ($(this).scrollTop() > 2200){
      top.show();
    } else{
      top.hide();
    }
  });
  top.click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
  });