import React from 'react';
import colorNames from 'colornames'

const Input = ( {colorValue, setColorValue, setHexValue, setIsDarkColorValue,isColorValue } ) => {
  return (
      <form className='form' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="color">Write color name: </label>
          <input
            type="text"
            autoFocus 
            placeholder='Write color name'
            value={colorValue} 
            onChange={(e) => {
                setColorValue(e.target.value) 
                setHexValue(colorNames(e.target.value))
            }}
            />

            <button 
                type='button'
                onClick={() => setIsDarkColorValue(!isColorValue)}    
            >Toggle Text</button>
      </form>
  );
};

export default Input;
