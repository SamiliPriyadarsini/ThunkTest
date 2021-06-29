function setup() {
  createCanvas(400, 400);
  
  //A string data-type
  name = "Hermoine";
  
  //A number data-type
  num = 31;
  
  //An array data-type
  
  // ["Item1", 32, "Hermione", 31]
  // index = [ 0 , 1, 2, 3]
  newArray = ["Item1", 32, name, num];
  
  //accessing the 1st item in the array and printing it on the console
  console.log(newArray[0]); // Item1
  
  //accessing the 3rd item in the array and printing it on the console
  console.log(newArray[2]); // Hermione

  //finding the length of the array
  console.log(newArray.length); // 4

}

function draw() {
  background(220);
  
}