/*$(document).ready(function(){
	// плавное перемещение страницы к нужному блоку
	$(".go_to").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});*/
$(".go_to").click(function(){
$("html, body").animate({scrollTop: $("header").height()+ 835 },"slow");

return false;});
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      nav:true,
     items:1,
      dots:true,
      loop:true
      
  });
});

$(document).ready(function(){
  $(".third_slider").owlCarousel({
      nav:true,
     items:1,
      dots:true,
      loop:true
      
  });
});

