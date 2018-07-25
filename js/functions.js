//CREATING THE PARALLAX EFFECT, THE SCROLLING SPEED IS DEVIDED TO 4.6
var pContainerHeight = $('.yawa').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.name').css({
      'transform' : 'translate(0px, '+ wScroll /4.6 +'%)'
    });
  }

  });

  //CREATING THE SMOOTH SCROLLING WHILE CLICKING A CERTAIN LINK AND IT WILL GENTLY TAKE YOU TO A CERTAIN AREA OF THE WEBSITE

  var jump=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target).offset().top
       //scrolldelay: 2 seconds
     },1000,function()
       {
               //attach the hash (#jumptarget) to the pageurl
               location.hash = target;
       });

}

$(document).ready(function()
{
       $('a[href*=#]').bind("click", jump);
       return false;
});
