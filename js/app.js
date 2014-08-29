$(document).ready(function(){
	  
doIntro();
	
	 $('#coin').mousedown(function(){
   	 	playcoin();
     	$('#coin').show().animate ({'top':"250px"},200,function(){});
    	postItem();
   
    	
    
    	
	   });
 	   
	    $('#coin').mouseup(function(){
	   $('#coin').show().animate ({'top':"400px"},200,function(){
	   });
	   	});

 $('#tbox').keydown(function (enter) {
            if (enter.keyCode == 13) {
                	playcoin();
     	$('#coin').show().animate ({'top':"250px"},200,function(){});
                postItem();
                 $('#coin').show().animate ({'top':"400px"},200,function(){ });
            }
        });
 $('#tbox').keyup(function (enter) {
            if (enter.keyCode == 13) {
                   $('#coin').show().animate ({'top':"400px"},200,function(){ });
            }
        });


	$('.list').on('click', '.item-img', function(e){e.preventDefault(); $(this).parent().remove()});
	
});
 

function playcoin () {
	
 
   $('#coin-sound')[0].play();

}

function postItem(){	    	
    	var item=$("#tbox").val();
 		if(!$.trim(item)) {
			alert('Please enter text to add to the list');
			$('#coin').show().animate ({'top':"400px"},200,function(){});
		} else {
			$('<li class="item"></li>').appendTo('.list').html('<div class="item-text"></div><span>' + item + '</span><img class="item-img" src="images/icon.jpg"/>');

		$("#tbox").val("");
		};
}
 
function doIntro(){
	  $('.shoppinglist').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.bree').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
	

