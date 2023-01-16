// lnb click_event(page_scroll)
$('.lnb a').click(function(e) {
  e.preventDefault();

  $(window).scrollTo(this.hash || 0, 1000)
})

// lnb click_event(lnb_style)
$('.lnb li').click(function() {
  $('.lnb li').removeClass('on')
  $('.lnb li').eq($(this).index()).addClass('on')
})

// window scroll_event(lnb_style)
$(window).scroll(function() {
  if($(this).scrollTop() == $('.profile').offset().top) {
    $('.lnb li').removeClass('on')
    $('.lnb li').eq(0).addClass('on')
  } else if($(this).scrollTop() <= $('.skills').offset().top) {
    $('.lnb li').removeClass('on')
    $('.lnb li').eq(1).addClass('on')
  } else if($(this).scrollTop() <= $('.project').offset().top) {
    $('.lnb li').removeClass('on')
    $('.lnb li').eq(2).addClass('on')
  } else if($(this).scrollTop() <= $('.contact').offset().top) {
    $('.lnb li').removeClass('on')
    $('.lnb li').eq(3).addClass('on')
  }
})

// skill progress_bar scroll_event
$(window).scroll(function() {
  if($(this).scrollTop() > 500) {
    $('.html5').css('background', 'conic-gradient(#76D2CF 90%, #F2F2F2 0% 100%)')
  }
})

// project site_plus click_event
for(let i=1; i<=4; i++) {
  $('.project .site_img' + i).click(function() {
    $('.site_plus'+ i).css('display', 'block')  
  })  
}

$('.cancle').click(function() {
  $('.site_plus').css('display', 'none')
})

// gem click_event
for(let i=1; i<=12; i++) {
  $('.gem' + i).click(function() {
    $('.gem' + i).css('display', 'none')
    $('.coin_box').css('display', 'block')
    $('.coin_box').css('cursor', 'none')
    setTimeout(() => {
      $('.coin_box').css('display', 'none')
    }, 1000);
  })
}