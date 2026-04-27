/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1) Images
   a. Titles and Pizza are both images stored in the images folder.
      b. When creating the images give each a class of either "title" or "pizza" respectively
         c. Each image has been conveniently labeled with a number at the end in order to use a 
               loop to retrieve the images.
               2) Create an appropriate random price to display for each pizza
               3) Enter quantity is a text input
               4) Buy is a button input

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3

//init() function is called when the page loads in index.html
function init() {
    let output = document.getElementById("output");
    output.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        let price = (Math.random() * 15 + 5).toFixed(2);

        let cardHTML = `
            <div class="pizza-card">
                <img src="images/Lesson5_2PracticalMockSolution.png" class="title" alt="Pizza Title">
                <img src="images/pizzabk.jpg" class="pizza" alt="Pizza Image">
                <input type="text" id="qty${i}" value="1" placeholder="Quantity">
                <button onclick="buyPizza(${i})">Buy</button>
                <div class="price">$${price}</div>
            </div>
        `;

        output.innerHTML += cardHTML;
    }
}


function buyPizza(pizzaNumber) {
    let qty = document.getElementById(`qty${pizzaNumber}`).value;
    alert(`You bought ${qty} of pizza ${pizzaNumber}!`);
}
