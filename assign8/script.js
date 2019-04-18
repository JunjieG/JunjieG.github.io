var all = document.getElementsByTagName("p");
var firstEC = document.getElementById("first").getElementsByTagName("p");
var secondEC = document.getElementById("second").getElementsByTagName("p");


function getAll() {
    alert("There are " + all.length + " animals in total.");
}

function getFirst() {
    alert("There are " + firstEC.length + " birds.");
}

function getSecond() {
    alert("There are " + secondEC.length + " terrestrial animals.");
}