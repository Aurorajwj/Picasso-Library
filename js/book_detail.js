$('.button').click(function(){
	// var buttonId = '$(this).attr('id')';
	// console.log("yes");
	var buttonId = 'five';

	$('#modal-container').removeAttr('class').addClass(buttonId);
	console.log(buttonId);
	$('body').addClass('modal-active');
	document.getElementById("_page").style.display="none";
})

$('#modal-container').click(function(){
	$(this).addClass('out');
	$('body').removeClass('modal-active');
	$('#_page').removeClass('temphide');
	document.getElementById("_page").style.display="";
});