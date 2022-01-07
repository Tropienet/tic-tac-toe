let counter = 0;


const gameboard = (() =>{
    const gameboardArray = 
    [['00', '01', '02'],
     ['10', '11', '12'],
     ['20', '21', '22']];

     return gameboardArray;

})();

const player = (name,mark) => {
    return {name, mark};
};

const gameFlow = (() =>{
    const player1 = player(prompt("Enter Player one Name"), "x");
    const player2 = player(prompt("Enter Player two Name"), "o");
    
    const gameboardOnScreen = gameboard;
    

    const container = document.querySelector('.container');
    const newGameButton = document.querySelector('.newGameButton');
    newGameButton.addEventListener('click', () =>{
        for(let i = 0;i<3;i++){
            for(let j = 0;j<3;j++){
                const boardPiece = document.querySelector(`.gameboard${i}${j}`);
                boardPiece.textContent = "";
            }
        }
    })
 
    for(let i=0;i<3;i++){
        for(let j = 0;j<3;j++){
          const div = document.createElement('div');
          div.setAttribute('style', 'color: black; background: white; border-style: solid;');
        // div.textContent = gameboardOnScreen[i][j];
        div.setAttribute('class', `gameboard${i}${j}`);
        div.addEventListener('click', () =>{
            if(div.textContent== ""){
                if(counter==0){
                    gameboardOnScreen[i][j] = "x";
                    
                    div.textContent = "x"
                    counter +=1;
                    checkForWinner();
                }else if(counter==1){
                    gameboardOnScreen[i][j] = "o";
                    
                    div.textContent = "o";
                    counter -=1;
                    checkForWinner();
                }
            }
        })
        container.appendChild(div);

         }
    }
    function checkForWinner(){
        const winningDiv = document.querySelector('.winningDiv');
        const winningMessage = document.createElement('p');
        
        for(let i = 0;i<3;i++){
            if(gameboardOnScreen[0][i]==gameboardOnScreen[1][i]&&gameboardOnScreen[0][i]==gameboardOnScreen[2][i]){
                if(gameboardOnScreen[0][i]==player1.mark){
                    winningMessage.textContent = `${player1.name} is the Winner`;
                }else{
                    winningMessage.textContent = `${player2.name} is the Winner`;
                }
                i=3;
            }else if(gameboardOnScreen[i][0]==gameboardOnScreen[i][1]&&gameboardOnScreen[i][0]==gameboardOnScreen[i][2]){
                if(gameboardOnScreen[i][0]==player1.mark){
                    winningMessage.textContent = `${player1.name} is the Winner`;
                }else{
                    winningMessage.textContent = `${player2.name} is the Winner`;
                }
                i=3;
            }else if(gameboardOnScreen[0][0]==gameboardOnScreen[1][1]&&gameboardOnScreen[1][1]==gameboardOnScreen[2][2]){
                if(gameboardOnScreen[0][0]==player1.mark){
                    winningMessage.textContent = `${player1.name} is the Winner`;
                }else{
                    winningMessage.textContent = `${player2.name} is the Winner`;
                }
                i=3;
            }else if(gameboardOnScreen[0][2]==gameboardOnScreen[1][1]&&gameboardOnScreen[1][1]==gameboardOnScreen[2][0]){
                if(gameboardOnScreen[0][2]==player1.mark){
                    winningMessage.textContent = `${player1.name} is the Winner`;
                }else{
                    winningMessage.textContent = `${player2.name} is the Winner`;
                }
                
                i=3;
            }
        }
        winningDiv.appendChild(winningMessage);
    }


})();


