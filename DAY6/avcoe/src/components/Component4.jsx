import React, { useState } from 'react';

function Component4() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');

  const handleWeightChange = (e) => {
    setWeight(parseFloat(e.target.value));
  };

  const handleHeightChange = (e) => {
    setHeight(parseFloat(e.target.value));
  };

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      setResult(bmi.toFixed(2));
      categorizeBMI(bmi);
    } else {
      setResult('Please enter valid weight and height.');
      setBmiCategory('');
    }
  };

  const categorizeBMI = (bmi) => {
    if (bmi < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obesity');
    }
  };

  return (
    <div >
      <form>
        <h1>BMI Converter</h1>
        <input
          type="number"
          placeholder="Enter weight (kg)"
          onChange={handleWeightChange}
         
        />
        <br />
        <input
          type="number"
          placeholder="Enter height (m)"
          onChange={handleHeightChange}
          
        />
        <br />
        <input
          type="button"
          onClick={calculateBMI}
          value="Calculate BMI"
         
        />
        <h1>BMI: {result}</h1>
        {bmiCategory && <h2>Category: {bmiCategory}</h2>}
      </form>
    </div>
  );
}

export default Component4;
