window.onload = function () {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let draw = false;

    function startPos(e) {
        draw = true;
        startDraw(e);
    }

    function stopPos() {
        draw = false;
        ctx.beginPath();
    }

    function startDraw(e) {
        if (!draw) {
            return;
        }
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPos);
    canvas.addEventListener("mouseup", stopPos);
    canvas.addEventListener("mousemove", startDraw);

    document.getElementById("clear").addEventListener("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    document.getElementById("red").addEventListener("click", function() {
        console.log("red");
        ctx.strokeStyle = "red";
    })
    document.getElementById("blue").addEventListener("click", function() {
        console.log("blue");
        ctx.strokeStyle = "blue";
    })
    document.getElementById("green").addEventListener("click", function() {
        console.log("green");
        ctx.strokeStyle = "green";
    })
    document.getElementById("white").addEventListener("click", function() {
        console.log("white");
        ctx.strokeStyle = "white";
    })
    document.getElementById("gray").addEventListener("click", function() {
        console.log("gray");
        ctx.strokeStyle = "gray";
    })
    document.getElementById("black").addEventListener("click", function() {
        console.log("black");
        ctx.strokeStyle = "black";
    })
}