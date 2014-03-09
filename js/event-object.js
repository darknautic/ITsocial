
	function readyFunc( jQuery ) {
		// code to run when the document is ready.
		console.log("JQuery Loaded .");		

		
		$(".updateEventBox").on('click', function() {
		
		 console.log("click on div");

		});
		


		$(".eventObject").on('click',function(){
			//$("#eventContent").empty();
			//$("#eventContent").append("<div style=\"border: 1px solid #0000FF; position:relative;  min-height: 100%; height: auto !important; height: 100%;\"  ></div>");
			
			console.log("click");
			
			});



		
		$('div').focus(
		function(){
		    //$(this).css({'background-color' : '#EDEDED'});
		    //$(".eventObject").css({'background-color' : '#EDEDED'});
		    
		});
		/*
		$('div').blur(
		function(){
		    $(this).css({'background-color' : '#DFD8D1'});
		});
		*/


		} //main function

	$( document ).ready( readyFunc );	
