$(document).ready(function(){
	$("#listForm").submit(function(e) {
		e.preventDefault();
		if($("#itemEntry").val() != ""){
			$("#shoppingList").append("<li class=\"listItem needed\">"+$("#itemEntry").val()+"<span class=\"fa fa-trash-o \"></span></li>");
			$("#itemEntry").val("");
		}
		else{
			alert("The Item to Add Cannot be Blank.")
		}
	});


	$("#shoppingList")

	.on("click", ".listItem", function(){
		$(this).toggleClass("needed");			
		$(this).toggleClass("stroked");	
	})

	.on("mouseenter",".listItem",function(){	
		$(this).toggleClass("hovered");		
	})

	.on("mouseleave",".listItem",function(){
		$(this).toggleClass("hovered");
		
	})

	.on("click",".listItem > .fa", function(){
		$(this).parent(".listItem").remove();
	})
});

//fa-trash-o