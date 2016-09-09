var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.more_menu').click( function() {
  	//move the menu screen
    $('.menu').animate({ //inside the animate method that takes two parameters
      left: "0px" //changes its left attribute to zero
    }, 200); //make it happen over 200 milliseconds

    //move the rest of the page 
    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click( function(){

    $('.menu').animate({
      left: "-285px"
    }, 200);

    //move the rest of the page 
    $('body').animate({
      left: "0px"
    }, 200);
  });


};


$(document).ready(main);