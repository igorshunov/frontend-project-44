// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {
  const NUMBER_OF_QUESTIONS = 3;
  const MAX_VALUE = 100;

  const gameLogic = {};
  gameLogic.instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const qAndA = [];
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const num = Math.floor(Math.random() * MAX_VALUE);
    const isPrime = (num1) => {
      for (let i1 = 2, s = Math.sqrt(num1); i1 <= s; i1 += 1) {
        if (num1 % i1 === 0) return false;
      }
      return num1 > 1;
    };
    const question = `${num}`;
    let answer = '';
    if (isPrime(num)) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    qAndA.push([question, answer]);
  }
  gameLogic.questions_and_answers = qAndA;
  return gameLogic;
};
