
	function readyFunc( jQuery ) {
		// Code to run when the document is ready.
		console.log("JQuery Loaded .");		
		$(".updateEventBox").on('click', function() {
		
		 console.log("click on div");


		});

        $('.editable').on('activate', function() {
            console.log('active');
            $(this).empty();
            var range, sel;
            if ( (sel = document.selection) && document.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText(this);
                range.select();
            }
        });

        $('.editable').focus(function() {
            if (this.hasChildNodes() && document.createRange && window.getSelection) {
                $(this).empty();
                var range = document.createRange();
                range.selectNodeContents(this);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        });

		} //main function

	$( document ).ready( readyFunc );	
