// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {

    let NUMBER_OF_QUESTIONS=3;
    let MAX_VALUE=100

    let gameLogic={};
    gameLogic['instructions']='Answer "yes" if the number is even, otherwise answer "no".';
    let qAndA=[];
    for (let i=0;i<NUMBER_OF_QUESTIONS;i++){
        const num = Math.floor(Math.random()*MAX_VALUE);
        const question=''+num;
        let answer='';
        if (num%2===0) {
            answer='yes';
        }
        else {
            answer='no';
        }
        qAndA.push([question,answer]);
    }
    gameLogic['questions_and_answers']=qAndA;
    return gameLogic;
}