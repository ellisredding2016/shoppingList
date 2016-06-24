$(document).ready(function(){

	$("#plus").click(function(){
		
		var neededItems = parseInt($("#neededBadge").text());
		var newItem = $("#newItem").val();

		console.log(neededItems)
		neededItems++;

		$("#neededBadge").text(neededItems);

		$("#neededList").append("<li class='list-group-item'> <span class='glyphicon glyphicon-unchecked'></span>"+ newItem + "</li>");
	});


	$("#ok").click(function(){
		var inCartItems = parseInt($("#inCartBadge").text());
		var neededItems = parseInt($("#neededBadge").text());
		

	});

	$("#minus").click(function(){
		
	});

	$("#needed").on('click', 'li', function(e){
		//alert("click li");
		$(e).children("li").toggleClass("strike");
	});

	$("span").click(function(){
		alert("click span");
	});

})