const readLine = require('readline');
const fs = require('fs');

let realPerson = {
  name: '',
  sayings: [],
};

let rl = readLine.createInterface(process.stdin, process.stdout);

rl.question('What is the name of a real person? ', answer => {
  realPerson.name = answer;
  fs.writeFileSync(
    'realPerson.name' + '.md',
    `${realPerson.name}\n=================\n`,
  );
  rl.setPrompt(`What would ${realPerson.name} say?`);

  rl.prompt();
  rl.on('line', saying => {
    if (saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      realPerson.sayings.push(saying.trim());
      fs.appendFile(realPerson.name + '.md', `- ${saying.trim()} \n`, () => {});
      rl.setPrompt(
        `What else might ${realPerson.name} say? (or 'exit' to quit)`,
      );
      rl.prompt();
    }
  });
});

// do this if close is called
rl.on('close', () => {
  console.log(
    '%s is a real person that says %j',
    realPerson.name,
    realPerson.sayings,
  );
  process.exit();
});
