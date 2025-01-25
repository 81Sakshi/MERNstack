import React, { useState } from 'react';

function Component1() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  const store1 = (e) => {
    setFirst(parseFloat(e.target.value));
  };

  const store2 = (e) => {
    setSecond(parseFloat(e.target.value));
  };

  const Addition = () => {
    setResult(first + second);
  };

  const Subtraction = () => {
    setResult(first - second);
  };

  const Multiplication = () => {
    setResult(first * second);
  };

  const Division = () => {
    if (second !== 0) {
      setResult(first / second);
    } else {
      setResult("Cannot divide by zero");
    }
  };

  return (
    <>
      <form>
        <h1>CALCULATOR</h1>

        <input
          type="number"
          id="first"
          placeholder="Enter the first number"
          onChange={store1}
        />
        <br />
        <br />
        <input
          type="number"
          id="second"
          placeholder="Enter the second number"
          onChange={store2}
        />
        <br />
        <br />
        <input type="button" onClick={Addition} value="Addition" />
        <b> </b>
        <input type="button" onClick={Subtraction} value="Subtraction" />
        <b> </b>
        <input type="button" onClick={Multiplication} value="Multiplication" />
        <b> </b>
        <input type="button" onClick={Division} value="Division" />

        <h1>Result: {result}</h1>
      </form>
    </>
  );
}

export default Component1;
