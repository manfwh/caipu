





(function(){
	// 热门菜谱鼠标移入效果
	$('.hit li').mouseover(moveChange)
	function moveChange(){
		if($(this).attr('class')=='active'){
			return
		} else{
			$('.hit li').removeClass('active');
			$(this).addClass('active')
		}
	}
})()




