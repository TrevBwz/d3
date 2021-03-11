const conn = net.createConnection({ 
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});

client.setEncoding('utf8'); // interpret data as text
client.on('data', (data) => {
  console.log('Message from client: ', data)
});


conn.on('connect', () => {
  conn.write('Hello from client!');
});

