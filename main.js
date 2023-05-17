var  rightWristY = 0
var  rightWristX = 0
var  leftWristY = 0
var  leftWristX = 0
var  r = 1

function setup() {
    canvas = createCanvas(600, 500);
canvas.center();


video = createCapture(VIDEO);
video.hide()





poseNet = ml5.poseNet(video, ModelLoaded)
poseNet.on('pose', gotPoses);


}



function draw() {
image(video, 0, 0, 600, 500);
fill("black");
stroke("red");
circle(leftWristX, leftWristY,20);

leftWristYNumero = Number(leftWristY)
ajustado = floor(leftWristYNumero)
volume = ajustado / 500
document.getElementById("volume").innerHTML = "Volume =" +volume
song.setVolume(volume)
circle(rightWristX, rightWristY,20);
if (rightWristY > 0 && rightWristY <=100) {
document.getElementById("speed").innerHTML = "Velocidade é de 0.5x"
r = 0.5

}

else if (rightWristY > 100 && rightWristY <=200) {

    document.getElementById("speed").innerHTML = "Velocidade é de 1x"
r = 1
}    
else if (rightWristY > 200 && rightWristY <=300) {

    document.getElementById("speed").innerHTML = "Velocidade é de 1.5x"
r = 1.5
}
else if (rightWristY > 300 && rightWristY <=400) {

    document.getElementById("speed").innerHTML = "Velocidade é de 2x"
r = 2
}
else if (rightWristY > 400 && rightWristY <=500) {

    document.getElementById("speed").innerHTML = "Velocidade é de 2.5x"
r = 2.5
}
song.rate(r);










}













function preload() {
song = loadSound("music.mp3");

}







function ModelLoaded() {
console.log('AAAAAA voce e guey aaAAAAAAAAAAAAAAAAAAA')




















}







function gotPoses(results) {
if (results.length > 0) {
console.log(results);
  

leftWristX = results[0].pose.leftWrist.x;

leftWristY = results[0].pose.leftWrist.y;



rightWristX = results[0].pose.rightWrist.x;

rightWristY = results[0].pose.rightWrist.y;














}




}


function BORABILL() {
song.play();
song.setVolume(0.5);
song.rate(1);


}