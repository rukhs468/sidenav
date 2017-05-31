$(document).ready(function(){
  var sidenav = false;

  $('#open').click(function(){
    sidenav = !sidenav
    if(sidenav){
      $('.sidenav').css({
        'visibility':'visible',
        'opacity':1,
        'height':'100vh'
      });
    }else {
      $('.sidenav').css({
        'visibility':'hidden',
        'opacity':0,
        'height':'0px'
      });
    }
  });
});
