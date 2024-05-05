// performs all interaction with the user
// input 1 - the initial explanation of game to the user
// input 2 - a list of tuples (each tuple is a question and an answer, both text)
// inputs are packed into dictionary
import * as rs from 'readline-sync';
import greetings from './cli.js';

export default (game) => {
  const userName = greetings();
  console.log(game.instructions);
  for (let i = 0; i < game.questions_and_answers.length; i += 1) {
    const pair = game.questions_and_answers[i];
    const question = pair[0];
    const answer = pair[1];
    console.log(`Question: ${question}`);
    const userAsnswer = rs.question('Your answer: ');
    if (answer !== userAsnswer) {
      console.log(`'${userAsnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
