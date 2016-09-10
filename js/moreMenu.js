var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.more_menu').click( function() {
    $('.bgimg-1').css('opacity', '0.5');
  	//move the menu screen
    $('.menu').animate({ //inside the animate method that takes two parameters
      right: "0px" //changes its left attribute to zero
    }, 300); //make it happen over 200 milliseconds

    //move the rest of the page 
    $('body').animate({
      left: "-355px"
    }, 300);
  });

  /* Then push them back */
  $('.icon-close').click( function(){
    $('.bgimg-1').css('opacity', '1');
    $('.menu').animate({
      right: "-355px"
    }, 300);

    //move the rest of the page 
    $('body').animate({
      left: "0px"
    }, 300);
  });


};


$(document).ready(main);