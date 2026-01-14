// BMI Calculator Project

function calculateBMI() {
  // INPUT
  let firstName = prompt("First name:"); //nome
  let lastName = prompt("Last name:"); //cognome
  let gender = prompt("Gender (M or F):"); //sesso
  let age = parseInt(prompt("Age:")); //età
  let weight = parseFloat(prompt("Weight (kg):")); //peso (es. 70.5 o 68)
  let height = parseFloat(prompt("Height (m):")); //altezza (es. 1.75)

  // VALIDATION
  if (
    !firstName ||
    !lastName ||
    !gender ||
    isNaN(age) ||
    isNaN(weight) ||
    isNaN(height)
  ) {
    console.log("Error: All fields are empty or wrong.");
    return;
  }

  // Normalize gender
  gender = gender.toUpperCase();
  if (gender !== "M" && gender !== "F") {
    console.log("Error: Gender must be M or F.");
    return;
  }

  // Value checks
  if (age <= 0 || weight <= 0 || height <= 0) {
    console.log("Error: Age, weight and height must be greater than zero.");
    return;
  }

  // BMI CALCULATION
  let bmi = weight / height ** 2;
  let bmiCategory;

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi < 25) {
    bmiCategory = "Healthy";
  } else if (bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  // OUTPUT
  let title = gender === "M" ? "Mr." : "Ms.";
  console.log(
    `${title} ${firstName} ${lastName}, your BMI is ${bmi.toFixed(
      1
    )} (${bmiCategory})`
  );
}
