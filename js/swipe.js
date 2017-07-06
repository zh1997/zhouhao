
//当文档加载完之后执行
$(document).ready(function(){

	var MUS=$('#music_bg').get(0);

	touch.on('.music_btn','tap',function(){
		if(	MUS.paused){

			$(".music_btn").addClass("animated");

			MUS.play();	
		}else{
			
			$(".music_btn").removeClass("animated");

			MUS.pause();
		}
	})

	//上下滑屏效果
	
  	var curIndex = 0;//全局变量 标记第几页 在屏幕中，0 代表 第一页

    var pageNum = $('.page').length-1;   //获取页面数目
    // alert(pageNum);
       //向上滑动事件
    touch.on('.main', 'swipeup', function(e){
        	// 2 如果 索引 小于  3  的时候，执行动画，

        	//    否则 终止一切操作
        if(curIndex < pageNum){

        		//取当前屏幕中的page，执行向上动画
                
            $('.page').eq(curIndex).addClass('pageUp'); 

            $('.page').eq(curIndex).find('.dh').addClass('hide'); //当前屏幕中的page 添加hide类
            curIndex = curIndex + 1; // curIndex++  0 --- 1   索引加1

	        if(curIndex == pageNum){ //如果到了最后一页
	            $('.arrow').hide();
	        }

	        	// 此时索引+1，取后面的page，执行向上动画
            $('.page').eq(curIndex).removeClass('pageDown');  
           
            $('.page').eq(curIndex).find('.dh').removeClass('hide');
        }

           
    });

         //向下滑动事件
        touch.on('.main', 'swipedown', function(e){
            $('.arrow').show(); //显示 箭头

            if(curIndex > 0){

                $('.page').eq(curIndex).addClass('pageDown'); //当前页 向下滑动
                $('.page').eq(curIndex).find('.dh').addClass('hide');
                curIndex = curIndex - 1;  //索引减一

                $('.page').eq(curIndex).removeClass('pageUp'); //上一页 向下滑
                 $('.page').eq(curIndex).find('.dh').removeClass('hide');
            }
       });

})