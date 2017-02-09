// JavaScript Document
$(window).scroll(function(){
		var $this = $(this);
		var targetTop = $(this).scrollTop();		
		if (targetTop >= 10){
			$(".nav-content").addClass("fixed-nav");
			$(".menu-ul").removeClass("start-ul");
			$(".nav-dl").removeClass("start-dl");
			$(".menu-ul").addClass("change-ul");
			$(".nav-dl").addClass("change-dl");
			$(".hidden-box").addClass("change-hidden-box");
		}else{
			$(".nav-content").removeClass("fixed-nav");
			$(".menu-ul").addClass("start-ul");
			$(".nav-dl").addClass("start-dl");
			$(".menu-ul").removeClass("change-ul");
			$(".nav-dl").removeClass("change-dl");
			$(".hidden-box").removeClass("change-hidden-box");
		}		
});   

$(function(){
	$(".menu-ul li a").hover(function() {
		$("span",this).css({"background":"#f47866","color":"#fff"});
	}, function(){
		$("span",this).css({"background":"#fff","color":"#394373"});
	});
	$(".start-ul li.on a,.change-ul li.on a").hover(function() {
		$("span",this).css({"background":"#f47866","color":"#fff"});
	}, function(){
		$("span",this).css({"background":"#f47866","color":"#fff"});
	});
	

	$(".gotop").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	});
	$(window).scroll(function(){
		var Sctop = $(window).scrollTop();
		Sctop>100?$(".suspension-div").fadeIn(500):$(".suspension-div").fadeOut(500);
	});


})