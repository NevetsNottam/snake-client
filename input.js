


// setup interface to handle user input from stdin
const handleUserInput = (key) => {
  // your code here

  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'u') {
    connection.write('Say: Wut Up!');
  } else if (key === 'i') {
    connection.write('Say: This');
  } else if (key === 'o') {
    connection.write('Say: Is');
  } else if (key === 'p') {
    connection.write('Say: Cool!');
  } 
};

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput};