//Linear Reggression in p5js browser


//a data varieable array type
var data=[];
//slope
var m = 1;
//y intersept
var b =0;
function setup() {
  createCanvas(400, 400);
  
}
//whever the mouse is pressed a data point is created
function mousePressed()
{
  //mapping the pixel cordinate to a graf cordinate
  var x=map(mouseX,0,width,0,1);
  var y=map(mouseY,0,height,1,0);
  //creating a vector its in the form (x,y)  ie it contains the location of the points by keeping the x and y cordinates of points in a group
  var points=createVector(x,y);
  //we are passing record of every pionts created in the array data
  data.push(points);

 // print(points);
  
}
 function linearReggresion(){
  var xsum = 0;
  var ysum = 0;
  
  var xmean = 0;
  var ymean = 0;
   for(var i = 0;i<data.length;i++)
   {
     xsum+=data[i].x;
     ysum+=data[i].y;
      
   }
    xmean=xsum/data.length;
    ymean=ysum/data.length;
   var num =0;
   var den = 0;
   for(var i =0; i<data.length;i++){
     var x =data[i].x;
     var y =data[i].y;
     num+=((x-xmean)*(y-ymean));
     den+=((x-xmean)*(x-xmean));
   }
   m=num/den;
   b=ymean-m*xmean;
   
   
   
 }

 function drawline(){
 var x1 =0;
 var y1 =m*x1+b;
 var x2 =1;
 var y2 = m*x2+b;
  
   //unpack the values into pixel cordinate
   x1=map(x1,0,1,0,width);
   y1=map(y1,0,1,height,0);
   x2=map(x2,0,1,0,width);
   y2=map(y2,0,1,height,0);
   
   stroke(255,0,255);
   line(x1,y1,x2,y2);
 }
function draw() {
  background(80);
  for(var i=0;i<data.length;i++)
  {
    var x= map(data[i].x,0,1,0,width);
    var y= map(data[i].y,0,1,height,0);
    fill(255);
    stroke(255);
    ellipse(x,y,8,8);
  }
  drawline();
  linearReggresion();
}
