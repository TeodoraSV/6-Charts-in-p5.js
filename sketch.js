let table;
function preload() {
  table = loadTable('ZonAnn.Ts+dSST.csv', 'header');
}

function setup() {
  createCanvas(600, 400);
  background(200);
  stroke(255);
  noFill();
 // circle(100,100,10);
 // console.log(table.getRowCount());
  //console.log(table.getNum('Glob'));
  beginShape();
  //console.log("this");
   for (var i = 0; i < table.getRowCount(); i++) {
     
    let row = table.getRow(i);
     let temp = 14 + row.getNum('Glob');
     //console.log("this");
     //console.log("this"+row.getNum('Glob'));
     let x = map(i, 0, table.getRowCount() - 1, 0, width);
     let y = map(temp, 13.5, 15, height, 0);
     vertex(x, y);
//     circle(100,100,10);
   }
  
  endShape();
}