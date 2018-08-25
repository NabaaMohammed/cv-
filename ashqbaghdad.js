$(document).ready(function(){
    $(".anim").animate({
        left:'+=500px',
        width:'130px',
        height:'100px',
   
    },6000);
     
   
    //achievement page
     $(".facilities, .chalange, .exp, .technology" ).click(function () {
         $("html,body").animate({ scrollTop : 600 }, 1200);
     });
    
    $(".gain, .science" ).click(function () {
         $("html,body").animate({ scrollTop : 1110 });
     });
    //education in ashq baghdad
    $(".activation").click(function () {
       
         $("html,body").animate({ scrollTop : 600 }, 1200);
     });
    $(".integration").click(function () {
       
         $("html,body").animate({ scrollTop : 1050 });
     });
    $(".oxford").click(function () {
       
         $("html,body").animate({ scrollTop : 2330 });
     });
    $(".international").click(function () {
       
         $("html,body").animate({ scrollTop : 3050 });
     });
   //try to arrange
    $(".about .menu_section .nav li a.miss").click(function () {
       
         $("html,body").animate({ scrollTop : 600 }, 1200);
     });
    //end try to arrange
   $(".remove1").click(function(){
       $(this).slideUp();
      
        $("div").removeClass("loading-overlay");
       $("img[src='image/overload.jpg']").slideUp(3000);
    }); 
    //data-target="#collapseExample" 
    $(".about .nav li.kg").click(function(){
            $("body").css("background-color","#c7e0dd94");
    });
    
    
    $(".about .nav li.prep").click(function(){
            $("body").css("background-color","#fdfdeb");
    });
    
    $(".about .nav li.primary").click(function(){
            $("body").css("background-color","#eac2cd");
    });
    
     $(".about .nav li.secondary").click(function(){
            $("body").css("background-color","#f3fdf1");
    });
    
    $(".about .nav li.high").click(function(){
            $("body").css("background-color","#f7f4f7");
    });
    
    
    $(".top").click(function () {
       
         $("html,body").animate({ scrollTop : 0 },600);
     });
    
    $(".b").click(function () {
       
         $("html,body").animate({ scrollTop : 3050 });
     });
    
    // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
             $(".b").hide();
            $(".top").show()
            
        } else {
            
            $(".b").show();
            $(".top").hide()
            
           
        }
    });
    
    
    
    
});
 