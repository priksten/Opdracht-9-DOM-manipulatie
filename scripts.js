const myName = 'Peter Riksten';
const nameColor = ["red", "blue", "black", "green", "orange"];

function changeName(){
    let a = Math.floor(Math.random()*5);
    let b = nameColor[a];
    document.getElementById("targetText").innerHTML = "Hi " + myName + "!";
    document.getElementById("targetText").style.color = b;  
}

