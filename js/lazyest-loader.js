var lazyest_loading=true;function lg_js_loadNext(){if(jQuery('img.lg_ajax').length){var a=jQuery('.lg_ajax:first');if(a){a.removeClass('lg_ajax');var b=lazyestimg.ajaxurl+a.attr('src').split('?')[1];a.attr('src',b)}}else{if(lazyest_loading){lazyest_loading=false;if(typeof(lazyest_slideshow)!=='undefined'){if(jQuery('.lg_slideshow').length){lg_js_slideshow()}}}}}function lg_js_loadFirst(){if(jQuery('img.lg_ajax').length){jQuery('img.lg_ajax').each(function(){jQuery(this).load(function(){lg_js_loadNext()})})}}jQuery(window).ready(function(){lg_js_loadFirst()});jQuery(window).load(function(){lg_js_loadNext()});