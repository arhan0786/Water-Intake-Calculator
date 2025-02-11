function calculateWater() {
  const weight = parseFloat(document.getElementById('weight').value);
  const activity = parseFloat(document.getElementById('activity').value);
  
  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid weight.");
    return;
  }
  
  // Formula: Water Intake (liters) = Weight (kg) * Activity Level * 0.033
  const waterIntake = (weight * activity * 0.033).toFixed(2);
  
  document.getElementById('result').innerText = `You should drink ${waterIntake} liters of water daily.`;
}