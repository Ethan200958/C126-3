music = "music.mp3";
music2 = "music2.mp3";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0; 
leftWristY = 0;


function preload() {
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet Initalization: Verified.");
}

function draw() {
    image(video, 0, 0, 300, 300);
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x:"+leftWristX+"left wrist y:"+leftWristY)

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x:"+rightWristX+"right wrist y:"+rightWristY);
    }
}

function play() {
    music.play();
    music.setVolume(1);
    music.rate(1);
}
