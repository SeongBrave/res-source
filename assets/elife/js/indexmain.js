
 if ('ontouchstart' in window) {
		var click = 'touchstart';
	} else {
		var click = 'click';
	}
	$('.menu_box').on(click, function () {
		if (!$(this).hasClass('open')) {
			openMenu();
		} else {
			closeMenu();
		}
	});
	$('.menu_content ul li a').on(click, function (e) {
		closeMenu();
	});
	function openMenu() {
		$('.menu_box').addClass('open');
		$('.menu_content').fadeIn(300);
		$('div.y').fadeOut(100);
		setTimeout(function () {
			$('div.x').addClass('rotate30');
			$('div.z').addClass('rotate150');
			$('.menu').addClass('animate');
			setTimeout(function () {
				$('div.x').addClass('rotate45');
				$('div.z').addClass('rotate135');
			}, 100);
		}, 10);
	}
	function closeMenu() {
		$('.menu_content').fadeOut(300);
		$('div.y').fadeIn(150);
		$('.menu_box').removeClass('open');
		$('div.x').removeClass('rotate45').addClass('rotate30');
		$('div.z').removeClass('rotate135').addClass('rotate150');
		setTimeout(function () {
			$('div.x').removeClass('rotate30');
			$('div.z').removeClass('rotate150');
		}, 50);
		setTimeout(function () {
			$('div.x, div.z').removeClass('');
		}, 70);
	}

	
$(".menu-right div").mouseenter(function () {
	var $this = $(this);
	var index = $this.index();
}).mouseleave(function () {
	var $this = $(this);
	var index = $this.index();
}).click(function () {
	var $this = $(this);
	var index = $this.index();
	$(".menu-right div").removeClass("on");
	$(".menu-right div").eq(index).addClass("on");
	$(".divli").hide();
	$(".divli").eq(index).show();
});

$(function(){
	$(".menu_content").css({ height: $(document).height() });

	$('.team-ul li').hover(function(){
		$('.li-more',this).stop().animate({
			height:'159px'
		});
	},function(){
		$('.li-more',this).stop().animate({
			height:'0'
		});
	});

	 $(".Plast a").click(function(){ nextscroll() });
	 function nextscroll(){
		 var vcon = $(".cooperation_cont");
		 var offset = ($(".cooperation_cont .cooperation_list").width())*-1;
		 vcon.stop().animate({left:offset},"slow",function(){
			 var firstItem = $(".cooperation_cont .cooperation_list").first();
			 vcon.find(".cooperation_cont_div").append(firstItem);
			 $(this).css("left","0px");
			 circle()
			 });  
		};
	function circle(){
		var currentItem = $(".cooperation_cont .cooperation_list").first();
		var currentIndex = currentItem.attr("index");	
		}
		$(".Pnext a").click(function(){
			var vcon = $(".cooperation_cont");
			var offset = ($(".cooperation_cont .cooperation_list").width()*-1);
			var lastItem = $(".cooperation_cont .cooperation_list").last();
			vcon.find(".cooperation_cont_div").prepend(lastItem);
			vcon.css("left",offset);
			vcon.animate({left:"0px"},"slow",function(){
				 circle()
			})
		 });
		 
$(".recent-header ul li").mouseenter(function () {
	var $this = $(this);
	var index = $this.index();
}).mouseleave(function () {
	var $this = $(this);
	var index = $this.index();
}).click(function () {
	var $this = $(this);
	var index = $this.index();
	$(".recent-header ul li").removeClass("on");
	$(".recent-header ul li").eq(index).addClass("on");
	$(".recntlist").hide();
	$(".recntlist").eq(index).show();
});  
		 	 
}) 