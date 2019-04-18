function squareNumber(num) {
	if (num == "") {
		alert("Please Insert a number");
	} else {
		num = parseFloat(num);
		writeToSolution("The result of squaring the number " + num + " is " + (+(num * num).toFixed(2)));
	}
}

function halfNumber(num) {
	if (num == "") {
		alert("Please Insert a number");
	} else {
		num = parseFloat(num);
		writeToSolution("Half of " + num + " is " + (+(num / 2).toFixed(2)));
	}
}

function percentOf(numOne, numTwo) {
	if (numOne == "" || numTwo == "") {
		alert("Please Insert a number");
	} else {
		numOne = parseFloat(numOne);
		numTwo = parseFloat(numTwo);
		writeToSolution(numOne + " is " + (+((numOne / numTwo) * 100).toFixed(2)) + "% of " + numTwo);
	}
}

function areaOfCircle(radius) {
	if (radius == "") {
		alert("Please Insert a number");
	} else {
		radius = parseFloat(radius);
		writeToSolution("The area for a circle with radius " + radius + " is " + (+(radius * radius * 3.1415926).toFixed(2)));
	}
}

function writeToSolution(msg) {
	document.getElementById("solution").innerHTML = msg;
}
