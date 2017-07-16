$(document).ready(function() {

	// Navigation
	$("a.navitem").on("click", function(e) {
		var sectionId = $(e.currentTarget).attr("href");
		
		$("html, body").animate({
			scrollTop: $(sectionId).offset().top
		}, 200);
	});
});