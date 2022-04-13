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

$(".navbar-toggler").click(function(e) {
	e.preventDefault();
	$(this).toggleClass('collapsed');
	var ariaEx = JSON.parse($(this).attr('aria-expanded'));
	$(this).attr('aria-expanded', !ariaEx); 
	var datatarget = $(this).attr('data-target');
	console.log(datatarget);
	$(datatarget).toggleClass('show');
})
