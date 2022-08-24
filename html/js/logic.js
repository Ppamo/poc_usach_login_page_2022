const dummy = document.getElementById('k_dummy');
const k_input = document.getElementById('k_input');

function button_on_click(){
	console.log(k_input.value);
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
