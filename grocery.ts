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

let table = document.getElementById("grocery-table");

// Iterate over the groceries array
for (let i in groceries){
    // Get the current grocery object
    let grocery = groceries[i];

    // Calculate the total cost for this grocery item
    let totalCost = grocery.quantity * grocery.item_price;

    // Create a new row and cells
    let row = document.createElement("tr");
    let cellItem = document.createElement("td");
    let cellQuantity = document.createElement("td");
    let cellCost = document.createElement("td");

    // Set the text of the cells
    cellItem.textContent = grocery.item;
    cellQuantity.textContent = String(grocery.quantity);
    cellCost.textContent = "$" + totalCost.toFixed(2);

    // Append the cells to the row
    row.appendChild(cellItem);
    row.appendChild(cellQuantity);
    row.appendChild(cellCost);

    // Append the row to the table
    table!.appendChild(row);
}


