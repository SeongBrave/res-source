
 $(function(){
        $("#am-share01").click(function(){
		$(".am-share01").addClass("am-modal-active");	
		if($(".sharebg").length>0){
			$(".sharebg").addClass("sharebg-active");
		}else{
			$("body").append('<div class="sharebg"></div>');
			$(".sharebg").addClass("sharebg-active");
		}
		$(".sharebg-active,.share_btn").click(function(){
			$(".am-share01").removeClass("am-modal-active");	
			setTimeout(function(){
				$(".sharebg-active").removeClass("sharebg-active");	
				$(".sharebg").remove();	
			},300);
		})
	})
	
	$("#am-share02").click(function(){
		$(".am-share02").addClass("am-modal-active");	
		if($(".sharebg").length>0){
			$(".sharebg").addClass("sharebg-active");
		}else{
			$("body").append('<div class="sharebg"></div>');
			$(".sharebg").addClass("sharebg-active");
		}
		$(".sharebg-active,.share_btn").click(function(){
			$(".am-share02").removeClass("am-modal-active");	
			setTimeout(function(){
				$(".sharebg-active").removeClass("sharebg-active");	
				$(".sharebg").remove();	
			},300);
		})
	})
	
 })
 
 
$(function(){
   $("#button01").click(function(){
         $(".modify-success").show();
   });
   $("#modify-cn").click(function(){
       $(".modify-success").hide();
   });
})
