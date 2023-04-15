function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

   
}

function draw(){
    image(video,50,50,540,380);
    
    fill("aqua")
    rect(30, 10, 550, 20);
    rect(30, 450, 550,20 );
    rect(10, 30, 20, 400);
    rect(600, 30, 20, 400);
    fill("yellow")
    circle(30,30,50)
    circle(600,30,50)
    circle(30,450,50)
    circle(600,450,50)

    
}

function take_snapshot(){
    save("selfie.png");
}
