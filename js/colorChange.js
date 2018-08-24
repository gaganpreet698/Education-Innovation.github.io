$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 90) {
        $("#nav-head").css("background" , "#24b6c8");
        $("#nav-head").css("border-bottom-left-radius" , "25px ");
        $("#nav-head").css("border-bottom-right-radius" , "25px ");
       
		
		 
      }

      else{
          $("#nav-head").css("background" , "transparent");   
          $("#nav-head").css("border-bottom-left-radius" , "0px");   
		  $("#nav-head").css("border-bottom-right-radius" , "0px ");
		  
      }
  })
})