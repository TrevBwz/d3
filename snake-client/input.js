
let connection;

const setupInput = function (conn) {
  connection = conn;

  //  const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data, connection);
  });
  return stdin;
}


const handleUserInput = function (key, conn) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    conn.write('Move: up');
  }
  if (key === 'a') {
    conn.write('Move: left');
  }
  if (key === 's') {
    conn.write('Move: down');
  }
  if (key === 'd') {
    conn.write('Move: right');
  }
  if (key === 'b') {
    conn.write('Say: bep');
  }
  if (key === 'n') {
    conn.write('Say: yas');
  }

};







module.exports = setupInput;
