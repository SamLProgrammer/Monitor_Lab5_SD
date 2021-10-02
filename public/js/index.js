window.onload = () => {
	const new_instance_button = document.getElementById('new_instance_button')
    new_instance_button.addEventListener('click', function (event) { launchNewInstance(event, new_instance_button) });
}

const socket = io();

socket.on('free', (arg) => { 
	new_instance_button.style.display = 'block';
});

function launchNewInstance(event, button) {
	button.style.display = 'none';
    const xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8000/launchNew');
	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
	xhr.onload = () => {
		let body = JSON.parse(xhr.response);
		alert(body.response)
		// var fila="<tr><td>"+body.numberInstance+"</td><td>"+body.ipIntancia+"</td><td>"+ body.port+"</td><td>"+ "OTR0" +"</td></tr>";
		// var btn = document.createElement("TR");
		// btn.innerHTML=fila;
		// document.getElementById("tablita").appendChild(btn);
	};
	xhr.send();
}