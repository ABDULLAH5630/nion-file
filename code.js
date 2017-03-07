$(document).ready(function () {




    new WOW().init();


    //   recent-work section

    $("#all").click(function(){
        $("div").filter("*").show(1000);
    });
    
    $("#desi").click(function(){
        $("div").filter(".demo-box").hide(1000);
        $("div").filter(".desi").show(1000);
    });
    
    $("#deve").click(function(){
        $("div").filter(".demo-box").hide(1000);
        $("div").filter(".deve").show(1000);
    });
    
    $("#phot").click(function(){
        $("div").filter(".demo-box").hide(1000);
        $("div").filter(".phot").show(1000);
    });


//    menu hidden section
    
    $("#click-menu").click(function(){
        $("#bar-one").toggleClass("barone");
        $("#bar-two").toggleClass("bartwo");
        $("#bar-three").toggleClass("barthree");
        $("#menu.left").toggleClass("menuvisible");
    });
    
    
    //    menu scroll top fixed

    $(window).scroll(function(){
        var posi = $(document).scrollTop();
        if(posi>300){
            $("#menu-section").removeClass("simple");
            $("#menu-section").addClass("fixedmenu");
//            $("#click-menu").addClass("icon-fixed");
        }
        
        else{
            $("#menu-section").removeClass("fixedmenu");
            $("#menu-section").addClass("simple");
//            $("#click-menu").removeClass("icon-fixed");
        }
    });


    
    $('.counter').counterUp({
    delay: 10,
    time: 1500
});
    
    
    $('#top-prallax').parallax({imageSrc: 'bg.jpg'});
    $('#numbering-section').parallax({imageSrc: 'bg.jpg'});
    $('#comment-section').parallax({imageSrc: 'testi.jpeg'});
    
    
    
    
    
    $('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});



}); 