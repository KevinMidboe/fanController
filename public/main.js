function UserAction(state) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", state, false);
	xhttp.setRequestHeader("Content-type", "application/text");
	xhttp.send();
	console.log(xhttp.status)
	if (xhttp.status == "200" && xhttp.responseText != 'none') {
		var stateDisplay = document.getElementById('state');
		stateDisplay.innerText = xhttp.responseText.toUpperCase();
	}
}

window.onload = function() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "state", false);
	xhttp.send();

	if (xhttp.status == "200") {
		var stateDisplay = document.getElementById('state');
		stateDisplay.innerText = xhttp.responseText.toUpperCase();
	}
}