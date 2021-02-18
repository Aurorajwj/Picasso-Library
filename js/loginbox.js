
$(function () {
$(".dropdown").mouseover(function () {
    $(this).addClass("open");
    console.log('what fuck');
});

$(".dropdown").mouseleave(function () {
    $(this).removeClass("open");
})
})
//change login or userinfo
$(function(){
	flag = true;//是否登录状态
	if(flag){//login successfully
		$('#userinfo').toggle();
		$('.change').hide();
	}   
});

