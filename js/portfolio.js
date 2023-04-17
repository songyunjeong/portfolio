// info
setTimeout(() => {
  $(".gem_info1").css("display", "none");
}, 2000);

// page_scroll(lnb_click_event)
$(".lnb a").click(function (e) {
  e.preventDefault();

  $(window).scrollTo(this.hash || 0, 1000);
});

// lnb_style(lnb click_event)
$(".lnb li").click(function () {
  $(".lnb li").removeClass("on");
  $(".lnb li").eq($(this).index()).addClass("on");
});

// lnb_style(window scroll_event)
$(window).scroll(function () {
  if ($(this).scrollTop() <= 500) {
    $(".lnb li").removeClass("on");
    $(".lnb li").eq(0).addClass("on");
  } else if ($(this).scrollTop() <= 1500) {
    $(".lnb li").removeClass("on");
    $(".lnb li").eq(1).addClass("on");
  } else if ($(this).scrollTop() <= 2500) {
    $(".lnb li").removeClass("on");
    $(".lnb li").eq(2).addClass("on");
  } else if ($(this).scrollTop() <= 3500) {
    $(".lnb li").removeClass("on");
    $(".lnb li").eq(3).addClass("on");
  }
});

// skill progress_bar(window scroll_event)
$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $(".html5").css("animation", "circle90 2s linear forwards");
    $(".css3").css("animation", "circle90 2s linear forwards");
    $(".scss").css("animation", "circle60 1.3s linear forwards");
    $(".javascript").css("animation", "circle80 1.3s linear forwards");
    $(".jquery").css("animation", "circle80 1.7s linear forwards");
    $(".react").css("animation", "circle60 1.1s linear forwards");
    $(".git").css("animation", "circle70 1.3s linear forwards");
    $(".illustrator").css("animation", "circle90 2s linear forwards");
    $(".photoshop").css("animation", "circle60 1.3s linear forwards");
    $(".xd").css("animation", "circle80 1.7s linear forwards");
  }
});

// project site_plus(click_event)
for (let i = 1; i <= 4; i++) {
  $(".project .site_img" + i).click(function () {
    $(".site_plus" + i).css("display", "block");
  });
}

$(".cancle").click(function () {
  $(".site_plus").css("display", "none");
});

// gem(click_event)
let count = 0;

for (let i = 1; i <= 12; i++) {
  $(".gem" + i).click(function () {
    $(".gem" + i).css("display", "none");
    $(".coin_box").css("display", "block");
    $(".coin_box").css("cursor", "none");
    setTimeout(() => {
      $(".coin_box").css("display", "none");
    }, 1000);

    count++;
    if (count === 12) {
      setTimeout(() => {
        $(".gem_info2").css("display", "block");
      }, 1500);
      setTimeout(() => {
        $(".gem_info2").css("display", "none");
      }, 3500);
    }
  });
}
