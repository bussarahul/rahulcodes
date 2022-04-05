console.log($("a[href^='#']"));

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	console.log("in click");
	var position = $($(this).attr("href")).offset().top;
    console.log($($(this).attr("href")).offset());
	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
