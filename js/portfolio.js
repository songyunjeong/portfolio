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
    $('.html5').css('animation', 'circle90 2s linear forwards')
    $('.css3').css('animation', 'circle90 2s linear forwards')
    $('.scss').css('animation', 'circle60 1.3s linear forwards')
    $('.javascript').css('animation', 'circle60 1.3s linear forwards')
    $('.jquery').css('animation', 'circle80 1.7s linear forwards')
    $('.react').css('animation', 'circle50 1.1s linear forwards')
    $('.git').css('animation', 'circle60 1.3s linear forwards')
    $('.illustrator').css('animation', 'circle90 2s linear forwards')
    $('.photoshop').css('animation', 'circle60 1.3s linear forwards')
    $('.xd').css('animation', 'circle80 1.7s linear forwards')
  } else {
    $('.html5').css('animation', '')
    $('.css3').css('animation', '')
    $('.scss').css('animation', '')
    $('.javascript').css('animation', '')
    $('.jquery').css('animation', '')
    $('.react').css('animation', '')
    $('.git').css('animation', '')
    $('.illustrator').css('animation', '')
    $('.photoshop').css('animation', '')
    $('.xd').css('animation', '')
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