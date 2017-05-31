$(document).ready(function() {

//------------transition from search view to main view-------------------------------
$(".init").on("click", function (event){
	event.preventDefault();

	$("#searchContainer").css("opacity", "0");
	
	var showMain =setTimeout (function(){
		$("header").css("box-shadow", "0 0 5px");
	}, 1000)

	var showMain =setTimeout (function(){
		$("#headerContainer").css("opacity", "1");
		$("#mainContainer").css("opacity", "1");
		$("footer").css("opacity", "1");
		$("#searchContainer").css("position", "absolute");
	}, 2000)
	
	
})

});