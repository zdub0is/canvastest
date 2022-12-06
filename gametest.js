window.onload = function () {
    canvas = document.getElementById("canvas");
    parent = document.getElementById('gameboard');
    ctx = canvas.getContext("2d");
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    ctx.fillStyle = "green";
    rectWidth = Math.floor(canvas.width/25)
    width = canvas.width - rectWidth;
    height = canvas.height - rectWidth;
    xPos = 10;
    yPos = 10;
    
    ctx.fillRect(xPos, yPos, rectWidth, rectWidth);
};


window.addEventListener("keydown", (e) => {
    console.log  (e.key);
    if (e.key == 'ArrowUp') {
        console.log('Up')
        handleMovement(0)
        console.log(xPos, yPos)
    }
    else if (e.key == 'ArrowDown') {
        console.log('Down')
        handleMovement(1)
        console.log(xPos, yPos)
    }
    else if (e.key == 'ArrowLeft') {
        console.log('Left')
        handleMovement(3)
        console.log(xPos, yPos)
    }
    else if (e.key == 'ArrowRight') {
        console.log('Right')
        handleMovement(2)
        console.log(xPos, yPos)
    }
})
function handleMovement (direction) {
    // Purpose: To move the rectangle.
    // direction: 0, up; 1, down; 2, right; 3, left;
    
    //if direction = #, if outofbounds = false,
    if (direction == 0) { //up
        if (outOfBounds(yPos, 0)) {
            ctx.clearRect(xPos, yPos, rectWidth, rectWidth);
            yPos -= 5;
            ctx.fillRect(xPos, yPos, rectWidth, rectWidth);            
        }
    };
    if (direction == 1) { //down
        if (outOfBounds(yPos, height)) {
            ctx.clearRect(xPos, yPos, rectWidth, rectWidth);
            yPos += 5;
            ctx.fillRect(xPos, yPos, rectWidth, rectWidth);            
        }
    };
    if (direction == 2) { // right
        if (outOfBounds(xPos, width)) {
            ctx.clearRect(xPos, yPos, rectWidth, rectWidth);
            xPos += 5;
            ctx.fillRect(xPos, yPos, rectWidth, rectWidth);            
        }
    };
    if (direction == 3) { //left
        if (outOfBounds(xPos, 0)) {
            ctx.clearRect(xPos, yPos, rectWidth, rectWidth);
            xPos -= 5;
            ctx.fillRect(xPos, yPos, rectWidth, rectWidth);            
        }
    };

};

function outOfBounds (pos, limit) {
    //Purpose: returns a bool depending on if the rect is about to move out of bounds
    //pos: the current x or y coordinate, limit: limit of boundary
    if (pos == limit) {
        return false;
    }
    return true;
};

addEventListener("resize", (e) => {
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
});
