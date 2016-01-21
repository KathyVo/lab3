'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("What happened???!!");
		$('#testjs').text("YOLO");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(updateProject);

}

function updateProject(e) { //
	var projectID = $("#project").val(); 
	$(projectID).animate({
		width: $('#width').val()
	});
	var newText = $("#description").val();
	$(projectID + " .project-description").text(newText);
}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

function projectClick(e) {
	//cancel default action to prevent page from reloading 
	e.preventDefault(); 

	//event listener to fire the event
	var projectTitle = $(this).find("p").text(); 
	var jumbotronHeader = $(".jumbotron h1"); 
	console.log("Number of matching items " + jumbotronHeader.length);
	jumbotronHeader.text(projectTitle);

	//appending items 
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
		containingProject.append("<div class='project-description'><p>Description of the Project</p></div>")

	}
	else {
		$(".project-description").toggle();

	}
	
}
	
