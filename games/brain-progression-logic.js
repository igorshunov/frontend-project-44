// generates game logic for engine
// see specification of format in comments in engine.js

export default () => {

    let NUMBER_OF_QUESTIONS=3;
    let MAX_VALUE=10
    let PROGRESSION_LENGTH=10;

    let gameLogic={};
    gameLogic['instructions']='What number is missing in the progression?';
    let qAndA=[];
    for (let i=0;i<NUMBER_OF_QUESTIONS;i++){
        const start = Math.floor(Math.random()*MAX_VALUE);
        const increment = Math.floor(Math.random()*MAX_VALUE);
        const position=Math.floor(Math.random()*PROGRESSION_LENGTH);
        let progression=[];
        for (let i=0;i<PROGRESSION_LENGTH;i++){
            progression.push(start+i*increment);
        }
        progression[position]='..';
        const question=progression.join(' ');
        const answer=''+(start+position*increment);
        qAndA.push([question,answer]);
    }
    gameLogic['questions_and_answers']=qAndA;
    return gameLogic;
}