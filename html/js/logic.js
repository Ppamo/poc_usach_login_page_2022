function button_on_click(){
	alert(1);
}

function page_onload(){
	const button=document.getElementById("submit_button");
	button.addEventListener("click", button_on_click, false);
	const queryString = window.location.search;
	const parameters = new URLSearchParams(queryString);
	const value = parameters.get('theme');
	if (value == "default") {
		document.getElementById("cover").style.opacity = 0;
	}
}

page_onload();
