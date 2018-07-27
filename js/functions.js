//CREATING THE PARALLAX EFFECT, THE SCROLLING SPEED IS DEVIDED TO 4.6
var pContainerHeight = $('.yawa').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('img').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
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
       //scrolldelay: 1 second
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

//THIS IS FOR THE COLLAPSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//BAR GRAPH
$('.horizontal .progress-fill span').each(function(){
  var percent = $(this).html();
  $(this).parent().css('width', percent);
});
