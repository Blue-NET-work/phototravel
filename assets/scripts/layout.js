(function($) { "use strict";
	
	$('header .navbar-nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('header').parallax("50%", 0.1);
	
	
	$('#stat1').circliful();
	$('#stat2').circliful();
	$('#stat3').circliful();
	$('#stat4').circliful();
	
	$("#projects .filter").on("click",function(e){e.preventDefault();});
	
	$('#projects').mixItUp();

})(jQuery);