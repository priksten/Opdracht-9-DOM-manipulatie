const myName = 'Peter Riksten';
const nameColor = ["red", "blue", "black", "green", "orange"];

function changeName(){
    // TODO :: use more descriptive variable names
    // TODO :: it's better to use nameColor.length instead of a hardcoded 5
    // because that way when you add a new color it wel be chosen randomly as well
    let a = Math.floor(Math.random()*5);
    let b = nameColor[a];
    document.getElementById("targetText").innerHTML = "Hi " + myName + "!";
    document.getElementById("targetText").style.color = b;  
}

