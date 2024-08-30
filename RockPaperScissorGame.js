var count_lose = 0;
var count_win = 0;
var count_tie = 0;
function playGame(human) {
    var choices = ['Rock', 'Paper', 'Scissor'];
    var computer = choices[Math.floor(Math.random() * 3)];

    document.getElementById("human_chance").innerText = `Human: ${human}`;
    document.getElementById("computer_chance").innerText = `Computer: ${computer}`;

    if (human == computer) {
        document.getElementById("result").innerHTML = "<button id='tie_button'>It's a tie!</button>";
        document.getElementById('tie_button').style.backgroundColor = "rgb(128,128,128)";
        document.getElementById('tie_button').style.color = "black";
        document.getElementById('tie_button').style.borderRadius = "5px";
        document.getElementById('tie_button').style.padding = "10px";
        document.getElementById('tie_button').style.borderStyle = "none";
        document.getElementById('tie_button').style.width = "100px";
        document.getElementById('tie_button').style.textAlign = "center";
        count_tie += 1;
    } else if (
        (human == 'Rock' && computer == 'Scissor') ||
        (human == 'Paper' && computer == 'Rock') ||
        (human == 'Scissor' && computer == 'Paper')
    ) {
        document.getElementById("result").innerHTML = "<button id='win_button'>You win!</button>";
        document.getElementById('win_button').style.backgroundColor = "green";
        document.getElementById('win_button').style.color = "white";
        document.getElementById('win_button').style.borderRadius = "5px";
        document.getElementById('win_button').style.padding = "10px";
        document.getElementById('win_button').style.borderStyle = "none";
        document.getElementById('win_button').style.width = "100px";
        document.getElementById('win_button').style.textAlign = "center";
        count_win += 1;
    } else {
        document.getElementById("result").innerText = "Computer wins!";
        document.getElementById("result").innerHTML = "<button id='lose_button'>Computer wins!</button>";
        document.getElementById('lose_button').style.backgroundColor = "black";
        document.getElementById('lose_button').style.color = "white";
        document.getElementById('lose_button').style.borderRadius = "5px";
        document.getElementById('lose_button').style.padding = "10px";
        document.getElementById('lose_button').style.borderStyle = "none";
        document.getElementById('lose_button').style.width = "150px";
        document.getElementById('lose_button').style.textAlign = "center";
        count_lose += 1;
    }

    document.getElementById("tie").innerText = `Tie: ${count_tie}`;
    document.getElementById("win").innerText = `Win: ${count_win}`;
    document.getElementById("lose").innerText = `Lose: ${count_lose}`;
}