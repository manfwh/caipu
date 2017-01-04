(function(){

	// 登陆/注册弹出框
	$('#register').click(popup)
	$('#login').click(popup)
	function popup(ev){
		if($(ev.target).attr('id') == 'login'){
			$('#bottomBtn').text('登录')
			$('#confirm').css('display','none')
			$('#modal h4').text('用户登录')
		}else{
			$('#bottomBtn').text('注册')
			$('#confirm').css('display','block')
			$('#modal h4').text('用户注册')
		}
		$('#modal').modal('show')
	}
})()