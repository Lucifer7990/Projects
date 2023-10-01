const gameBord = document.querySelector('.game-bord');
const scoreBord = document.querySelector('#score');
const lifeline = document.querySelector('#lifeline');
const gamer = document.querySelector('#gamer');
const timerBord = document.querySelector('#timer');

var life = 3;
var score = 0;
var gamerVal = undefined;
var gamerCount = 2;
const workerCount = 18*8;
const timer = 10;
let someTime;
let afterTime;



gameBord.addEventListener('click',(e)=>{
    if(e.target.innerHTML.length == 1){
        if(e.target.innerHTML == gamer.innerHTML){
            scoreIncrease();
        }
        else{
            lifeDecrease();
        }
    }
    else{
        console.log('click on blue button');   
    }
})




function setup(){
    if(gamerCount > workerCount){
        gamerCount = workerCount;
    }
    setupGameBord();
    setupScore();
    setupLife();
    setupTimer();

}

function setupGameBord(){
    setupGamer();
    gameBord.innerHTML = '';
    let arr = [];
    for(let i=0;i<workerCount-gamerCount ;i++){
        let val = Math.floor((Math.random() * 10));
        if (val == gamerVal){
            i--;
        }
        else{
            arr.push(val)
        }
    }
    for(let i=0;i<gamerCount; i++){
        addElm(arr,gamerVal);
    }
    
    for(let i=0;i<arr.length ;i++){
        gameBord.innerHTML += `<h2 id="worker">${arr[i]}</h2>`;
    }
}

function setupScore(){
    scoreBord.innerHTML = `Score : ${score}`;
}
function setupLife(){
    lifeline.innerHTML = `&hearts; ${life} `;
}
function setupGamer(){
    gamerVal = Math.floor((Math.random() * 10))
    gamer.innerHTML = gamerVal;
}
function setupTimer(){
    let lol = timer;
    timerBord.innerHTML = `timer : ${lol}`
    // if(someTime !== undefined){
    //     clearInterval(someTime);
    // }
    someTime=setInterval(()=>{
        lol--;
        timerBord.innerHTML = `timer : ${lol}`
    },1000)
    afterTime=setTimeout(()=>{
        lifeDecrease();
    },timer*1000)
}

function scoreIncrease(){
    clearInterval(someTime);
    clearTimeout(afterTime);
    score = score+50;
    setup();
}
function lifeDecrease(){
    clearInterval(someTime);
    clearTimeout(afterTime);
    life--;
    if(life < 0){
        gameOver();
    }
    else{
        setup();
    }
}

function gameOver(){
    gameBord.innerHTML = `<div class="over-bord">
                                <h1>Game Over</h1>
                                <h2> Score : ${score}</h2>
                                <button onclick="location.reload();">Play Again</button>
                            </div>`
}

function addElm(arr, newElement){
    let index = Math.floor(Math.random() * arr.length);
    return arr.splice(index, 0, newElement);
}

function hack(){
    gameBord.childNodes.forEach((elm)=>{
        if(elm.innerHTML == gamerVal){
            elm.style.backgroundColor = '#71ff5b'
            elm.style.color = '#000'
        }   

    }) 
}

setup();