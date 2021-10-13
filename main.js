noseX=0;
noseY=0;
function preload(){
clone_nose=loadImage('https://i.postimg.cc/q7vZ706W/m.png')
}
function setup(){
    canvas=createCanvas(380, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
   
}
 function modelLoaded(){
     console.log('Posenet is loaded ');

 }

 function gotPoses(results){
     if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
         console.log("nosex="+noseX);
         console.log("nose y="+noseY);
     }
 }

 function draw(){
    image(video,0,0,380,400);
image(clone_nose,noseX-14,noseY-14,30,30);
 }
function take_snapshot(){
    save('st676767676.png');

}


