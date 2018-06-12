window.onload = function() {
	let mainContent = document.querySelector('.page-content');
	let tables = mainContent.querySelectorAll('table');
	for(table of tables) {
		table.className = "ui celled table";
	}
}
