const questions = [
  'What is your name?',
  'What is your favorite hobby?',
  'What is your favorite programming language?',
];

let answers = [];

function ask(i) {
  process.stdout.write(`${questions[i]}`);
  process.stdout.write('  >  \n\n');
}

process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write('\n\n');

  process.stdout.write(
    `Go ${answers[1]} ${answers[0]}, you can finish writing ${
      answers[2]
    } later.`,
  );

  process.stdout.write('\n\n');
});

ask(0);
