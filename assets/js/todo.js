//add event liseners to all  X spans.

function createLiElement(input){

	li = $('<li></li>');
	li.html('<span class="remove"><i class="far fa-trash-alt"></i></span>' + input);
	return li;
};


$('ul').on('click','.remove', function(event){
	
	event.stopPropagation();
	$(this).parent().fadeOut(function(){
		$(this).remove();

	});

});

//add event liseners to all  Y spans.

$('ul').on('click','li', function(event){
	$(this).toggleClass('done')

});

// add event lisener to the input
$("input[type=text]").on('keypress', function(event){
	if(event.which === 13 && $(this).val() != ""){
		let item = createLiElement($(this).val());
		console.log(item);
		$('ul').append(item);
		$(this).val("");
	};
});

//add event lisener to the plus button
$('.fa-plus-circle').on('click', function(){
	$('input').fadeToggle();
})