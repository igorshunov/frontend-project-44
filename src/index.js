// performs all interaction with the user
// input 1 - the initial explanation of game to the user
// input 2 - a list of tuples (each tuple is a question and an answer, both text)
// inputs are packed into dictionary
import greetings from './cli.js';
import * as rs from 'readline-sync';

export default (game) => {

    const userName=greetings();
    console.log(game['instructions']);
    for (const [question,answer]  of game['questions_and_answers']){
        console.log('Question: '+question);
        const userAsnswer=rs.question('Your answer: ');
        if (answer!==userAsnswer){
            console.log(`'${userAsnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        else{
            console.log('Correct!');
        }
    }
    console.log(`Congratulations, ${userName}!`);
}