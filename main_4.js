img = "";
status = "";
function preload()
{
    img = loadImage('pet.webp');
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
    image(img,0,0,640,420);
    fill('#0080ff');
    text("dog",45,75);
    noFill();
    stroke("#0080ff");
    rect(30,60,450,350);


    fill('#2f00ff');
    text('cat', 320,120);
    noFill();
    stroke("#2f00ff");
    rect(300,90,270,320);
}