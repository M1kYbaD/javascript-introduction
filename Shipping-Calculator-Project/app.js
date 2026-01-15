// Shipping Cost Calculator

function calculateShipping() {
  // Get user input: origin zone, destination zone and package weight
  const originZone = document
    .getElementById("originZone")
    .value.trim()
    .toUpperCase();
  const destinationZone = document
    .getElementById("destinationZone")
    .value.trim()
    .toUpperCase();
  const packageWeight = parseFloat(
    document.getElementById("packageWeight").value
  );
  const result = document.getElementById("result");

  // Validate input: ensure zone is entered and weight is a positive number
  if (!destinationZone || isNaN(packageWeight) || packageWeight <= 0) {
    result.textContent = "⚠️ Please enter a valid destination or weight.";
    return; // Stop execution if input is invalid
  }

  // Base per kilogram rates
  const perKgRateUSA = 4; // Rate per kg for USA shipments
  const perKgRateOther = 6; // Rate per kg for all other destinations

  // --- Calculate shipping cost to USA ---
  function calculateToUSA(packageWeight) {
    if (packageWeight <= 2) {
      // Light packages (≤2 kg)
      return 8 + packageWeight * perKgRateUSA;
    } else if (packageWeight <= 6) {
      // Medium packages (2–6 kg)
      return 14 + packageWeight * perKgRateUSA;
    } else {
      // Heavy packages (>6 kg)
      return 22 + packageWeight * perKgRateUSA;
    }
  }

  // --- Calculate shipping cost to other destinations ---
  function calculateToOther(packageWeight) {
    if (packageWeight <= 2) {
      // Light packages (≤2 kg)
      return 12 + packageWeight * perKgRateOther;
    } else if (packageWeight <= 6) {
      // Medium packages (2–6 kg)
      return 20 + packageWeight * perKgRateOther;
    } else {
      // Heavy packages (>6 kg)
      return 36 + packageWeight * perKgRateOther;
    }
  }

  // Determine which function to use based on zone
  const cost =
    destinationZone === "USA"
      ? calculateToUSA(packageWeight)
      : calculateToOther(packageWeight);

  // Format cost to two decimal places
  const formattedCost = cost.toFixed(2);

  // Display the final shipping cost to the user
  result.textContent = `Shipping cost to ${destinationZone}: $${formattedCost}`;
}
