/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea() {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    let answer = width * height;

    document.getElementById("output").innerHTML = "Area: " + answer;
}

function recPerimeter() {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    let answer = 2 * (width + height);

    document.getElementById("output").innerHTML = "Perimeter: " + answer;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){

}

function cirPerimeter(){

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}