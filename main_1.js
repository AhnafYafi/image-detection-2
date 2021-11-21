img = "";
status = "";
function preload()
{
    img = loadImage('people.jpg');
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}
function modelLoaded()
{
    console.log("Modal Is Ioaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
  if(error)
  {
      console.log(error)
  }else{
  console.log(results)
}
}
function draw()
{
    
}