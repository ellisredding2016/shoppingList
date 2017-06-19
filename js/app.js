$(document).ready(function(){
	loadListNames();	
		
});

window.onload = function(){
	registerNameForm();
	registerListForm();
}

function registerNameForm(){
	$('#nameForm').submit(function(e) {
		e.preventDefault();
		var newName = $("#nameEntry").val();
		if( newName !=""){
			$('#nameList').append('<li class="nameListItem">'+ newName +'<span class="fa fa-trash-o"></span></li>');
			$('#nameEntry').val('');
			$('#title').text('Shopping List: ' + newName);
			addListName(newName);
		}
		else { alert ('Enter A List Name.'); }

		$("#nameList")
		.on("click", "li.nameListItem", function(){
			$(this).toggleClass("needed");			
			$(this).toggleClass("stroked");	
		})

		.on("mouseenter","li.nameListItem",function(){	
			$(this).toggleClass("hovered");		
		})

		.on("mouseleave","li.nameListItem",function(){
			$(this).toggleClass("hovered");
			
		})

		.on("click","li.nameListItem > .fa", function(){			
			var isRemoved = removeListName($(this).parent('.nameListItem').text());
			if(isRemoved){
				$(this).parent(".nameListItem").remove();
			}
		})
	});
}

function registerListForm(){
	$("#listForm").submit(function(e) {
		e.preventDefault();
		if($("#itemEntry").val() != ""){
			$("#shoppingList").append("<li class=\"listItem needed\">"+$("#itemEntry").val()+"<span class=\"fa fa-trash-o \"></span></li>");
			$("#itemEntry").val("");
		}
		else{ alert("The Item to Add Cannot be Blank."); }
		
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
}

function addListName(newName){
	var nameMemory = localStorage.getItem('nameList');
	nameList = new Array();
	if(nameMemory != null){
		nameList = JSON.parse(nameMemory);
		nameList.push(newName);
	}
	else {				
		nameList[0] = newName;		
	}	
	nameMemory = JSON.stringify(nameList);
	localStorage.setItem('nameList',nameMemory);
}

function removeListName(removeName){
	var nameMemory = localStorage.getItem('nameList');
	var nameList = JSON.parse(nameMemory);
	var namePosition = nameList.indexOf(removeName);
	if(namePosition>-1){
		nameList.splice(namePosition,1);		
		nameMemory = JSON.stringify(nameList);
		localStorage.setItem('nameList',nameMemory);
		return true;
	}
	else { 
		alert ("Can't Find That List.");
		return false;
	}
}

function loadListNames(){
	var nameMemory = localStorage.getItem('nameList');	
	if(nameMemory){
		var nameList = JSON.parse(nameMemory);
		for (i=0; i<nameList.length; i++){
			$('#nameList').append('<li class="nameListItem">'+ nameList[i] +'<span class="fa fa-trash-o"></span></li>');
		}
	}
	registerNameForm();	
}

