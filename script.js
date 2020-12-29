var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

var btn = document.getElementById("colorChange");
var colorName = document.getElementById('colorName');

function findRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}

btn.addEventListener("click", function (){
    let hexC = "#";


    for(i = 0; i < 6; i++){
        hexC += hex[findRandomNumber()];
    }

    // change background color
    document.body.style.backgroundColor = hexC;

    // change text to tell the hex value 
    colorName.innerText = hexC;
})