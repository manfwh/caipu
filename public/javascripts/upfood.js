(function(){
	$('#imgUploadNow').mousemove(function(ev){
		$('#imgFile').css({left:ev.offsetX-$('#imgFile').width()+10,top:ev.offsetY})
		return false;
	})
	$('#imgFile').mousemove(function(ev) {
		return false
	})

	// 添加料栏目
	$(".materials").on('click','.close span',function(ev) {
		$(this).parent().parent().parent().remove();
		//$(ev.delegateTarget).remove()
	});
	$(".materials").on('click','.col-xs-8 input',function(ev) {
		var parent = $(this).parent().parent();
		var all = parent.parent().children('.row').length - 1;
		var now = parent.index();
		// 如果当前点击的这一行是最后一行，就新添加一行
		if(now == all) {
			parent.parent().find('.addrow a').trigger('click');
		}
		//$(this).parent().parent().parent().remove();
		//$(ev.delegateTarget).remove()
	});
	// 增加一栏
	$('.materials .addrow a').click(function(){
		var html = '<div class="row form-group"><div class="col-xs-8"><input class="form-control" type="text"></div><div class="col-xs-3"><input class="form-control" type="text"></div><div class="col-xs-1"><button class="close" type="button"><span>x</span></button></div></div>'
		$(this).parent().before(html);
	})

	// 显示控件
	$('.step ol').on('mouseenter','li',function(ev) {
		$(ev.currentTarget).find('.fun-ico').removeClass('hidden')
	})
	$('.step ol').on('mouseleave','li',function(ev) {
		$(ev.currentTarget).find('.fun-ico').addClass('hidden')
	})
	// 步骤增加一栏
	$('.step .addrow a').click(function(){
		var index = $('.step li').length+1;
		var html = '';
		html += '<li class="row"><div class="col-xs-3 text-center"><div class="step-img">';
		html += '<div class="addtext"> <span class="glyphicon glyphicon-plus"></span>添加步骤图<input type="file" style="opacity:0;position:absolute"></div>';
		html += '<div class="loging" style="display:none">正在上传...</div><div class="loginv" style="display:none"><span class="glyphicon glyphicon-refresh refresh"></span>';
		html += '<img class="img-responsive" src=""></div></div></div><div class="col-xs-9"><div class="row"><div class="col-xs-1"><span class="seq text-center">'+ index +'</span></div>';
		html += '<div class="col-xs-11"><textarea class="step-dec form-control" rows="3"></textarea><span class="fun-ico hidden"><span class="glyphicon glyphicon-chevron-up"></span><span class="glyphicon glyphicon-chevron-down"></span><span class="glyphicon glyphicon-plus"></span><span class="glyphicon glyphicon-remove"></span></span></div></div></div></li>'
		$(this).parent().parent().find('ol').append(html);
		//alert(1);
	})
	// 步骤删除一行
	$('.step ol').on('click','.glyphicon-remove',function(ev) {
		$(this).parents('li').remove();
		$('.step li').each(function(index,element){
			$(this).find('.seq').text(index+1);
		});
	})
	// 步骤插入一行
	$('.step ol').on('click','.fun-ico .glyphicon-plus',function(ev) {
		var html = '';
		html += '<li class="row"><div class="col-xs-3 text-center"><div class="step-img">';
		html += '<div class="addtext"> <span class="glyphicon glyphicon-plus"></span>添加步骤图<input type="file" style="opacity:0;position:absolute"></div>';
		html += '<div class="loging" style="display:none">正在上传...</div><div class="loginv" style="display:none"><span class="glyphicon glyphicon-refresh refresh"></span>';
		html += '<img class="img-responsive" src=""></div></div></div><div class="col-xs-9"><div class="row"><div class="col-xs-1"><span class="seq text-center"></span></div>';
		html += '<div class="col-xs-11"><textarea class="step-dec form-control" rows="3"></textarea><span class="fun-ico hidden"><span class="glyphicon glyphicon-chevron-up"></span><span class="glyphicon glyphicon-chevron-down"></span><span class="glyphicon glyphicon-plus"></span><span class="glyphicon glyphicon-remove"></span></span></div></div></div></li>'
		$(this).parents('li').after(html)
		$('.step li').each(function(index,element){
			$(this).find('.seq').text(index+1);
		});
	})
	// 步骤向上一步
	$('.step ol').on('click','.glyphicon-chevron-up',function(ev) {
		//alert();
		var oLi = $(this).parents('li');
		var index = oLi.index()
		if(index > 0) {
			oLi.find('.seq').text(index);
			oLi.prev().find('.seq').text(index+1);
			oLi.after(oLi.prev())
		};
	});
	// 步骤向下一步
	$('.step ol').on('click','.glyphicon-chevron-down',function(ev) {
		//alert();
		var oLi = $(this).parents('li');
		var index = oLi.index();
		if(index < oLi.parent().children().length-1) {
			//alert(index+'/'+oLi.parent().children().length)
			oLi.find('.seq').text(index+2);
			oLi.next().find('.seq').text(index+1);
			oLi.next().after(oLi);
			//.before(oLi);
		};
	});
	// 上传步骤图
	$('.step ol').on('mousemove','.addtext',function(ev) {
		var input = $(this).find('input');
		input.css({left:ev.offsetX-input.width()+5,top:ev.offsetY-input.height()+5})
		
	})
	$('.step ol').on('mousemove','.addtext input',function(ev) {
		return false;
	})

	// 拖拽排序
	//var zIndex = 1;
	$('.step ol').on('mousedown','li',function(ev) {
		if(ev.which==1) {
			var oldX = $(this).offset().left,
		        oldY = $(this).offset().top,
		    	x = ev.pageX - oldX,
		    	y = ev.pageY - oldY,
		    	i = -1,
		    	oLi = $(this),
		    	li = '<li class="row placeholder" style="visibility:hidden;height:74px"></li>';
		    $(this).after(li);
			$(this).css({position:'absolute',width:670,height:74});
			$(document).mousemove(function(ev) {
				//console.log(oLi.index())
				oLi.offset({left:ev.pageX-x,top:ev.pageY-y});
				$('.step ol li').each(function(index, element){
					//console.log($(this).attr('class'))
					if(!/placeholder/.test($(this).attr('class'))){
						var result = mouseupSort(oLi,$(this))
						if( result == 1){
							//$(this).after($('.step .placeholder'))
							oLi.before($(this))
							i = index;
						}else if (result == -1) {
							$('.step .placeholder').after($(this))
							i = index;
						} 
					}
					//$('.first').replaceAll('.third');
				})
				return false;
			})
			$(document).mouseup(function(ev) {
				$(this).unbind('mousemove');
				$(this).unbind('mouseup');
				oLi.siblings('.placeholder').remove();
				if(i>-1){
					$('.step li').eq(i).after(oLi);
					liSort()
				} else{
					oLi.offset({left:oldX,top:oldY})
				};
				oLi.attr('style','cursor:move');
			})
		}
		
	})
	// 重新调整序号
	function liSort(){
		$('.step li').each(function(num) {
			$(this).find('.seq').text(num+1);
		})
	}
	//判断是否要排序 
	function mouseupSort(obj1,obj2) {
		var offset1 = obj1.offset(),
			offset2 = obj2.offset(),
			index1 = obj1.index(),
			index2 = obj2.index();
		var isMaxSize = (offset1.left - offset2.left) > -100;
		if(offset1.top > offset2.top && index2 > index1  && isMaxSize) {
			console.log(len1)
			return 1 
		} else if(offset1.top < offset2.top && index2 < index1 && isMaxSize){
			console.log(2)
			return -1
		} else{
			return false;
		}
	}
	function stopPropagation(ev){
		ev.stopPropagation();
		
	}
	$('.step ol').on('mousedown','.step-dec',function(ev){
		ev.stopPropagation();
		var li = $(this).parents('li')
		if($(this).attr('class').indexOf('step-dec') > -1 ) {
			if(li.index()==li.siblings().length) {
				li.after(li.clone());
				liSort();
			}
		}
	});
	$('.step ol').on('mousedown','.addtext input',stopPropagation);

	$('.step ol').on('mousedown','.glyphicon-chevron-up',stopPropagation);
	$('.step ol').on('mousedown','.glyphicon-chevron-down',stopPropagation);
	$('.step ol').on('mousedown','.glyphicon-plus',stopPropagation);
	$('.step ol').on('mousedown','.glyphicon-remove',stopPropagation);



	// 添加标签
	$('.tag-box').on('click',function(ev) {
		ev.stopPropagation();
		var oText = $('.tag-box').find('.addlabel');
		if(oText.attr('class').indexOf('hid') > -1) {
			oText.removeClass('hid').focus();
		} else {
			oText.addClass('hid');
			if( oText.val()!== '') {
				oText.before(addLabel(oText.val(), getValues(oText)));
				oText.val('');
			}
		}
		oText.click(function(ev) {
			ev.stopPropagation();
		})
		
	})
	$('.tag-box').on('click','.clos',function(ev) {
		ev.stopPropagation();
		$('.tag-box').find('.addlabel').val('').removeClass('hid').focus();
		$(this).parents('.label').remove();
	})
	$('.tag-box .addlabel').on('blur',function() {
		if($(this).val() !==''){
			$(this).before(addLabel($(this).val(),getValues($(this))));
			$(this).val('');
		}
		$(this).addClass('hid');
		
	})
	// 获取当前所有的标签名字，返回数组
	function getValues(allLabel){
		var arr = [];
		allLabel.siblings().each(function(i){
			arr[i] = $(this).find('input').val();	
		})
		return arr;
	}
	// addLabel(val, [,arr])
	// 增加标签，返回html
	// val:要增加的标签名字
	// arr：可选，不重复添加arr里的value;
	function addLabel(val, arr) {
		var html = '',
		    b = true;
		$.each(val.replace(/<[^>]*>/g,'').split(' '),function(index,value){
			if(arr) {
				if(arr.indexOf(value) > -1) {
					if(b){
						alert('不能重复添加');
					};
					b = false;
					return
				}
			}
			if(value != ''){
				html += '<span class="label label-danger">'+ value +'<input type="hidden" name="tagname[]" value="'+value+'">\n';
				html += '<a class="clos" href="javascript:;">x</a> </span>';
			}
		})
		return html;
	}
	
	


    // 上传图片
    $('#imgFile').change(function(){
    	var file = this.files;
    	console.log(file[0])
    	if(!/^.*[^a][^b][^c]\.(?:png|jpg|bmp|gif|jpeg)$/.test(file[0].name)){
    		alert('请上传图片');
    		return;
    	}
    	if(file.length){
    		var data = new FormData();
    		console.log(file[0])
    		data.append('uploadFile',file[0]);
    		XHRupFile('/upfood',data,function(data,code){
    			$('.loading1').css('display','none');
    			$('.bigimg .load').css('display','block').find('img').attr('src','/images/uploads/'+data)
    		});
    	}
    	
    })
    $('.bigimg .load').find('.refresh').click(function(){
    	$('#imgFile').trigger('click');
    })
    function XHRupFile(url,data,cb) {
    	var xhr = $.ajax({
    		url:url,
    		data:data,
    		type:'POST',
    		cache:false,
    		contentType:false,
    		processData:false,
    		xhr:xhr_provider
    	});
    	xhr.done(function(data,textStatus,jqXHR){
    		cb(data,textStatus);
    	});
    	xhr.fail(function(jqXHR,textStatus,errorThrow){
    		cb(textStatus+errorThrow)
    	})
    }
    function xhr_provider (){
		var newxhr = $.ajaxSettings.xhr();
		var upload = newxhr.upload;
		upload.onloadstart = function() {
			console.log('开始上传');
			$('.bigimg .bg').css('display','none');
			$('.loading1').css('display','block');
		}
		upload.onprogress = function(e) {
			console.log('正在上传')
		}
		upload.onload = function() {
			console.log('上传结束')
		}
		return newxhr;
	}


})()


