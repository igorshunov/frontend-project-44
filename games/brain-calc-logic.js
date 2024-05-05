// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {
  const NUMBER_OF_QUESTIONS = 3;
  const MAX_VALUE = 100;

  const gameLogic = {};
  gameLogic.instructions = 'What is the result of the expression?';
  const qAndA = [];
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const num1 = Math.floor(Math.random() * MAX_VALUE);
    const num2 = Math.floor(Math.random() * MAX_VALUE);
    const operation = Math.floor(Math.random() * 3); // 3 options for operation: + - *;
    const operationSymbol = '+-*'[operation];
    const question = `${num1} ${operationSymbol} ${num2}`;
    let answer = '';
    switch (operation) {
      case 0:
        answer = `${num1 + num2}`;
        break;
      case 1:
        answer = `${num1 - num2}`;
        break;
      case 2:
        answer = `${num1 * num2}`;
        break;
      default:
        break;
    }
    qAndA.push([question, answer]);
  }
  gameLogic.questions_and_answers = qAndA;
  return gameLogic;
};
