
$(function(){
	var Big_Slide_boxWidth=$("#Big_Slide").width();
	var Big_Slide_boxHeight=$("#Big_Slide").height();
	var Big_Slide_LiWidth=$("#Big_Slide").children("ul").children("li").eq(0).width();
	var Big_Slide_liNubr=$("#Big_Slide").find('li').length;
	var Big_Slide_Speed=3000;
	var Big_Slide_Tab_AWidth=(1/Big_Slide_liNubr)*100;
	for(var i=0;i<parseInt(Big_Slide_liNubr);i++){
		$("#Big_Slide").children("ul").children("li").eq(i).css("left",(i-1)*Big_Slide_LiWidth);
		}	
	var Slide_Run = setInterval(Slide_Next,Big_Slide_Speed)
	function Slide_Next(){
		for(var k=0;k<parseInt(Big_Slide_liNubr);k++){
			if(parseInt($("#Big_Slide").children("ul").children("li").eq(k).css("left"))==-Big_Slide_LiWidth)
			{				
				var Big_Slide_liSeat=0;
				for(var j=0;j<parseInt(Big_Slide_liNubr);j++){
					if(parseInt($("#Big_Slide").children("ul").children("li").eq(j).css("left"))==-Big_Slide_LiWidth){
						
						$("#Big_Slide").children("ul").children("li").eq(j).css("left",Big_Slide_LiWidth*(Big_Slide_liNubr-2));
						}else{							
						Big_Slide_liSeat=parseInt($("#Big_Slide").children("ul").children("li").eq(j).css("left"))-Big_Slide_LiWidth;
						$("#Big_Slide").children("ul").children("li").eq(j).animate({left:Big_Slide_liSeat},"slow");
						}
					}
					
				}
			}
	}	
	function Slide_Last(){
		for(var k=0;k<parseInt(Big_Slide_liNubr);k++){
			if(parseInt($("#Big_Slide").children("ul").children("li").eq(k).css("left"))==0)
			{				
				var Big_Slide_liSeat=0;
				for(var j=0;j<parseInt(Big_Slide_liNubr);j++){
					if(parseInt($("#Big_Slide").children("ul").children("li").eq(j).css("left"))==Big_Slide_LiWidth*(Big_Slide_liNubr-2)){	
						$("#Big_Slide").children("ul").children("li").eq(j).css("left",-Big_Slide_LiWidth);					
						}else{							
						Big_Slide_liSeat=parseInt($("#Big_Slide").children("ul").children("li").eq(j).css("left"))+Big_Slide_LiWidth;
						$("#Big_Slide").children("ul").children("li").eq(j).animate({left:Big_Slide_liSeat},"slow");					
						}
					}
				}
			}
	}	
	setInterval(function(){
		for(var n=0;n<parseInt(Big_Slide_liNubr);n++){
			if(parseInt($("#Big_Slide").children("ul").children("li").eq(n).css("left"))==0){
				}
			}
		},1)	
	$("#Big_Slide_Next").click(Slide_Next);
	$("#Big_Slide_Last").click(Slide_Last);
	$(".Big_Slide_box,.menu_content,.recent-news,.eme-keji,.team-mien").mouseenter(function(){clearInterval(Slide_Run)});
	$(".Big_Slide_box,.menu_content,.recent-news,.eme-keji,.team-mien").mouseleave(function(){Slide_Run = setInterval(Slide_Next,Big_Slide_Speed)})
	
})		