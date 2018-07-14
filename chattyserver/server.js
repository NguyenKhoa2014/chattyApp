const express = require('express');
const ws      = require('ws');
const uuidv1 = require('uuid/v1');
// Set the port to 3000
const PORT = 3001;
let totalClient = 0; 
let session_id = '';
let color = '';
// Create a new express server
const app = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(
    PORT, '0.0.0.0', 'localhost',
    () => console.log(`Listening on ${PORT}`)
  );

// App logic below

// Temporary store for the current state of the document
let contents = '';

// wss = web socket server
const wss = new ws.Server({ server: app });

function broadcastMessage(message) {
  for (let client of wss.clients) {
    if (client.readyState === ws.OPEN) {
      console.log('msg in broadcast ',message);
      client.send(message);
    }
  }
}

function handleMessage( message) {
  var an_id = uuidv1();
  console.log('total client ', wss.clients.size);
  var obj = JSON.parse(message);
  obj['id'] = an_id; 
  obj['count'] = wss.clients.size;
  obj['session_id'] = session_id;
  obj['color'] = color;
  switch(obj['type']) {
    case "postMessage":
      obj['type'] = 'incomingMessage'; 
      break;
    case "postNotification":
     obj['type'] = 'incomingNotification'; 
      // handle incoming notification
      break;
    default:
      console.log('default value here')
  } 
  console.log(contents);
  contents = JSON.stringify(obj);
  
  broadcastMessage(contents);
}

function handleConnection(client) { 
  //var session_id = uuidv1();
  session_id = uuidv1();
  color = userColor();
  console.log('total connections: ', totalClient);  
  //client.on('message', handleMessage);
  broadcastMessage(JSON.stringify( {
    usersOnline: wss.clients.size,
    type: "usersOnline",
    color: userColor(),
    session_id : session_id
  } ));
  client.on('message', handleMessage);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function createRandomNumber(min,max){
  let randNumber = Math.round(getRandomArbitrary(min, max));
  return randNumber;
}

function userColor(){
  let colors = ['green', 'red', 'brown', 'yellow', 'blue', 'aqua', 'purple', 'magenta', 'orange'];
  let index = createRandomNumber(0, colors.length - 1 );
  return colors[index];
}

wss.on('connection', handleConnection);