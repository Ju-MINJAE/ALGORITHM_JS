const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const num = Number(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(num + ' * ' + i + ' = ' + num * i);
}
