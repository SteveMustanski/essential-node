const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  setTitle('Connected to Cyber Chat');
};

ws.onclose = () => {
  setTitle('Disconnected');
};

ws.onmessage = payload => {
  printMessage(payload.data);
};

document.forms[0].onsubmit = function() {
  let input = document.getElementById('message');
  ws.send(input.value);
  input.value = '';
};

function setTitle(title) {
  document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
  var p = document.createElement('p');
  p.innerText = message;
  document.querySelector('div.messages').appendChild(p);
}
