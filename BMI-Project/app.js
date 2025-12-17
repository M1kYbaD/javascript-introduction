// BMI Calculator

function calculateBMI() {
  // VARIABLES
  let firstName = prompt("First name:"); // nome
  let LastName = prompt("Last name:"); // cognome
  let gender = prompt("Gender (M or F):"); // sesso
  let age = parseInt(prompt("Age:")); // età
  let weight = parseInt(prompt("Weight (kg):")); // peso (kg)
  let height = parseFloat(prompt("Height (m):")); // altezza (m)

  let bmiCategory; // stato fisico

  // BMI CALCULATIONS
  let bmi = weight / height ** 2;

  /*
TABELLA CLASSI IMC:

'Underweight': < 18.5
'Healthy': 18.5 - 24.9
'Overweight': 25 - 29.9
'Obese': >= 30
*/

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = "Healthy";
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  // OUTPUT (display in browser's console)
  let message =
    gender === "M"
      ? `Mr. ${firstName} ${LastName}, your BMI is: ${bmi} corresponding to "${bmiCategory}"`
      : `Ms. ${firstName} ${LastName}, your BMI is: ${bmi} corresponding to "${bmiCategory}"`;
  console.log(message);
}
