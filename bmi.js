const calculate = document.getElementById('calculate');

function bmi() {
  const name = document.getElementById('name').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = document.getElementById('result');

  if (name !== '' && height !== '' && weight !== '') {
    
      const valueBMI = (weight / (height * height)).toFixed(1);

      let classification = "";

      if (valueBMI < 18.5) {
        classification = 'you are underweight, your risk of comorbidities is low.';
      } else if (valueBMI < 25) {
        classification = "you are normal weight, you don't have risk of comorbidities .";
      } else if (valueBMI < 30) {
        classification = 'you are overweight, your risk of comorbidities is increased.';
      } else if (valueBMI < 35) {
        classification = 'you are obesity class I, your risk of comorbidities is moderate.';
      } else if (valueBMI < 40) {
        classification = 'you are obesity class II, your risk of comorbidities is severe.';
      } else if (valueBMI > 40) {
        classification = 'you are obesity class III, your risk of comorbidities is very severe.';
      } 

      result.textContent = `${name} your BMI is ${valueBMI}, ${classification}`;

  } else {
    result.textContent = `Please, complete all fields! `
  }
}

calculate.addEventListener('click', bmi);