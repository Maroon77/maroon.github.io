//Nanjing China web site JavaScript Document
//2014-05
//author：chenyajun
//TRS copyright

/*
*author：cyj
*product：专题集锦scroll效果
*date：2014-05-04
*/
var sh;
preLeft=0; currentLeft=0; stopscroll=false; getlimit=0;preTop=0; currentTop=0;
function scrollLeft()
{
	var marquees = document.getElementById("marquees")
	if(stopscroll==true) return;
	preLeft=marquees.scrollLeft;
	marquees.scrollLeft+=2;
	if(preLeft==marquees.scrollLeft){
	}
}
function scrollRight()
{
	var marquees = document.getElementById("marquees")
	if(stopscroll==true) return;
	preLeft=marquees.scrollLeft;
	marquees.scrollLeft-=2;
	if(preLeft==marquees.scrollLeft)
	{
		if(!getlimit)
		{
			marquees.scrollLeft=templayer.offsetWidth*2;
			getlimit=marquees.scrollLeft;
		}
		marquees.scrollLeft-=1;
	}
}
function Left()
{
	stopscroll = false;
	sh = setInterval("scrollLeft()",1);
}
function Right()
{
	stopscroll = false;
	sh = setInterval("scrollRight()",1);
}
function StopScroll()
{
	stopscroll = true;
	clearInterval( sh );
}



/*
*author：cyj
*product：友情链接效果
*date：2014-05-04
*/
//友情链接
  var menu = ['menu_1','menu_2','menu_3','menu_4','menu_5','menu_6','menu_7'];
  var arra = ['div_1','div_2','div_3','div_4','div_5','div_6','div_7'];
  function show_div(id){
	  if(id==1){
		  for(var i = 1; i < arra.length; i++){
			  document.getElementById(arra[i]).style.display = 'none';
			  document.getElementById(menu[i]).className = 'yqlj';
		  }
	  }else{
		  var classname = document.getElementById('menu_' + id).className;
		  for(var i = 1; i < arra.length; i++){
			  document.getElementById(arra[i]).style.display = 'none';
			  document.getElementById(menu[i]).className = 'yqlj';
		  }
		  if(classname=="yqlj"){
			  document.getElementById('div_' + id).style.display = '';
			  document.getElementById('menu_' + id).className = 'yqlj2';
		  }
	  }
  }
					
					
//Jquery 框架效果
					
$(document).ready(function() {
	
	
/*
*author：cyj
*product：刷新网页过3秒展开第一个导航效果
*date：2014-05-08
*/	
	int=setInterval(Show_njkx,2000);
	function Show_njkx() {  //展示第一个“南京快讯”
		$("#ibar_nav1").addClass
		("menu_1_hover").removeClass("menu_1");
		$("#i_nav_pad1").stop(true,true).slideDown(1000);
	}   

/*
*author：cyj
*product：头部导航效果
*date：2014-05-08
*/	
 var index = 0;
 $('.nav_ul li').mouseover(function () {
	 var index = $(this).index();
	 index=index+1;
	 Show_pad(index);
 });
 function Show_pad(id){
	for(var i=1;i<=7;i++){
		if(i==id){
			clearInterval(int);	
			$("#ibar_nav"+id).addClass("menu_"+id+"_hover").removeClass("menu_"+id);
			$("#i_nav_pad"+id).stop(true,true).slideDown(1000);
		}
		else{
			$("#ibar_nav"+i).addClass("menu_"+i).removeClass("menu_"+i+"_hover");
			$("#i_nav_pad"+i).stop(true,true).slideUp(0);
		}
	}//end for
 }



//鼠标离开后消失的代码

/* var num = 0;
 $('.nav_ul li').mouseout(function () {
	 var num = $(this).index();
	 num=num+1;
	 Hide_pad(num);
 });
 function Hide_pad(id){
	$("#i_nav_pad"+id).mouseout(function(){
		$("#ibar_nav"+id).addClass("menu_"+id).removeClass("menu_"+id+"_hover");
		$("#i_nav_pad"+id).stop(true,true).slideUp(3000);
	});
 }*/
	
		
/*
*author：cyj
*product：信息排行效果
*date：2014-05-06
*/	
	$("#ph_isShow1").click(function(){
		var aClass = $("#ph_isShow1").hasClass("i_hidden");
		if(aClass){
			$("#ph_isShow1").removeClass("i_hidden");
			$("#ph_title1").removeClass("no_hover");
			$("#ph_conPad1").slideDown("slow");
			if($("#ph_isShow2").hasClass("i_hidden")){
			}else{
				$("#ph_isShow2").addClass("i_hidden");
				$("#ph_title2").addClass("no_hover");
				$("#ph_conPad2").slideUp("slow");	
			}
			if($("#ph_isShow3").hasClass("i_hidden")){
			}else{
				$("#ph_isShow3").addClass("i_hidden");
				$("#ph_title3").addClass("no_hover");
				$("#ph_conPad3").slideUp("slow");	
			}
		}
	});
	
	$("#ph_isShow2").click(function(){
		var aClass = $("#ph_isShow2").hasClass("i_hidden");
		if(aClass){
			$("#ph_isShow2").removeClass("i_hidden");
			$("#ph_title2").removeClass("no_hover");
			$("#ph_conPad2").slideDown("slow");
			if($("#ph_isShow1").hasClass("i_hidden")){
			}else{
				$("#ph_isShow1").addClass("i_hidden");
				$("#ph_title1").addClass("no_hover");
				$("#ph_conPad1").slideUp("slow");	
			}
			if($("#ph_isShow3").hasClass("i_hidden")){
			}else{
				$("#ph_isShow3").addClass("i_hidden");
				$("#ph_title3").addClass("no_hover");
				$("#ph_conPad3").slideUp("slow");	
			}
		}
	});
	
	$("#ph_isShow3").click(function(){
		var aClass = $("#ph_isShow3").hasClass("i_hidden");
		if(aClass){
			$("#ph_isShow3").removeClass("i_hidden");
			$("#ph_title3").removeClass("no_hover");
			$("#ph_conPad3").slideDown("slow");
			if($("#ph_isShow1").hasClass("i_hidden")){
			}else{
				$("#ph_isShow1").addClass("i_hidden");
				$("#ph_title1").addClass("no_hover");
				$("#ph_conPad1").slideUp("slow");	
			}
			if($("#ph_isShow2").hasClass("i_hidden")){
			}else{
				$("#ph_isShow2").addClass("i_hidden");
				$("#ph_title2").addClass("no_hover");
				$("#ph_conPad2").slideUp("slow");	
			}
		}
	});
	
/*
*author：chenyj
*product：搜索value效果
*date：2014-05-06
*/		
	$("#searchword").focus(function(){
		this.value="";
	});
	
	
	
/*
*author：chenyj
*product：鼠标hover边框渐变出现的效果
*date：2014-05-09
*/	
  $(document).ready(function(){
	  //$('a.add_border1').borderEffect();
	  $('a.add_border1').borderEffect({borderColor : '#ffffff'});
	  $('a.add_border2').borderEffect({borderColor : '#ffffff'});
	  $('a.add_border3').borderEffect({borderColor : '#ffffff'});
	  $('a.add_border4').borderEffect({borderColor : '#ffffff'});
	  $('a.add_border5').borderEffect({borderColor : '#ffffff'});
	  //$('a.sample-border3').borderEffect({borderColor : '#cccccc', speed : 100, borderWidth: 10});
  });

	
/*
*author：chenyj
*product：鼠标hover时背景变化效果（用到trs_web_jquery.js）
*date：2014-05-09
*/		
	$.fn.navtab = function(currClass){
	  var tabs = $(this);
	  function navover(){
		  var currTab = $(this);
		  currTab.addClass(currClass);
		  tabs.not(currTab).removeClass(currClass);
	  }
	  tabs.hover(navover);
  	}
	$("[rel=zxzx]").navtab('li_hover');




/*
*author：chenyj
*product：鼠标hover边框渐变出现的效果实现
*date：2014-05-09
*/
	$.fn.borderEffect = function(options) {
		options = $.extend({
			speed : 150,
			borderWidth : 3,
			borderColor : '#c72526',
			borderClass : "border-effect",
			zIndex : 100
		}, options);
		return this.each(function(i) {
			$(this).hover(
				function() {
					$(this).find('.' + options.borderClass).animate({
						"border-width": options.borderWidth + "px",
						"opacity": "1"
					}, {
						"duration": options.speed, 
						"queue": false
					});
				},
				function() {
					$(this).find('.' + options.borderClass).animate({
						"border-width": "0px",
						"opacity": "0"
					}, {
						"duration": options.speed, 
						"queue": false
					});
				}
			);
			if($(this).find('.' + options.borderClass).length <= 0){
				var border = $("<div />", {
					"class": options.borderClass,
					"css"  : {
						"position": "absolute",
						"display": "block",
						"border": "0px solid " + options.borderColor,
						"top": 0,
						"bottom": 0,
						"right": 0,
						"left": 0,
						"opacity": "0",
						"z-index": options.zIndex
					}
				});
				$(this).append(border);
			}
			$(this).css('position', 'relative');
		});
	};
	  
	  

	
/*
*author：chenyj
*product：首页通栏banner切换效果实现
*date：2014-06-12
*/	    
	 var index=1;
	 var len=$(".banner_link>a").length;
	 function showSys(num)  //图片切换函数
	   {
		 
		   $(".banner_link>a").hide();
		   $(".banner_link>a").eq(num).fadeIn();
	   }
	   function ziDong() {  //自动切换
			if(index==len){
			 index=0;
			}
			showSys(index);
			index=index+1;
	   }
	    int1=setInterval(ziDong,4000);
		
		 $(".banner_link").mouseover(function()  //移动到上面时停止自动切换
		   {
			clearInterval(int1);
		   });
		$(".banner_link").mouseout(function()  //移开时继续自动切换
		   {
			int1=setInterval(ziDong,4000);
		   });

});


/*
*author：chenyj
*product：鼠标hover边框渐变出现的效果实现
*date：2014-05-09


(function($) {
	$.fn.borderEffect = function(options) {
		options = $.extend({
			speed : 150,
			borderWidth : 3,
			borderColor : '#c72526',
			borderClass : "border-effect",
			zIndex : 100
		}, options);
		return this.each(function(i) {
			$(this).hover(
				function() {
					$(this).find('.' + options.borderClass).animate({
						"border-width": options.borderWidth + "px",
						"opacity": "1"
					}, {
						"duration": options.speed, 
						"queue": false
					});
				},
				function() {
					$(this).find('.' + options.borderClass).animate({
						"border-width": "0px",
						"opacity": "0"
					}, {
						"duration": options.speed, 
						"queue": false
					});
				}
			);
			if($(this).find('.' + options.borderClass).length <= 0){
				var border = $("<div />", {
					"class": options.borderClass,
					"css"  : {
						"position": "absolute",
						"display": "block",
						"border": "0px solid " + options.borderColor,
						"top": 0,
						"bottom": 0,
						"right": 0,
						"left": 0,
						"opacity": "0",
						"z-index": options.zIndex
					}
				});
				$(this).append(border);
			}
			$(this).css('position', 'relative');
		});
	};
})(jQuery);
*/


