'use strict';

const net = require('net');
const client = new net.Socket();
const PORT = process.env.PORT || 3003;

client.connect(PORT, 'localhost', () => {});

client.on('data', (data) => {
  let event = JSON.parse(data);

  console.log(new Date().toUTCString(), event.event, event.payload);
});

client.on('close', () => {
  console.log('connection closed...');
});