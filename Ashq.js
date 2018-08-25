            (function($) {
                $(document).ready(function() {
                    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $(this).parent().siblings().removeClass('open');
                        $(this).parent().toggleClass('open');
                    });
                });
            })(jQuery);
       
       
            (function($) {
             $.support.placeholder = ('placeholder' in document.createElement('input'));
            })(jQuery);

            //fix for IE7 and IE8
            $(function() {
             if (!$.support.placeholder) {
                 $("[placeholder]").focus(function() {
                     if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
                 }).blur(function() {
                     if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
                 }).blur();

                 $("[placeholder]").parents("form").submit(function() {
                     $(this).find('[placeholder]').each(function() {
                         if ($(this).val() == $(this).attr("placeholder")) {
                             $(this).val("");
                         }
                     });
                 });
             }
            });
        
            $(document).ready(function() {
                /*
                * Set watermarks on input fields; IE8 & IE9 don't support placeholders
                * This routine extracts the placeholder text from the HTML input statements and 
                *    passes it to the jQuery watermark plugin
                * so we don't have to separately maintain the watermark text
                */
                $('[placeholder]').each(function() {
                    var placeholderText = $(this).attr('placeholder');
                    $(this).watermark(placeholderText);
                });
            });
        
            $(document).ready(function() {
                $("#slider").owlCarousel({

                    // Most important owl features
                    items: 6,
                    itemsCustom: false,
                    itemsDesktop: [1199, 5],
                    itemsDesktopSmall: [980, 5],
                    itemsTablet: [768, 4],
                    itemsTabletSmall: [667, 4],
                    itemsMobile: [479, 3],
                    singleItem: false,
                    itemsScaleUp: false,

                    //Basic Speeds
                    slideSpeed: 800,
                    paginationSpeed: 800,
                    rewindSpeed: 1000,

                    //Autoplay
                    autoPlay: false,
                    stopOnHover: true,

                    // Navigation
                    navigation: false,
                    navigationText: ["prev", "next"],
                    rewindNav: true,
                    scrollPerPage: true,

                    //Pagination
                    pagination: true,
                    paginationNumbers: false

                });
                $("#slider-2").owlCarousel({

                    // Most important owl features
                    items: 6,
                    itemsCustom: false,
                    itemsDesktop: [1199, 5],
                    itemsDesktopSmall: [980, 5],
                    itemsTablet: [768, 4],
                    itemsTabletSmall: [667, 4],
                    itemsMobile: [479, 3],
                    singleItem: false,
                    itemsScaleUp: false,

                    //Basic Speeds
                    slideSpeed: 800,
                    paginationSpeed: 800,
                    rewindSpeed: 1000,

                    //Autoplay
                    autoPlay: false,
                    stopOnHover: true,

                    // Navigation
                    navigation: false,
                    navigationText: ["prev", "next"],
                    rewindNav: true,
                    scrollPerPage: true,

                    //Pagination
                    pagination: true,
                    paginationNumbers: false

                });
                $("#slider-wide").owlCarousel({

                    // Most important owl features
                    items: 4,
                    itemsCustom: false,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [1024, 3],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [667, 3],
                    itemsMobile: [479, 2],
                    singleItem: false,
                    itemsScaleUp: false,

                    //Basic Speeds
                    slideSpeed: 800,
                    paginationSpeed: 800,
                    rewindSpeed: 1000,

                    //Autoplay
                    autoPlay: false,
                    stopOnHover: true,

                    // Navigation
                    navigation: false,
                    navigationText: ["prev", "next"],
                    rewindNav: true,
                    scrollPerPage: true,

                    //Pagination
                    pagination: true,
                    paginationNumbers: false

                });
                $("#slider-wide-2").owlCarousel({

                    // Most important owl features
                    items: 4,
                    itemsCustom: false,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [1024, 3],
                    itemsTablet: [768, 3],
                    itemsTabletSmall: [667, 3],
                    itemsMobile: [479, 2],
                    singleItem: false,
                    itemsScaleUp: false,

                    //Basic Speeds
                    slideSpeed: 800,
                    paginationSpeed: 800,
                    rewindSpeed: 1000,

                    //Autoplay
                    autoPlay: false,
                    stopOnHover: true,

                    // Navigation
                    navigation: false,
                    navigationText: ["prev", "next"],
                    rewindNav: true,
                    scrollPerPage: true,

                    //Pagination
                    pagination: true,
                    paginationNumbers: false

                });
            });
       
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
          m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-75000-1', 'auto');
            ga('send', 'pageview');
            ga('require', 'ecommerce');

       