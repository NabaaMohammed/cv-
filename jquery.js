$(document).ready(function()
{
	$('.carousel').carousel(
	{
		interval:6000
	});
	//show color box
	 $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
	  
    // Change Theme Color On Click
    
    var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#F9E79F").end()
    
           .eq(1).css("backgroundColor", "#eca7bf").end()
    
           .eq(2).css("backgroundColor", "#cbf39e").end()
    
           .eq(3).css("backgroundColor", "#d4bdbd");
        
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
	$(window).load(function()
	{
		$(".loading-overlay").fadeOut(1000);
	});
	 // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });	
		
});