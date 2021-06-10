canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1_image = "car1.png";
car1X = 10;
car1Y = 10;

car2width = 120;
car2Height = 70;
car2_image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racingcanvas.jpg";

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    car1Tag = new Image();
    car1Tag.onload = uploadcar1;
    car1Tag.src = car1_image;

    car2Tag = new Image();
    car2Tag.onload = uploadcar2;
    car2Tag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1Tag, car1X, car1Y, car1Width, car1Height);
}

function uploadcar2() {
    ctx.drawImage(car2Tag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed);
    if(keyPressed == '38') {
        car1up();
        console.log("Up arrow");
    }

    if(keyPressed == '40') {
        car1down();
        console.log("Down arrow");
    }
 
    if(keyPressed == '37') {
        car1left();
        console.log("Left arrow");
    }

    if(keyPressed == '39') {
        car1right();
        console.log("Right arrow");
    }

    if(keyPressed == '87') {
        car2up();
        console.log("W key");
    }

    if(keyPressed == '65') {
        car2left();
        console.log("A key");
    }

    if(keyPressed == '83') {
        car2down();
        console.log("S key");
    }

    if(keyPressed == '68') {
        car2up();
        console.log("D key");
    }
}