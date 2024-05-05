// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {

    let NUMBER_OF_QUESTIONS=3;
    let MAX_VALUE=100

    let gameLogic={};
    gameLogic['instructions']='Find the greatest common divisor of given numbers.';
    let qAndA=[];
    for (let i=0;i<NUMBER_OF_QUESTIONS;i++){
        const num1 = Math.floor(Math.random()*MAX_VALUE);
        const num2 = Math.floor(Math.random()*MAX_VALUE);
        const gcd = (a, b) => {
            if(!b) return b===0 ? a : NaN;
            return gcd(b, a%b);
        }
        const question=num1+' '+num2;
        const answer=''+gcd(num1,num2);
        qAndA.push([question,answer]);
    }
    gameLogic['questions_and_answers']=qAndA;
    return gameLogic;
}