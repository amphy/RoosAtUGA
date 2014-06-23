/*
Made by Heather Huynh
*/

//Variables
var titleArray = ["Heather Learns Norwegian", "Heather Learns Korean", "Heather Learns Spanish", "Heather Learns Chinese"];
var titleArrayLength = titleArray.length;

//On-load
$(document).ready(function() {
	changeTitle();
});

// Change page title 
function changeTitle() {
	for (var i = 0; i < titleArrayLength; i++) {
			document.title = titleArray[i];
			};
};