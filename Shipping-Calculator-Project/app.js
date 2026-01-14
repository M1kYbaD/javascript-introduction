// Shipping Cost Calculator

function calculateShipping() {
  // Get user input: destination zone and package weight
  const zone = document.getElementById("zone").value.trim().toUpperCase();
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  // Validate input: ensure zone is entered and weight is a positive number
  if (!zone || isNaN(weight) || weight <= 0) {
    result.textContent = "⚠️ Please enter a valid destination and weight.";
    return; // Stop execution if input is invalid
  }

  // Base per kilogram rates
  const perKgRateUS = 4; // Rate per kg for US shipments
  const perKgRateOther = 6; // Rate per kg for all other destinations

  // --- Calculate shipping cost for US destinations ---
  function calculateUS(weight) {
    if (weight <= 1) {
      // Light packages (≤1 kg)
      return 10 + weight * perKgRateUS;
    } else if (weight <= 5) {
      // Medium packages (1–5 kg)
      return 20 + weight * perKgRateUS;
    } else {
      // Heavy packages (>5 kg)
      return 30 + weight * perKgRateUS;
    }
  }

  // --- Calculate shipping cost for 'non-US' destinations ---
  function calculateOther(weight) {
    if (weight <= 1) {
      // Light packages (≤1 kg)
      return 25 + weight * perKgRateOther;
    } else if (weight <= 5) {
      // Medium packages (1–5 kg)
      return 40 + weight * perKgRateOther;
    } else {
      // Heavy packages (>5 kg)
      return 60 + weight * perKgRateOther;
    }
  }

  // Determine which function to use based on zone
  const cost = zone === "USA" ? calculateUS(weight) : calculateOther(weight);

  // Format cost to two decimal places
  const formattedCost = cost.toFixed(2);

  // Display the final shipping cost to the user
  result.textContent = `Shipping cost to ${zone}: $${formattedCost}`;
}
