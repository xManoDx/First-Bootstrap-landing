$(".panoramasBtn").click(function() {
	$(".all").fadeOut(300);
	setTimeout(function(){
		$(".all").removeClass("col-sm-3").removeClass("col-6");
	}, 300);

	setTimeout(function(){$(".panoramas").addClass("col-6").addClass("col-sm-3").fadeIn(300);
	}, 300);
});

$(".portraitsBtn").click(function() {
	$(".all").fadeOut(300);
	setTimeout(function(){
		$(".all").removeClass("col-sm-3").removeClass("col-6");
	}, 300);
	setTimeout(function(){$(".portraits").addClass("col-6").addClass("col-sm-3").fadeIn(300);
	}, 300);
	
});

$(".macroBtn").click(function() {
	$(".all").fadeOut(300);
	setTimeout(function(){
		$(".all").removeClass("col-sm-3").removeClass("col-6");
	}, 300);
	setTimeout(function(){$(".macro").addClass("col-6").addClass("col-sm-3").fadeIn(300);
	}, 300);
	
});

$(".journalBtn").click(function() {
	$(".all").fadeOut(300);
	setTimeout(function(){
		$(".all").removeClass("col-sm-3").removeClass("col-6");
	}, 300);
	setTimeout(function(){$(".journal").addClass("col-6").addClass("col-sm-3").fadeIn(300);
	}, 300);
	
});

$(".allBtn").click(function() {
	$(".all").fadeOut(300);
	setTimeout(function(){
		$(".all").removeClass("col-sm-3").removeClass("col-6");
	}, 300);
	
	setTimeout(function(){
		$(".all").addClass("col-sm-3").addClass("col-6").fadeIn(300);
	}, 300);
	
});