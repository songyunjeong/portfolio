const tool = $('#tool')

tool.click(function() {
  $('#tool').css('cursor', 'grabbing')
  $('#bar').addClass('bar_on')
  setTimeout(() => {
    location.replace('./portfolio.html')
  }, 3000)
})