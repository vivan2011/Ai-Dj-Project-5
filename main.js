song1="";
song2="";
leftWristX = 0;
leftWristY = 0;
righWristX = 0;
rightWristY = 0;
scoreleft= 0 ;
scoreright= 0;

function preload()
{ 
    song1 = loadSound("Crab Rave.mp3");
    song2 = loadSound("Vicetone & Tony Igy - Astronomia.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center(); 
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotPoses);
}
function modelloaded(){
    console.log('PoseNet has been initialized')
}

function gotPoses(results)
{
 if(results.length > 0)
 {
   
    console.log(results);
    scoreleft= results[0].pose.keypoints[9].score;
console.log("scoreleft = "+scoreleft);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX+ " leftWristY ="+leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX+ " rightWristY ="+rightWristY);
 }
}
function draw(){
    image(video,0,0,600,500)
   if(scoreleft<0.2){
    song2.stop();
    song1.play();
    }
else{
    song1.stop();
    song2.play();
}
}        

function play(){
    
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

