const { IP, PORT } = require('./constants');

const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
    // host: '135.23.222.131',
    // port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  })

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  conn.on('connect', () => {
    conn.write('Name: TB');
    // conn.write('Move: up');    
  });



  return conn;
}




module.exports = connect;