$(document).ready(function() {

	$(".mainmenu li").hover(function() {
		$(this).find(".submenu1").removeClass("hide");
	}, function() {
		$(this).find(".submenu1").addClass("hide");
	});

});