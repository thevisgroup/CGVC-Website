/* ================================================================ 
This copyright notice must be untouched at all times.
Stay Put!
Copyright (c) 2009 Stu Nicholls - stunicholls.com - all rights reserved.
=================================================================== */
onload = function() {


startPos = $("#semiFixed").position().top;
divHeight = $("#semiFixed").outerHeight();
$("#placeHolder").css("height", divHeight + "px")

$(window).scroll(function (e) {
scrTop = $(window).scrollTop();


	if ((startPos-5) < scrTop) {
		if ($.browser.msie && $.browser.version <= 6 ) {
		topPos = startPos + (scrTop - startPos) +5;
		$("#semiFixed")	.css("position", "absolute")
						.css("top", topPos +"px")
						.css('zIndex', '500')
		}
		else {
		$("#semiFixed")	.css("position", "fixed")
						.css("top", "5px")
						.css("zIndex", "500")
		}
	}
	else {
		$("#semiFixed")	.css("position", "static")
	}

    });

}

