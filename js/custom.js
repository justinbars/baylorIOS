$( document ).ready(function() {
    $( "a" ).on( "click", pauseVideo ());
});

function loadVideo (panelName, fileName, buttonOne, buttonTwo)
{
$.get(fileName, function(htmlData) {
    // htmlData contains the data from filename
	    $.ui.updatePanel(panelName, htmlData);//update panel with the new data
	    $(buttonOne).hide();//hide old button
	    //$(buttonTwo).show();//unhide new one
	    $(buttonTwo).css('display', 'inline-block');
	    
	    $.ui.loadContent(panelName, false, false, "pop");//load the new tab  
	    
	    

	    
	});
}
function loadVideo2 (panelName, fileName, buttonOne, buttonTwo, videoID)//same as before but no auto load
{
$.get(fileName, function(htmlData) {
    // htmlData contains the data from filename
	    $.ui.updatePanel(panelName, htmlData);//update panel with the new data
	    $(buttonOne).hide();//hide old button
	    //$(buttonTwo).show();//unhide new one
	    $(buttonTwo).css('display', 'inline-block');
	    	  
	      
	    
	});
}


function checkAnswers (name, correctAnswer, correctID)
{

$("label[for='"+correctID+"']").css('color', 'green');
      
}

function pauseVideo ()
{
$('.lessonVideo').each(function(){
	$(this).get(0).pause()
	
});
//$('.lessonVideo').on('click', 'button', function() { $('.lessonVideo').get(0).pause(); });

}

function playVideo (videoID)
{
$(videoID).get(0).play();
}