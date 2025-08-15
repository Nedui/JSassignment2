// Smoothie class definition
class Smoothie {
  constructor(size, base, fruits, addOns, notes) {
    this.size = size;
    this.base = base;
    this.fruits = fruits;
    this.addOns = addOns;
    this.notes = notes;
    this.price = this.calculatePrice();
  }

  // Price calculation method
  calculatePrice() {
    let price = 0;
    // The base price by size
    if (this.size === "Small") price += 4;
    if (this.size === "Medium") price += 5.5;
    if (this.size === "Large") price += 7;

    // Fruits ($0.75 each)
    price += this.fruits.length * 0.75;

    // Add-ons for $1 each
    price += this.addOns.length * 1;

    return price;
  }

  
  getDescription() {
    return `
      <h2>Your Smoothie Order Details </h2>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Base:</strong> ${this.base}</p>
      <p><strong>Fruits:</strong> ${this.fruits.join(", ") || "None"}</p>
      <p><strong>Add-ons:</strong> ${this.addOns.join(", ") || "None"}</p>
      <p><strong>Special Requests:</strong> ${this.notes || "No special requests"}</p>
      <h3>Total Price: $${this.price.toFixed(2)}</h3>
    `;
  }
}

// Form handling
document.getElementById("smoothieForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values fromm form
  const size = document.querySelector("input[name='size']:checked").value;
  const base = document.getElementById("base").value;
  const fruits = Array.from(document.querySelectorAll("input[name='fruits']:checked")).map(f => f.value);
  const addOns = Array.from(document.querySelectorAll("input[name='addons']:checked")).map(a => a.value);
  const notes = document.getElementById("notes").value.trim();

  // Create smoothie object
  const mySmoothie = new Smoothie(size, base, fruits, addOns, notes);

  // Display summary
  const summaryDiv = document.getElementById("orderSummary");
  summaryDiv.innerHTML = mySmoothie.getDescription();
  summaryDiv.classList.remove("hidden");
});
