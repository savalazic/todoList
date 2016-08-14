$('ul').on('click', 'li', function(){ // UL IS ON THE PAGE WHEN ITS LOADED, BUT SOME LIs ARENT'T, SO WE USE IT LIKE THIS
	$(this).toggleClass('completed');
	// if($(this).css('color') === 'rgb(128, 128, 128)') {
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: 'gray',
	// 		textDecoration: 'line-through'
	// 	});
	// }
});

$('ul').on('click', 'span', function(event){ // UL IS ON THE PAGE WHEN ITS LOADED, BUT SOME SPANs ARENT'T, SO WE USE IT LIKE THIS

	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});

	event.stopPropagation(); // stop bubbling!
});

$('input[type="text"]').on('keypress', function(event){

	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
	}
});

$('.fa-plus').on('click', function(){
	$('input[type="text"]').fadeToggle();
});
