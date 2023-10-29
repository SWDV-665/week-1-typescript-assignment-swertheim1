/*
    Assignment: 
    Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. The class should have some basic attributes such as name, quantity, etc. Feel free to add any other attributes you think will be necessary.
    Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.
    The output of this assignment will be grocery.ts and groceries.html displaying the output.
*/


class Grocery {
    
    public constructor(public item: string, public quantity: number, public item_price: number){}    
}

let groceries = [
    new Grocery('Lowfat Milk', 1, 2.99),
    new Grocery('Cheddar Cheese', 2, 3.49),
    new Grocery('Dozen Eggs', 2, 1.79),
    new Grocery('Hamburger Meat (lbs)', 3, 1.69)

];

var ul = document.getElementById("grocery-list");

// Iterate over the groceries array
for (var i in groceries){
    
    // Get the current grocery object
    let grocery = groceries[i];

    // Calculate the total cost for this grocery item
    let totalCost = grocery.quantity * grocery.item_price;

    // Create a new p element
    let p = document.createElement("p");

    // Set the text of the p element to the grocery item and total cost
    p.textContent = "Quantity: " + grocery.quantity + " ---------- " + grocery.item + " ---------- " + "Total Cost:  $" + totalCost.toFixed(2);

    // Append the p element to the ul element
    ul!.appendChild(p);
}


