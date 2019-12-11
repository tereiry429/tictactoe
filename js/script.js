let currentPlayer = "X"
let totalNum = 0
let gameOver = false

function performLogic(buttonId, titleId){
    $(buttonId).hide();
    $(titleId).text(currentPlayer);
    
 
    // removes the button of the corresponding buttonId,
    // and changes the text of the div that is the tileId to the player variable.
    // function that will change the current player to either "X" or "O" depending on the current player. 
    //Decide where to put this function.
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
    console.log(mood);
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

