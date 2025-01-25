import React, { useState } from 'react';

function Component3() {
  

  

  return (
    <>
      <form>
        <h1>Converter</h1>

        <input
          type="number"
          id="first"
          placeholder="Enter the weight"
          onChange={store1}
        />
        <br />
        <br />
        
        
        <input type="button" onClick={convert} value="convert" />
        <b> </b>
        

        <h1>Result: {result}</h1>
      </form>
    </>
  );
}

export default Component3;
